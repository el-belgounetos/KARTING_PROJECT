package fr.eb.tournament.architecture;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.web.bind.annotation.RestController;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchitectureTest {

    private static JavaClasses importedClasses;

    @BeforeAll
    static void setUp() {
        importedClasses = new ClassFileImporter()
                .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
                .importPackages("fr.eb.tournament");
    }

    @Test
    @DisplayName("Controllers must not depend directly on Repositories")
    void controllersShouldNotAccessRepositories() {
        noClasses().that().resideInAPackage("..controller..")
                .should().dependOnClassesThat().resideInAPackage("..repository..")
                .because("Controllers must interact with domain through services, never directly with repositories")
                .check(importedClasses);
    }

    @Test
    @DisplayName("Services should not depend on Controllers")
    void servicesShouldNotDependOnControllers() {
        noClasses().that().resideInAPackage("..service..")
                .should().dependOnClassesThat().resideInAPackage("..controller..")
                .because("Services must remain decoupled from presentation layer")
                .check(importedClasses);
    }

    @Test
    @DisplayName("Classes named *Controller should be annotated with @RestController")
    void controllersNamingAndPackageConvention() {
        classes().that().haveSimpleNameEndingWith("Controller")
                .should().beAnnotatedWith(RestController.class)
                .because("All controllers should be Spring @RestController")
                .check(importedClasses);
    }

    @Test
    @DisplayName("Classes in repository package should have Repository suffix")
    void repositoriesNamingConvention() {
        classes().that().resideInAPackage("..repository..")
                .should().haveSimpleNameEndingWith("Repository")
                .because("Repository interfaces must follow Spring Data naming conventions")
                .check(importedClasses);
    }
}
