@echo off

REM Chemin du répertoire où se trouve le fichier batch (Karting Project)
set BASE_DIR=%~dp0

REM Chemin relatif de ton fichier JAR généré (API Java Spring Boot)

cd "%BASE_DIR%nat-kart-api"
set JAR_PATH="%BASE_DIR%nat-kart-api\target\nat-kart-api-0.0.1-SNAPSHOT.jar"
call mvnw.cmd clean package -DskipTests

REM Étape 1 : Build Angular
echo Building Angular application...
cd "%BASE_DIR%nat-kart"
echo Current directory: %CD%
call npm install
call ng build --configuration=production

if %ERRORLEVEL% neq 0 (
    echo Erreur lors de la compilation Angular.
    pause
    exit /b 1
)

REM Étape 2 : Lancer l'API Java via le JAR en arrière-plan
echo Starting Java API via JAR...
start cmd /k "java -jar %JAR_PATH% --server.port=8080"

if %ERRORLEVEL% neq 0 (
    echo Erreur lors du démarrage de l'API Java.
    pause
    exit /b 1
)


REM Étape 3 : Lancer le serveur HTTP pour Angular
echo Starting Angular development server...
cd "%BASE_DIR%nat-kart"
echo Current directory: %CD%
call ng serve --port 4200

echo Tout est lancé !
pause