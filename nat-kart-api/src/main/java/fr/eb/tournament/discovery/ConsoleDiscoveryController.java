package fr.eb.tournament.discovery;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

/**
 * Controller for event-driven console discovery and administrator approval.
 */
@RestController
@RequestMapping("/api/admin/discovery")
@RequiredArgsConstructor
@Tag(name = "Console Discovery & Event Hub", description = "Endpoints for discovering consoles and confirming connections")
public class ConsoleDiscoveryController {

    private final ConsoleDiscoveryService discoveryService;

    @GetMapping("/consoles")
    @Operation(summary = "Get all network-discovered game stations and consoles")
    public ResponseEntity<List<DiscoveredConsoleDTO>> getDiscoveredConsoles() {
        return ResponseEntity.ok(discoveryService.getAllDiscoveredConsoles());
    }

    @PostMapping("/consoles/{stationId}/approve")
    @Operation(summary = "Admin confirms and connects a discovered console with verified type and discipline")
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
