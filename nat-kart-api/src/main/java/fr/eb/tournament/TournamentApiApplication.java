package fr.eb.tournament;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class TournamentApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(TournamentApiApplication.class, args);
    }

}
