package fr.eb.tournament;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class NatKartApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NatKartApiApplication.class, args);
	}

}
