package fr.eb.tournament.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * OpenAPI/Swagger configuration for API documentation.
 * Access at: http://localhost:8080/swagger-ui.html
 */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI natKartOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Nat-Kart Tournament API")
                        .description("API de gestion de tournois Mario Kart")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Nat-Kart Team")));
    }
}
