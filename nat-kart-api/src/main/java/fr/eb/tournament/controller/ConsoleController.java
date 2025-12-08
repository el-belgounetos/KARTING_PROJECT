
package fr.eb.tournament.controller;

import fr.eb.tournament.dto.ConsoleDTO;
import fr.eb.tournament.service.ConsoleService;
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
