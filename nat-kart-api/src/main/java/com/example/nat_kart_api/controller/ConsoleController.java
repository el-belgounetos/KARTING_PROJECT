
package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.ConsoleDTO;
import com.example.nat_kart_api.service.ConsoleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consoles")
public class ConsoleController {

    private final ConsoleService consoleService;

    public ConsoleController(ConsoleService consoleService) {
        this.consoleService = consoleService;
    }

    @GetMapping
    public List<ConsoleDTO> getAllConsoles() {
        return this.consoleService.getAllConsole();
    }
}
