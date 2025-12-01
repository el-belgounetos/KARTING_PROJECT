package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.service.ExcelService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
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
