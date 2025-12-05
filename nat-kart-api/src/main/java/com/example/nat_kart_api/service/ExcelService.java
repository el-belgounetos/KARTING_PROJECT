package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.HistoryDTO;
import com.example.nat_kart_api.dto.RankingDTO;
import jakarta.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFClientAnchor;
import org.apache.poi.xssf.usermodel.XSSFDrawing;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
public class ExcelService {

    private final HistoryService historyService;
    private final ImageService imageService;
    private final RankingService rankingService;

    public ExcelService(HistoryService historyService, ImageService imageService, RankingService rankingService) {
        this.historyService = historyService;
        this.imageService = imageService;
        this.rankingService = rankingService;
    }

    public void generateExcelForRanks(HttpServletResponse response) throws IOException {
        List<RankingDTO> ranks = rankingService.getAllRanks();
        List<HistoryDTO> historique = historyService.getPlayerHistory();

        Workbook workbook = new XSSFWorkbook();

        // Première feuille : Classement
        Sheet classementSheet = workbook.createSheet("Classement");
        Row headerRow = classementSheet.createRow(0);
        String[] columns = { "Rang", "Nom", "Image", "Points", "Nombre de victoires" };

        for (int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);
        }

        int rowIdx = 1;
        for (RankingDTO karter : ranks) {
            Row row = classementSheet.createRow(rowIdx++);
            row.createCell(0).setCellValue(karter.getRank());
            row.createCell(1).setCellValue(karter.getName());
            row.createCell(3).setCellValue(karter.getPoints());
            row.createCell(4).setCellValue(karter.getVictory());

            // Recherche de l'image
            String imagePath = null;
            if (karter.getPicture() != null && !karter.getPicture().isEmpty()) {
                imagePath = this.imageService.findMatchingPicture(karter.getPicture());
            }

            if (imagePath != null) {
                InputStream inputStream = new FileInputStream(imagePath);
                byte[] imageBytes = inputStream.readAllBytes();
                int pictureIdx = workbook.addPicture(imageBytes, Workbook.PICTURE_TYPE_PNG);
                inputStream.close();

                XSSFDrawing drawing = (XSSFDrawing) classementSheet.createDrawingPatriarch();

                XSSFClientAnchor anchor = new XSSFClientAnchor();
                anchor.setCol1(2); // Colonne 2 pour "Image"
                anchor.setRow1(rowIdx - 1); // Ligne actuelle
                anchor.setCol2(3); // Image finissant dans la colonne 3
                anchor.setRow2(rowIdx); // Image prenant la hauteur de la ligne

                drawing.createPicture(anchor, pictureIdx);
            }

            // Ajuster la taille des colonnes pour correspondre à l'image
            classementSheet.setColumnWidth(2, 4000); // Ajuster la largeur de la colonne de l'image
            classementSheet.setDefaultRowHeight((short) (classementSheet.getDefaultRowHeight() * 2));
        }

        for (int i = 0; i < columns.length; i++) {
            classementSheet.autoSizeColumn(i);
        }

        // Deuxième feuille : Historique
        Sheet historiqueSheet = workbook.createSheet("Historique");
        Row historiqueHeaderRow = historiqueSheet.createRow(0);
        String[] historiqueColumns = { "Nom", "Nom de la console", "Nom de la course", "Points", "Victoire" };

        for (int i = 0; i < historiqueColumns.length; i++) {
            Cell cell = historiqueHeaderRow.createCell(i);
            cell.setCellValue(historiqueColumns[i]);
        }

        int historiqueRowIdx = 1;
        for (HistoryDTO historiqueItem : historique) {
            Row row = historiqueSheet.createRow(historiqueRowIdx++);
            row.createCell(0).setCellValue(historiqueItem.getPlayer().getName()); // Nom du joueur
            row.createCell(1).setCellValue(historiqueItem.getConsole().getName()); // Nom de la console
            row.createCell(2).setCellValue(historiqueItem.getCups().getName()); // Nom de la course
            row.createCell(3).setCellValue(historiqueItem.getPoints()); // Nombre de points
            row.createCell(4).setCellValue(historiqueItem.isVictory() ? "Oui" : "Non"); // Victoire

            // Recherche et ajout de l'image du joueur
            String playerImagePath = null;
            if (historiqueItem.getPlayer().getPicture() != null && !historiqueItem.getPlayer().getPicture().isEmpty()) {
                playerImagePath = this.imageService.findMatchingPicture(historiqueItem.getPlayer().getPicture());
            }

            if (playerImagePath != null) {
                InputStream inputStream = new FileInputStream(playerImagePath);
                byte[] imageBytes = inputStream.readAllBytes();
                workbook.addPicture(imageBytes, Workbook.PICTURE_TYPE_PNG);
                inputStream.close();
            }
        }

        // Définir les en-têtes HTTP pour le téléchargement du fichier Excel
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=classement_et_historique.xlsx");

        workbook.write(response.getOutputStream());
        workbook.close();
    }

}
