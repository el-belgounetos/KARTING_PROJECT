@echo off
setlocal

echo ===================================================
echo   GMK Tournament Event System - Docker Launcher
echo ===================================================

if "%1"=="--postgres" (
    echo [MODE] Demarrage avec PostgreSQL (Persistant)...
    set COMPOSE_PROFILES=postgres
    set SPRING_PROFILES_ACTIVE=postgres
    set SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/natkart
    set SPRING_DATASOURCE_USERNAME=kart_admin
    set SPRING_DATASOURCE_PASSWORD=kart_secret
    docker compose --profile postgres up --build -d
) else (
    echo [MODE] Demarrage standard avec H2 (Zero-configuration)...
    echo        (Pour activer PostgreSQL : docker-start.bat --postgres)
    docker compose up --build -d
)

echo.
echo ===================================================
echo [OK] Services en cours d'execution :
echo   - Frontend Web : http://localhost:4200
echo   - Backend API  : http://localhost:8080/swagger-ui/index.html
echo ===================================================
endlocal
