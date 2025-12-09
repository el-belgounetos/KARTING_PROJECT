package fr.eb.tournament.service;

import fr.eb.tournament.dto.ConsoleDTO;
import fr.eb.tournament.dto.CounterDTO;
import fr.eb.tournament.dto.CupsDTO;
import fr.eb.tournament.entity.ConsoleCounterEntity;
import fr.eb.tournament.repository.ConsoleCounterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    private final ConsoleCounterRepository consoleCounterRepository;

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

        // Fetch all counters to populate count field
        List<ConsoleCounterEntity> counters = consoleCounterRepository.findAll();

        for (String picture : consolesPictures) {
            ConsoleDTO console = new ConsoleDTO();
            console.setPicture(picture);
            console.setName(imageService.formatPictureName(picture, "/images/consoles/"));
            console.setCups(new ArrayList<>());

            // Set count from counters
            counters.stream()
                    .filter(c -> c.getConsoleName().equals(console.getName()))
                    .findFirst()
                    .ifPresent(c -> console.setCount(c.getSelectionCount()));

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
     * Gets all counters from database.
     *
     * @return List of counter DTOs
     */
    public List<CounterDTO> getAllCounters() {
        return consoleCounterRepository.findAll().stream()
                .map(entity -> new CounterDTO(entity.getSelectionCount(), entity.getConsoleName()))
                .toList();
    }

    /**
     * Updates all counters in database.
     * Updates existing counters, creates new ones, and deletes orphaned counters.
     *
     * @param dto List of counter DTOs to set
     */
    @Transactional
    public void setAllCounters(List<CounterDTO> dto) {
        // Get list of console names from the DTO
        List<String> consoleNamesInDto = dto.stream()
                .map(CounterDTO::getName)
                .toList();

        // Delete counters that are no longer in the list (orphaned consoles)
        List<ConsoleCounterEntity> allCounters = consoleCounterRepository.findAll();
        for (ConsoleCounterEntity entity : allCounters) {
            if (!consoleNamesInDto.contains(entity.getConsoleName())) {
                consoleCounterRepository.delete(entity);
            }
        }

        // Update existing or create new counters
        for (CounterDTO counterDTO : dto) {
            ConsoleCounterEntity entity = consoleCounterRepository.findByConsoleName(counterDTO.getName())
                    .orElseGet(() -> {
                        // Create new counter if it doesn't exist
                        ConsoleCounterEntity newEntity = new ConsoleCounterEntity();
                        newEntity.setConsoleName(counterDTO.getName());
                        return newEntity;
                    });

            // Update the counter value
            entity.setSelectionCount(counterDTO.getCounter());
            consoleCounterRepository.save(entity);
        }
    }

    /**
     * Builds counters for all available consoles.
     * Initializes counter to 0 for each console if not already exists in database.
     */
    @Transactional
    public void buildAllCountersByConsoles() {
        List<ConsoleDTO> consoles = this.getAllConsole();

        // Get all existing counter names
        List<String> existingCounterNames = consoleCounterRepository.findAll().stream()
                .map(ConsoleCounterEntity::getConsoleName)
                .toList();

        // Only create counters for consoles that don't have one yet
        for (ConsoleDTO console : consoles) {
            if (!existingCounterNames.contains(console.getName())) {
                ConsoleCounterEntity entity = new ConsoleCounterEntity();
                entity.setSelectionCount(0);
                entity.setConsoleName(console.getName());
                consoleCounterRepository.save(entity);
            }
        }
    }
}
