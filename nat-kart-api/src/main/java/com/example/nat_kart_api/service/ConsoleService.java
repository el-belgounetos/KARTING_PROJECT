package com.example.nat_kart_api.service;

import com.example.nat_kart_api.dto.ConsoleDTO;
import com.example.nat_kart_api.dto.CounterDTO;
import com.example.nat_kart_api.dto.CupsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * Service responsible for managing game consoles, cups, and counters.
 */
@Service
@RequiredArgsConstructor
public class ConsoleService {

    private final ImageService imageService;
    private List<CounterDTO> counters = new ArrayList<>();

    @PostConstruct
    public void init() {
        this.buildAllCountersByConsoles();
    }

    /**
     * Gets all available consoles with their associated cups.
     *
     * @return List of console DTOs with cup information
     */
    public List<ConsoleDTO> getAllConsole() {
        List<ConsoleDTO> result = new ArrayList<>();
        List<String> consolesPictures = imageService.extractPicturesFromFolder("images/consoles", List.of());

        for (String picture : consolesPictures) {
            ConsoleDTO console = new ConsoleDTO();
            console.setPicture(picture);
            console.setName(imageService.formatPictureName(picture, "/images/consoles/"));
            console.setCups(new ArrayList<>());

            List<String> consoleCups = imageService.extractPicturesFromFolder(
                    "images/cups/" + console.getName(),
                    List.of());

            for (String cup : consoleCups) {
                CupsDTO cupDTO = new CupsDTO();
                cupDTO.setPicture(cup);
                cupDTO.setName(imageService.formatPictureName(cup, "/images/cups/" + console.getName() + "/"));
                console.getCups().add(cupDTO);
            }

            result.add(console);
        }
        return result;
    }

    /**
     * Gets all counters.
     *
     * @return List of counter DTOs
     */
    public List<CounterDTO> getAllCounters() {
        return this.counters;
    }

    /**
     * Updates all counters.
     *
     * @param dto List of counter DTOs to set
     */
    public void setAllCounters(List<CounterDTO> dto) {
        this.counters = dto;
    }

    /**
     * Builds counters for all available consoles.
     * Initializes counter to 0 for each console.
     */
    public void buildAllCountersByConsoles() {
        List<ConsoleDTO> consoles = this.getAllConsole();
        for (ConsoleDTO console : consoles) {
            this.counters.add(new CounterDTO(0, console.getName()));
        }
    }
}

