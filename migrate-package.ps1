# Package Migration Script
# Migrates from com.example.nat_kart_api to fr.eb.tournament

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Package Migration Tool" -ForegroundColor Cyan
Write-Host "From: com.example.nat_kart_api" -ForegroundColor Yellow
Write-Host "To:   fr.eb.tournament" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

$oldPackagePath = "com/example/nat_kart_api"
$newPackagePath = "fr/eb/tournament"
$oldPackageDot = "com.example.nat_kart_api"
$newPackageDot = "fr.eb.tournament"

$srcPath = "nat-kart-api/src/main/java"
$testPath = "nat-kart-api/src/test/java"

# Step 1: Create new package structure
Write-Host "[1/6] Creating new package structure..." -ForegroundColor Yellow
$newDir = "$srcPath/$newPackagePath"
New-Item -ItemType Directory -Path $newDir -Force | Out-Null
Write-Host "  ✓ Created: $newDir" -ForegroundColor Green

# Step 2: Copy all files to new location
Write-Host "`n[2/6] Copying files to new package..." -ForegroundColor Yellow
if (Test-Path "$srcPath/$oldPackagePath") {
    Copy-Item -Path "$srcPath/$oldPackagePath/*" -Destination $newDir -Recurse -Force
    $fileCount = (Get-ChildItem -Path $newDir -Recurse -File).Count
    Write-Host "  ✓ Copied $fileCount files" -ForegroundColor Green
} else {
    Write-Host "  ✗ Source directory not found!" -ForegroundColor Red
    exit 1
}

# Step 3: Update package declarations and imports in Java files
Write  -Host "`n[3/6] Updating package declarations and imports in Java files..." -ForegroundColor Yellow
$javaFiles = Get-ChildItem -Path $newDir -Recurse -Include *.java
$updatedCount = 0
foreach ($file in $javaFiles) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Update package declaration
    $content = $content -replace "package $oldPackageDot", "package $newPackageDot"
    
    # Update imports
    $content = $content -replace "import $oldPackageDot", "import $newPackageDot"
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $updatedCount++
    }
}
Write-Host "  ✓ Updated $updatedCount Java files" -ForegroundColor Green

# Step 4: Update pom.xml
Write-Host "`n[4/6] Updating pom.xml..." -ForegroundColor Yellow
$pomPath = "nat-kart-api/pom.xml"
if (Test-Path $pomPath) {
    $pomContent = Get-Content $pomPath -Raw
    $pomContent = $pomContent -replace "<groupId>com\.example</groupId>", "<groupId>fr.eb</groupId>"
    $pomContent = $pomContent -replace "<artifactId>nat-kart-api</artifactId>", "<artifactId>tournament-api</artifactId>"
    $pomContent = $pomContent -replace "<name>nat-kart-api</name>", "<name>tournament-api</name>"
    $pomContent = $pomContent -replace "<description>Tournament project</description>", "<description>Tournament Management System</description>"
    Set-Content -Path $pomPath -Value $pomContent -NoNewline
    Write-Host "  ✓ Updated pom.xml" -ForegroundColor Green
} else {
    Write-Host "  ⚠ pom.xml not found" -ForegroundColor DarkYellow
}

# Step 5: Update application.properties
Write-Host "`n[5/6] Updating application.properties..." -ForegroundColor Yellow
$appPropsPath = "nat-kart-api/src/main/resources/application.properties"
if (Test-Path $appPropsPath) {
    $propsContent = Get-Content $appPropsPath -Raw
    $propsContent = $propsContent -replace "spring\.application\.name=nat-kart-api", "spring.application.name=tournament-api"
    $propsContent = $propsContent -replace "logging\.level\.com\.example\.nat_kart_api", "logging.level.fr.eb.tournament"
    Set-Content -Path $appPropsPath -Value $propsContent -NoNewline
    Write-Host "  ✓ Updated application.properties" -ForegroundColor Green
} else {
    Write-Host "  ⚠ application.properties not found" -ForegroundColor DarkYellow
}

# Step 6: Delete old package (with confirmation)
Write-Host "`n[6/6] Cleaning up old package..." -ForegroundColor Yellow
Write-Host "  Do you want to DELETE the old package directory? (y/n): " -ForegroundColor Red -NoNewline
$confirmation = Read-Host
if ($confirmation -eq 'y' -or $confirmation -eq 'Y') {
    Remove-Item -Path "$srcPath/$oldPackagePath" -Recurse -Force
    Write-Host "  ✓ Deleted old package: $srcPath/$oldPackagePath" -ForegroundColor Green
} else {
    Write-Host "  ⚠ Old package kept (manual deletion required)" -ForegroundColor DarkYellow
}

# Summary
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Migration Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Run: mvn clean compile" -ForegroundColor White
Write-Host "2. Run: mvn spring-boot:run" -ForegroundColor White
Write-Host "3. Test: http://localhost:8080/api/players" -ForegroundColor White
Write-Host "4. Commit changes if everything works" -ForegroundColor White
Write-Host "`n"
