package fr.eb.tournament.service;

import fr.eb.tournament.dto.HistoryDTO;
import fr.eb.tournament.dto.RankingDTO;
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

    public static final int COL_RANK = 0;
    public static final int COL_NAME = 1;
    public static final int COL_IMAGE = 2;
    public static final int COL_POINTS = 3;
    public static final int COL_VICTORIES = 4;

    public static final int COL_HIST_PLAYER = 0;
    public static final int COL_HIST_CONSOLE = 1;
    public static final int COL_HIST_CUP = 2;
    public static final int COL_HIST_POINTS = 3;
    public static final int COL_HIST_VICTORY = 4;

    public static final int IMAGE_COLUMN_WIDTH = 4000;
    public static final short ROW_HEIGHT_SCALE = 2;
    public static final int HEADER_ROW_INDEX = 0;
    public static final int DATA_START_ROW_INDEX = 1;

    private final HistoryService historyService;
    private final ImageService imageService;
    private final RankingService rankingService;

    public ExcelService(
            HistoryService historyService,
            ImageService imageService,
            RankingService rankingService) {
        this.historyService = historyService;
        this.imageService = imageService;
        this.rankingService = rankingService;
    }

    public void generateExcelForRanks(HttpServletResponse response) throws IOException {
        List<RankingDTO> ranks = rankingService.getAllRanks();
        List<HistoryDTO> historique = historyService.getPlayerHistory();
        generateExcel(ranks, historique, response);
    }

    public void generateExcel(List<RankingDTO> ranks, List<HistoryDTO> historique, HttpServletResponse response)
            throws IOException {
        Workbook workbook = new XSSFWorkbook();

        // Première feuille : Classement
        Sheet classementSheet = workbook.createSheet("Classement");
        Row headerRow = classementSheet.createRow(HEADER_ROW_INDEX);
        String[] columns = { "Rang", "Nom", "Image", "Points", "Nombre de victoires" };

        for (int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);
        }

        int rowIdx = DATA_START_ROW_INDEX;
        for (RankingDTO karter : ranks) {
            Row row = classementSheet.createRow(rowIdx++);
            row.createCell(COL_RANK).setCellValue(karter.getRank());
            row.createCell(COL_NAME).setCellValue(karter.getName());
            row.createCell(COL_POINTS).setCellValue(karter.getPoints());
            row.createCell(COL_VICTORIES).setCellValue(karter.getVictory());

            // Recherche de l'image
            String imagePath = null;
            if (karter.getPicture() != null && !karter.getPicture().isEmpty()) {
                imagePath = this.imageService.findMatchingPicture(karter.getPicture());
            }

            if (imagePath != null) {
                try (InputStream inputStream = new FileInputStream(imagePath)) {
                    byte[] imageBytes = inputStream.readAllBytes();
                    int pictureIdx = workbook.addPicture(imageBytes, Workbook.PICTURE_TYPE_PNG);

                    XSSFDrawing drawing = (XSSFDrawing) classementSheet.createDrawingPatriarch();
                    XSSFClientAnchor anchor = new XSSFClientAnchor();
                    anchor.setCol1(COL_IMAGE);
                    anchor.setRow1(rowIdx - 1);
                    anchor.setCol2(COL_POINTS);
                    anchor.setRow2(rowIdx);

                    drawing.createPicture(anchor, pictureIdx);
                }
            }

            classementSheet.setColumnWidth(COL_IMAGE, IMAGE_COLUMN_WIDTH);
            classementSheet.setDefaultRowHeight((short) (classementSheet.getDefaultRowHeight() * ROW_HEIGHT_SCALE));
        }

        for (int i = 0; i < columns.length; i++) {
            classementSheet.autoSizeColumn(i);
        }

        // Deuxième feuille : Historique
        Sheet historiqueSheet = workbook.createSheet("Historique");
        Row historiqueHeaderRow = historiqueSheet.createRow(HEADER_ROW_INDEX);
        String[] historiqueColumns = { "Nom", "Nom de la console", "Nom de la course", "Points", "Victoire" };

        for (int i = 0; i < historiqueColumns.length; i++) {
            Cell cell = historiqueHeaderRow.createCell(i);
            cell.setCellValue(historiqueColumns[i]);
        }

        int historiqueRowIdx = DATA_START_ROW_INDEX;
        for (HistoryDTO historiqueItem : historique) {
            Row row = historiqueSheet.createRow(historiqueRowIdx++);
            row.createCell(COL_HIST_PLAYER).setCellValue(historiqueItem.getPlayer().getName());
            row.createCell(COL_HIST_CONSOLE).setCellValue(historiqueItem.getConsole().getName());
            row.createCell(COL_HIST_CUP).setCellValue(historiqueItem.getCups().getName());
            row.createCell(COL_HIST_POINTS).setCellValue(historiqueItem.getPoints());
            row.createCell(COL_HIST_VICTORY).setCellValue(historiqueItem.isVictory() ? "Oui" : "Non");

            String playerImagePath = null;
            if (historiqueItem.getPlayer().getPicture() != null && !historiqueItem.getPlayer().getPicture().isEmpty()) {
                playerImagePath = this.imageService.findMatchingPicture(historiqueItem.getPlayer().getPicture());
            }

            if (playerImagePath != null) {
                try (InputStream inputStream = new FileInputStream(playerImagePath)) {
                    byte[] imageBytes = inputStream.readAllBytes();
                    workbook.addPicture(imageBytes, Workbook.PICTURE_TYPE_PNG);
                }
            }
        }

        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=classement_et_historique.xlsx");

        workbook.write(response.getOutputStream());
        workbook.close();
    }
}
