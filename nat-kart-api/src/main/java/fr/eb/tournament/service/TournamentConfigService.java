package fr.eb.tournament.service;

import fr.eb.tournament.dto.TournamentConfigDTO;
import fr.eb.tournament.entity.TournamentConfig;
import fr.eb.tournament.mapper.TournamentConfigMapper;
import fr.eb.tournament.repository.TournamentConfigRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service for managing tournament configuration.
 * Uses a singleton pattern - only one configuration exists in the database.
 */
@Service
public class TournamentConfigService {

    private final TournamentConfigRepository repository;
    private final TournamentConfigMapper mapper;

    public TournamentConfigService(TournamentConfigRepository repository, TournamentConfigMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    /**
     * Get the current tournament configuration.
     * Creates a default configuration if none exists.
     *
     * @return TournamentConfigDTO
     */
    @Transactional(readOnly = true)
    public TournamentConfigDTO getConfig() {
        TournamentConfig config = repository.findAll()
                .stream()
                .findFirst()
                .orElseGet(this::createDefaultConfig);
        return mapper.toDTO(config);
    }

    /**
     * Update the tournament configuration.
     * If no configuration exists, creates one.
     *
     * @param configDTO the configuration to save
     * @return TournamentConfigDTO
     */
    @Transactional
    public TournamentConfigDTO updateConfig(TournamentConfigDTO configDTO) {
        TournamentConfig config = repository.findAll()
                .stream()
                .findFirst()
                .orElseGet(TournamentConfig::new);

        config.setAllowPlayerImageReuse(configDTO.getAllowPlayerImageReuse());
        config.setAllowTeamLogoReuse(configDTO.getAllowTeamLogoReuse());

        TournamentConfig saved = repository.save(config);
        return mapper.toDTO(saved);
    }

    /**
     * Create a default configuration with all options enabled.
     *
     * @return TournamentConfig
     */
    private TournamentConfig createDefaultConfig() {
        TournamentConfig config = new TournamentConfig(true, true);
        return repository.save(config);
    }
}
