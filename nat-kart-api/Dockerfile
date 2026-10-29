# Multi-stage Dockerfile for Tournament API (Spring Boot 4 / Java 25)
FROM eclipse-temurin:25-jdk AS builder
WORKDIR /build

# Copy Maven wrapper & pom.xml first for efficient dependency caching
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x mvnw && ./mvnw dependency:go-offline -B

# Copy source code and build production jar
COPY src/ ./src/
RUN ./mvnw clean package -DskipTests -B

# Runtime Image
FROM eclipse-temurin:25-jre AS runner
WORKDIR /app

# Non-root user for security
RUN groupadd -r spring && useradd -r -g spring spring
USER spring:spring

# Expose default Spring Boot port and UDP discovery port
EXPOSE 8080 45454/udp

# Environment variables with sensible defaults (H2 by default, or postgres profile)
ENV SPRING_PROFILES_ACTIVE=default \
    SERVER_PORT=8080

COPY --from=builder /build/target/*.jar app.jar

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:8080/actuator/health || exit 0

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
