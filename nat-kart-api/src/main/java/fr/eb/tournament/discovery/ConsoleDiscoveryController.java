package fr.eb.tournament.discovery;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

/**
 * Controller for event-driven console discovery, manual station entry,
 * player-slot verification, and post-session score validation/adjustment.
 */
@RestController
@RequestMapping("/api/admin/discovery")
@RequiredArgsConstructor
@Tag(name = "Console Discovery & Event Hub", description = "Endpoints for discovering consoles, manual stations, and validating scores")
public class ConsoleDiscoveryController {

    private final ConsoleDiscoveryService discoveryService;

    @GetMapping("/consoles")
    @Operation(summary = "Get all network-discovered and manual game stations/consoles")
    public ResponseEntity<List<DiscoveredConsoleDTO>> getDiscoveredConsoles() {
        return ResponseEntity.ok(discoveryService.getAllDiscoveredConsoles());
    }

    @PostMapping("/consoles/manual")
    @Operation(summary = "Manually register an offline game station / console without an automated client")
    public ResponseEntity<DiscoveredConsoleDTO> createManualStation(
            @RequestBody ManualStationCreationDTO request) {
        DiscoveredConsoleDTO created = discoveryService.createManualStation(request);
        return ResponseEntity.ok(created);
    }

    @PostMapping("/consoles/{stationId}/approve")
    @Operation(summary = "Admin confirms and connects a discovered console with verified type, discipline, and player slot mappings")
    public ResponseEntity<DiscoveredConsoleDTO> approveConsole(
            @PathVariable String stationId,
            @RequestBody ConsoleApprovalRequestDTO request) {
        try {
            DiscoveredConsoleDTO approved = discoveryService.approveConsole(stationId, request);
            return ResponseEntity.ok(approved);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/consoles/{stationId}/session-results")
    @Operation(summary = "Get the staged session results for a console (slots, characters, calculated points) for admin review")
    public ResponseEntity<MatchResultValidationDTO> getSessionResults(@PathVariable String stationId) {
        try {
            MatchResultValidationDTO results = discoveryService.getStagedResults(stationId);
            return ResponseEntity.ok(results);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/consoles/{stationId}/adjust-results")
    @Operation(summary = "Save or adjust the player-to-slot mapping and points before final commit")
    public ResponseEntity<Void> adjustResults(
            @PathVariable String stationId,
            @RequestBody MatchResultValidationDTO results) {
        discoveryService.updateStagedResults(stationId, results);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/consoles/{stationId}/commit-results")
    @Operation(summary = "Validate scores and award tournament points per console after admin verification/adjustment")
    public ResponseEntity<DiscoveredConsoleDTO> commitResults(
            @PathVariable String stationId,
            @RequestBody MatchResultValidationDTO validationDTO) {
        validationDTO.setStationId(stationId);
        DiscoveredConsoleDTO console = discoveryService.commitMatchResults(validationDTO);
        return ResponseEntity.ok(console);
    }

    @PostMapping("/consoles/{stationId}/reject")
    @Operation(summary = "Admin rejects a discovered console")
    public ResponseEntity<DiscoveredConsoleDTO> rejectConsole(@PathVariable String stationId) {
        try {
            DiscoveredConsoleDTO rejected = discoveryService.rejectConsole(stationId);
            return ResponseEntity.ok(rejected);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/consoles/{stationId}/disconnect")
    @Operation(summary = "Admin disconnects a console")
    public ResponseEntity<DiscoveredConsoleDTO> disconnectConsole(@PathVariable String stationId) {
        try {
            DiscoveredConsoleDTO disconnected = discoveryService.disconnectConsole(stationId);
            return ResponseEntity.ok(disconnected);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/beacon")
    @Operation(summary = "Manual HTTP registration / beacon endpoint for consoles outside UDP broadcast scope")
    public ResponseEntity<Void> receiveBeacon(
            @RequestBody DiscoveredConsoleDTO beaconDTO,
            @RequestHeader(value = "X-Forwarded-For", required = false) String forwardIp) {
        if (forwardIp != null && !forwardIp.isBlank()) {
            beaconDTO.setIpAddress(forwardIp.split(",")[0].trim());
        }
        discoveryService.registerManual(beaconDTO);
        return ResponseEntity.accepted().build();
    }
}
