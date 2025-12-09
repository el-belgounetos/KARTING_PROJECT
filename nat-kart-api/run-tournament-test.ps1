# Script pour exécuter TournamentMakerTest
Write-Host "╔═══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  Exécution TournamentMakerTest                     ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Compile first
Write-Host "📦 Compilation du projet..." -ForegroundColor Yellow
& .\mvnw.cmd compile -q

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur de compilation" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Compilation réussie`n" -ForegroundColor Green

# Run the test
Write-Host "🚀 Exécution du test...`n" -ForegroundColor Yellow
& .\mvnw.cmd exec:java -D"exec.mainClass=fr.eb.tournament.util.planning.TournamentMakerTest" -D"exec.cleanupDaemonThreads=false"
