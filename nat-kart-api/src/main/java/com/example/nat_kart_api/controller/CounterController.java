
package com.example.nat_kart_api.controller;

import com.example.nat_kart_api.dto.CounterDTO;
import com.example.nat_kart_api.service.ConsoleService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/counters")
public class CounterController {

    private final ConsoleService consoleService;

    public CounterController(ConsoleService consoleService) {
        this.consoleService = consoleService;
    }

    @GetMapping
    public List<CounterDTO> getAllCounters() {
        return this.consoleService.getAllCounters();
    }

    @PostMapping
    public void updateAllCounters(@Valid @RequestBody List<CounterDTO> counters) {
        this.consoleService.setAllCounters(counters);
    }
}
