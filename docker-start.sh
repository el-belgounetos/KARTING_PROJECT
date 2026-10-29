#!/usr/bin/env bash
set -e

echo "==================================================="
echo "  GMK Tournament Event System - Docker Launcher"
echo "==================================================="

if [ "$1" == "--postgres" ]; then
    echo "[MODE] Démarrage avec PostgreSQL (Persistant)..."
    export COMPOSE_PROFILES=postgres
    export SPRING_PROFILES_ACTIVE=postgres
    export SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/natkart
    export SPRING_DATASOURCE_USERNAME=kart_admin
    export SPRING_DATASOURCE_PASSWORD=kart_secret
    docker compose --profile postgres up --build -d
else
    echo "[MODE] Démarrage standard avec H2 (Zero-configuration)..."
    echo "       (Pour activer PostgreSQL : ./docker-start.sh --postgres)"
    docker compose up --build -d
fi

echo ""
echo "==================================================="
echo "[OK] Services en cours d'exécution :"
echo "  - Frontend Web : http://localhost:4200"
echo "  - Backend API  : http://localhost:8080/swagger-ui/index.html"
echo "==================================================="
