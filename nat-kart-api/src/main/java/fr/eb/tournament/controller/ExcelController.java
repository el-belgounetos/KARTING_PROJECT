package fr.eb.tournament.controller;

import fr.eb.tournament.service.ExcelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class ExcelController {

    private final ExcelService excelService;

    public ExcelController(ExcelService excelService) {
        this.excelService = excelService;
    }

    @GetMapping("/ranks/excel")
    public void downloadExcel(HttpServletResponse response) throws IOException {
        excelService.generateExcelForRanks(response);
    }
}
