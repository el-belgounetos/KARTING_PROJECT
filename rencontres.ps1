# ═══════════════════════════════════════════════════════════════════════
# Script d'optimisation de planning de tournoi Mario Kart - Version 2.0
# ═══════════════════════════════════════════════════════════════════════

param(
    [string]$ConfigFile = "config.json"
)

# ═══════════════════════════════════════════════════════════════════════
# Chargement de la configuration depuis le fichier JSON
# ═══════════════════════════════════════════════════════════════════════

Write-Host "╔═══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  CHARGEMENT DE LA CONFIGURATION                   ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════╝" -ForegroundColor Cyan

if (-not (Test-Path $ConfigFile)) {
    Write-Host "❌ Fichier de configuration non trouvé: $ConfigFile" -ForegroundColor Red
    exit 1
}

try {
    $config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
    Write-Host "✅ Configuration chargée depuis: $ConfigFile`n" -ForegroundColor Green
} catch {
    Write-Host "❌ Erreur lors de la lecture du fichier JSON: $_" -ForegroundColor Red
    exit 1
}

# Extraction des paramètres
$NbJoueurs = $config.tournament.players.nbJoueurs
$NbRelances = $config.parameters.nbRelances
$NbIterationsParRelance = $config.parameters.nbIterationsParRelance

# Mapping Pokémon depuis le JSON
$Pokemon = @{}
foreach ($prop in $config.pokemon_mapping.PSObject.Properties) {
    if ($prop.Name -ne "description") {
        $Pokemon[[int]$prop.Name] = $prop.Value
    }
}

# Configuration des consoles depuis le JSON
$Consoles = @()
foreach ($console in $config.tournament.consoles) {
    $Consoles += @{ 
        Nom = $console.nom
        JoueursParPartie = $console.joueursParPartie
        NbGroupes = $console.nbGroupes
        Couleur = $console.couleur
    }
}

# Fichier de sortie depuis le JSON
$OutputReport = $config.output.excel.main_file

$NbSessions = $Consoles.Count
$JoueursParSession = ($Consoles | ForEach-Object { $_.JoueursParPartie * $_.NbGroupes } | Measure-Object -Sum).Sum / $NbSessions

# Paramètres d'optimisation depuis le JSON
$DisplayInterval = $config.optimization.scoring.display_interval
$EarlyStoppingThreshold = $config.optimization.scoring.early_stopping.optimal_threshold
$DossierScores = $config.output.excel.score_sheets.directory

# ═══════════════════════════════════════════════════════════════════════
# Fonctions utilitaires
# ═══════════════════════════════════════════════════════════════════════

function New-PlanningInitial {
    $planning = @{}
    
    $joueursMelanges = 1..$NbJoueurs | Get-Random -Count $NbJoueurs
    
    $joueursParSession = [Math]::Floor($NbJoueurs / $NbSessions)
    $reste = $NbJoueurs % $NbSessions
    
    $groupesSession = @()
    $index = 0
    
    Write-Host "📊 Répartition initiale :" -ForegroundColor Cyan
    
    for ($s = 0; $s -lt $NbSessions; $s++) {
        $nbJoueursSession = $joueursParSession
        if ($s -lt $reste) {
            $nbJoueursSession++
        }
        
        $joueursSession = @()
        for ($i = 0; $i -lt $nbJoueursSession; $i++) {
            $joueursSession += $joueursMelanges[$index]
            $index++
        }
        $groupesSession += ,@($joueursSession)
    }
    
    foreach ($console in $Consoles) {
        $planning[$console.Nom] = @{}
        
        $sessionIdx = $Consoles.IndexOf($console) % $NbSessions
        $joueursSession = $groupesSession[$sessionIdx]
        
        $nbGroupesNecessaires = [Math]::Ceiling($joueursSession.Count / $console.JoueursParPartie)
        $nbGroupesActifs = [Math]::Min($nbGroupesNecessaires, $console.NbGroupes)
        
        $repartitionGroupes = @()
        $joueursRestants = $joueursSession.Count
        
        for ($g = 0; $g -lt $nbGroupesActifs; $g++) {
            $groupesRestants = $nbGroupesActifs - $g
            $nbJoueursGroupe = [Math]::Ceiling($joueursRestants / $groupesRestants)
            $nbJoueursGroupe = [Math]::Min($nbJoueursGroupe, $console.JoueursParPartie)
            
            $repartitionGroupes += $nbJoueursGroupe
            $joueursRestants -= $nbJoueursGroupe
        }
        
        $repartitionStr = ($repartitionGroupes | ForEach-Object { $_.ToString() }) -join ", "
        Write-Host "   $($console.Nom) : $($joueursSession.Count) joueurs → $nbGroupesActifs groupe$(if($nbGroupesActifs -gt 1){'s'}) [$repartitionStr]" -ForegroundColor White
        
        for ($session = 0; $session -lt $NbSessions; $session++) {
            $sessionIdx = ($session + $Consoles.IndexOf($console)) % $NbSessions
            $joueursSession = $groupesSession[$sessionIdx]
            
            $planning[$console.Nom][$session] = @()
            
            $nbGroupesNecessaires = [Math]::Ceiling($joueursSession.Count / $console.JoueursParPartie)
            $nbGroupesActifs = [Math]::Min($nbGroupesNecessaires, $console.NbGroupes)
            
            $idx = 0
            $joueursRestants = $joueursSession.Count
            
            for ($g = 0; $g -lt $nbGroupesActifs; $g++) {
                $groupesRestants = $nbGroupesActifs - $g
                $nbJoueursGroupe = [Math]::Ceiling($joueursRestants / $groupesRestants)
                $nbJoueursGroupe = [Math]::Min($nbJoueursGroupe, $console.JoueursParPartie)
                
                $groupe = @()
                for ($j = 0; $j -lt $nbJoueursGroupe; $j++) {
                    if ($idx -lt $joueursSession.Count) {
                        $groupe += $joueursSession[$idx]
                        $idx++
                    }
                }
                
                if ($groupe.Count -gt 0) {
                    $planning[$console.Nom][$session] += ,@($groupe)
                }
                
                $joueursRestants -= $nbJoueursGroupe
            }
            
            while ($planning[$console.Nom][$session].Count -lt $console.NbGroupes) {
                $planning[$console.Nom][$session] += ,@(@())
            }
        }
    }
    
    Write-Host ""
    
    return $planning
}

function Test-PlanningValide {
    param($Planning)
    
    for ($session = 0; $session -lt $NbSessions; $session++) {
        $joueursSession = @{}
        foreach ($console in $Consoles) {
            foreach ($groupe in $Planning[$console.Nom][$session]) {
                foreach ($joueur in $groupe) {
                    if ($joueursSession.ContainsKey($joueur)) {
                        return $false
                    }
                    $joueursSession[$joueur] = $true
                }
            }
        }
        if ($joueursSession.Count -ne $NbJoueurs) {
            return $false
        }
    }
    
    for ($joueur = 1; $joueur -le $NbJoueurs; $joueur++) {
        foreach ($console in $Consoles) {
            $count = 0
            for ($session = 0; $session -lt $NbSessions; $session++) {
                foreach ($groupe in $Planning[$console.Nom][$session]) {
                    if ($groupe -contains $joueur) {
                        $count++
                    }
                }
            }
            if ($count -ne 1) {
                return $false
            }
        }
    }
    
    return $true
}

function Get-RencontresCount {
    param($Planning)
    
    $rencontres = @{}
    
    foreach ($console in $Consoles) {
        for ($session = 0; $session -lt $NbSessions; $session++) {
            foreach ($groupe in $Planning[$console.Nom][$session]) {
                for ($i = 0; $i -lt $groupe.Count; $i++) {
                    for ($j = $i + 1; $j -lt $groupe.Count; $j++) {
                        $j1 = [Math]::Min($groupe[$i], $groupe[$j])
                        $j2 = [Math]::Max($groupe[$i], $groupe[$j])
                        $key = "$j1-$j2"
                        if (-not $rencontres.ContainsKey($key)) {
                            $rencontres[$key] = 0
                        }
                        $rencontres[$key]++
                    }
                }
            }
        }
    }
    
    return $rencontres
}

function Get-Score {
    param($Rencontres)
    
    $score = 0
    $distribution = @{}
    $collisions = 0
    $maxRencontres = 0
    
    for ($i = 1; $i -le $NbJoueurs; $i++) {
        for ($j = $i + 1; $j -le $NbJoueurs; $j++) {
            $key = "$i-$j"
            $count = if ($Rencontres.ContainsKey($key)) { $Rencontres[$key] } else { 0 }
            
            if (-not $distribution.ContainsKey($count)) {
                $distribution[$count] = 0
            }
            $distribution[$count]++
            
            if ($count -gt 1) {
                $collisions += ($count - 1)
            }
            
            if ($count -gt $maxRencontres) {
                $maxRencontres = $count
            }
            
            $score += [Math]::Pow($count, 3) * 100
        }
    }
    
    return @{
        Score = $score
        Distribution = $distribution
        Collisions = $collisions
        MaxRencontres = $maxRencontres
    }
}

function Show-Score {
    param($ScoreObj, $Prefix = "")
    
    $total = ($ScoreObj.Distribution.Values | Measure-Object -Sum).Sum
    Write-Host "`n$Prefix Score: $($ScoreObj.Score) | Collisions: $($ScoreObj.Collisions) | Max rencontres: $($ScoreObj.MaxRencontres)"
    
    # Regrouper les rencontres >= 5 ensemble
    $distributionAffichage = @{
        "0" = 0
        "1" = 0
        "2" = 0
        "3" = 0
        "4" = 0
        "5+" = 0
    }
    
    foreach ($entry in $ScoreObj.Distribution.GetEnumerator()) {
        $count = [int]$entry.Key
        $paires = $entry.Value
        
        if ($count -ge 5) {
            $distributionAffichage["5+"] += $paires
        } else {
            $distributionAffichage[$count.ToString()] += $paires
        }
    }
    
    # Afficher dans l'ordre 0, 1, 2, 3, 4, 5+
    $ordre = @("0", "1", "2", "3", "4", "5+")
    
    foreach ($key in $ordre) {
        $paires = $distributionAffichage[$key]
        
        # Ne pas afficher si la valeur est 0
        if ($paires -eq 0) {
            continue
        }
        
        $percent = [Math]::Round(($paires / $total) * 100, 1)
        
        if ($key -eq "5+") {
            $label = "5+ rencontres"
        } else {
            $countInt = [int]$key
            $label = "$countInt rencontre$(if($countInt -gt 1){'s'})"
        }
        
        $ligne = "  ├─ $label : $paires paires ($percent%)"
        
        # Choisir la couleur selon le nombre de rencontres
        switch ($key) {
            "0" { Write-Host $ligne -ForegroundColor White }
            "1" { Write-Host $ligne -ForegroundColor White }
            "2" { Write-Host $ligne -ForegroundColor Yellow }
            "3" { Write-Host $ligne -ForegroundColor Yellow }
            "4" { Write-Host $ligne -ForegroundColor Red }
            "5+" { Write-Host $ligne -ForegroundColor Red }
        }
    }
}

function Copy-Planning {
    param($Planning)
    
    $nouveau = @{}
    foreach ($console in $Consoles) {
        $nouveau[$console.Nom] = @{}
        for ($session = 0; $session -lt $NbSessions; $session++) {
            $nouveau[$console.Nom][$session] = @()
            foreach ($groupe in $Planning[$console.Nom][$session]) {
                $nouveau[$console.Nom][$session] += , @($groupe)
            }
        }
    }
    return $nouveau
}

function Invoke-Swap1-IntraSession {
    param($Planning)
    
    $nouveau = Copy-Planning $Planning
    
    $consolesValides = $Consoles | Where-Object { $_.NbGroupes -gt 1 }
    if ($consolesValides.Count -eq 0) {
        return $nouveau
    }
    
    $console = Get-Random -InputObject $consolesValides
    $session = Get-Random -Minimum 0 -Maximum $NbSessions
    
    $g1 = Get-Random -Minimum 0 -Maximum $console.NbGroupes
    $g2 = Get-Random -Minimum 0 -Maximum $console.NbGroupes
    
    $tentatives = 0
    while ($g1 -eq $g2 -and $tentatives -lt 10) {
        $g2 = Get-Random -Minimum 0 -Maximum $console.NbGroupes
        $tentatives++
    }
    
    if ($g1 -eq $g2) {
        return $nouveau
    }
    
    $groupe1 = $nouveau[$console.Nom][$session][$g1]
    $groupe2 = $nouveau[$console.Nom][$session][$g2]
    
    if ($groupe1.Count -gt 0 -and $groupe2.Count -gt 0) {
        $idx1 = Get-Random -Minimum 0 -Maximum $groupe1.Count
        $idx2 = Get-Random -Minimum 0 -Maximum $groupe2.Count
        
        $temp = $groupe1[$idx1]
        $nouveau[$console.Nom][$session][$g1][$idx1] = $groupe2[$idx2]
        $nouveau[$console.Nom][$session][$g2][$idx2] = $temp
    }
    
    return $nouveau
}

function Invoke-Swap2-InterSessions {
    param($Planning, $Rencontres = $null, $CiblerCollisions = $false)
    
    $nouveau = Copy-Planning $Planning
    
    $s1 = Get-Random -Minimum 0 -Maximum $NbSessions
    $s2 = Get-Random -Minimum 0 -Maximum $NbSessions
    
    $tentatives = 0
    while ($s1 -eq $s2 -and $tentatives -lt 10) {
        $s2 = Get-Random -Minimum 0 -Maximum $NbSessions
        $tentatives++
    }
    
    if ($s1 -eq $s2) {
        return $nouveau
    }
    
    $joueurA = $null
    
    if ($CiblerCollisions -and $Rencontres) {
        $pairesTriees = $Rencontres.GetEnumerator() | 
            Where-Object { $_.Value -gt 1 } |
            Sort-Object -Property Value -Descending | 
            Select-Object -First 20
        
        if ($pairesTriees.Count -gt 0) {
            $paire = Get-Random -InputObject $pairesTriees
            $cles = $paire.Key -split "-"
            $joueurs = @([int]$cles[0], [int]$cles[1])
            $joueurA = Get-Random -InputObject $joueurs
        }
    }
    
    if (-not $joueurA) {
        $joueurA = Get-Random -Minimum 1 -Maximum ($NbJoueurs + 1)
    }
    
    $posA_s1 = $null
    $posA_s2 = $null
    
    foreach ($console in $Consoles) {
        for ($g = 0; $g -lt $console.NbGroupes; $g++) {
            $groupe1 = $nouveau[$console.Nom][$s1][$g]
            $groupe2 = $nouveau[$console.Nom][$s2][$g]
            
            if (-not $groupe1 -or $groupe1.Count -eq 0) {
                continue
            }
            if (-not $groupe2 -or $groupe2.Count -eq 0) {
                continue
            }
            
            if ($groupe1 -contains $joueurA) {
                $idxA1 = $groupe1.IndexOf($joueurA)
                if ($idxA1 -ge 0) {
                    $posA_s1 = @{ Console = $console.Nom; Groupe = $g; Index = $idxA1 }
                }
            }
            
            if ($groupe2 -contains $joueurA) {
                $idxA2 = $groupe2.IndexOf($joueurA)
                if ($idxA2 -ge 0) {
                    $posA_s2 = @{ Console = $console.Nom; Groupe = $g; Index = $idxA2 }
                }
            }
        }
    }
    
    if (-not $posA_s1 -or -not $posA_s2) {
        return $nouveau
    }
    
    $candidatsB = @()
    for ($joueur = 1; $joueur -le $NbJoueurs; $joueur++) {
        if ($joueur -eq $joueurA) { continue }
        
        $posB_s1 = $null
        $posB_s2 = $null
        
        foreach ($console in $Consoles) {
            for ($g = 0; $g -lt $console.NbGroupes; $g++) {
                $groupe1 = $nouveau[$console.Nom][$s1][$g]
                $groupe2 = $nouveau[$console.Nom][$s2][$g]
                
                if ($groupe1 -contains $joueur) {
                    $posB_s1 = @{ Console = $console.Nom; Groupe = $g; Index = $groupe1.IndexOf($joueur) }
                }
                if ($groupe2 -contains $joueur) {
                    $posB_s2 = @{ Console = $console.Nom; Groupe = $g; Index = $groupe2.IndexOf($joueur) }
                }
            }
        }
        
        if ($posB_s1 -and $posB_s2 -and 
            $posB_s1.Console -eq $posA_s2.Console -and 
            $posB_s2.Console -eq $posA_s1.Console) {
            $candidatsB += @{
                Joueur = $joueur
                PosS1 = $posB_s1
                PosS2 = $posB_s2
            }
        }
    }
    
    if ($candidatsB.Count -eq 0) {
        return $nouveau
    }
    
    $choixB = Get-Random -InputObject $candidatsB
    $joueurB = $choixB.Joueur
    $posB_s1 = $choixB.PosS1
    $posB_s2 = $choixB.PosS2
    
    $nouveau[$posA_s1.Console][$s1][$posA_s1.Groupe][$posA_s1.Index] = $joueurB
    $nouveau[$posA_s2.Console][$s2][$posA_s2.Groupe][$posA_s2.Index] = $joueurB
    
    $nouveau[$posB_s1.Console][$s1][$posB_s1.Groupe][$posB_s1.Index] = $joueurA
    $nouveau[$posB_s2.Console][$s2][$posB_s2.Groupe][$posB_s2.Index] = $joueurA
    
    return $nouveau
}

function Get-PlanningHash {
    param($Planning)
    
    $hashInput = @()
    foreach ($console in $Consoles) {
        for ($s = 0; $s -lt $NbSessions; $s++) {
            for ($g = 0; $g -lt $console.NbGroupes; $g++) {
                $joueurs = $Planning[$console.Nom][$s][$g] -join ","
                $hashInput += "$($console.Nom)|$s|$($g):$($joueurs)"
            }
        }
    }
    
    $hashString = $hashInput -join ";"
    return $hashString.GetHashCode().ToString()
}

function Show-PositionsDepart {
    param($Planning)
    
    Write-Host "`n╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║  TABLEAU DU PLANNING                                                                                      ║" -ForegroundColor Cyan
    Write-Host "╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan
    
    $couleurs = @{}
    foreach ($console in $Consoles) {
        $couleurs[$console.Nom] = $console.Couleur
    }
    
    $col1Width = 11
    $col2Width = 14
    $col3Width = 10
    $colSessionWidth = 20
    
    Write-Host ("Console".PadRight($col1Width)) -NoNewline -BackgroundColor Gray -ForegroundColor Black
    Write-Host ("Nom Console".PadRight($col2Width)) -NoNewline -BackgroundColor Gray -ForegroundColor Black
    Write-Host ("Groupe".PadRight($col3Width)) -NoNewline -BackgroundColor Gray -ForegroundColor Black
    
    for ($s = 0; $s -lt $NbSessions; $s++) {
        Write-Host ("Session $($s + 1)".PadRight($colSessionWidth)) -NoNewline -BackgroundColor Gray -ForegroundColor Black
    }
    Write-Host ""
    
    $totalWidth = $col1Width + $col2Width + $col3Width + ($NbSessions * $colSessionWidth)
    Write-Host ("─" * $totalWidth)
    
    $numConsole = 1
    
    foreach ($console in $Consoles) {
        for ($g = 0; $g -lt $console.NbGroupes; $g++) {
            if ($g -eq 0) {
                Write-Host ("Console $numConsole".PadRight($col1Width)) -BackgroundColor $couleurs[$console.Nom] -ForegroundColor Black -NoNewline
            } else {
                Write-Host ("".PadRight($col1Width)) -BackgroundColor $couleurs[$console.Nom] -ForegroundColor Black -NoNewline
            }
            
            Write-Host ("$($console.Nom) $($g + 1)".PadRight($col2Width)) -BackgroundColor $couleurs[$console.Nom] -ForegroundColor Black -NoNewline
            Write-Host ("Groupe $($g + 1)".PadRight($col3Width)) -BackgroundColor $couleurs[$console.Nom] -ForegroundColor Black -NoNewline
            
            for ($s = 0; $s -lt $NbSessions; $s++) {
                $joueurs = ($Planning[$console.Nom][$s][$g] -join ", ")
                Write-Host $joueurs.PadRight($colSessionWidth) -BackgroundColor $couleurs[$console.Nom] -ForegroundColor Black -NoNewline
            }
            Write-Host ""
        }
        
        $numConsole++
    }
    
    Write-Host ""
}

function Export-PlanningExcel {
    param($Planning, $Path)
    
    $lignesNumeros = @()
    foreach ($console in $Consoles) {
        for ($g = 0; $g -lt $console.NbGroupes; $g++) {
            $ligne = [PSCustomObject]@{
                Console = $console.Nom
                Groupe = "Groupe $($g + 1)"
            }
            
            for ($s = 0; $s -lt $NbSessions; $s++) {
                $joueurs = $Planning[$console.Nom][$s][$g] -join ", "
                $ligne | Add-Member -NotePropertyName "Session $($s + 1)" -NotePropertyValue $joueurs 
            }
            
            $lignesNumeros += $ligne
        }
    }
    
    $lignesPokemon = @()
    foreach ($console in $Consoles) {
        for ($g = 0; $g -lt $console.NbGroupes; $g++) {
            $ligne = [PSCustomObject]@{
                Console = $console.Nom
                Groupe = "Groupe $($g + 1)"
            }
            
            for ($s = 0; $s -lt $NbSessions; $s++) {
                $pokemonNoms = ($Planning[$console.Nom][$s][$g] | ForEach-Object { $Pokemon[$_] }) -join ", "
                $ligne | Add-Member -NotePropertyName "Session $($s + 1)" -NotePropertyValue $pokemonNoms 
            }
            
            $lignesPokemon += $ligne
        }
    }
    
    $lignesNumeros | Export-Excel -Path $Path -WorksheetName "Planning_Numeros" -AutoSize -TableName "PlanningNumeros" -TableStyle Medium2 -FreezeTopRow
    $lignesPokemon | Export-Excel -Path $Path -WorksheetName "Planning_Pokemon" -AutoSize -TableName "PlanningPokemon" -TableStyle Medium2 -FreezeTopRow
}

function Export-FeuillesScore {
    param($Planning, $DossierScores)

    if (-not (Test-Path $DossierScores)) {
        New-Item -ItemType Directory -Path $DossierScores | Out-Null
    }
    
    foreach ($console in $Consoles) {
        for ($g = 0; $g -lt $console.NbGroupes; $g++) {
            $nomFichier = "$($console.Nom)_Groupe$($g + 1)_Score.xlsx"
            $cheminComplet = Join-Path $DossierScores $nomFichier
            
            $aDesJoueurs = $false
            for ($s = 0; $s -lt $NbSessions; $s++) {
                $joueurs = $Planning[$console.Nom][$s][$g]
                if ($joueurs -and $joueurs.Count -gt 0) {
                    $aDesJoueurs = $true
                    break
                }
            }
            
            if (-not $aDesJoueurs) {
                continue
            }
            
            if (Test-Path $cheminComplet) {
                Remove-Item $cheminComplet -Force
            }
            
            $ligneActuelle = 1
            $premierTableau = $true
            
            for ($s = 0; $s -lt $NbSessions; $s++) {
                $joueurs = $Planning[$console.Nom][$s][$g]
                
                if (-not $joueurs -or $joueurs.Count -eq 0) {
                    continue
                }
                
                $lignesSession = @()
                
                foreach ($joueur in $joueurs) {
                    $lignesSession += [PSCustomObject]@{
                        Session = "Session $($s + 1)"
                        Console = $console.Nom
                        Groupe = "Groupe $($g + 1)"
                        Joueur = $joueur
                        Pokemon = $Pokemon[$joueur]
                        Classement = ""
                    }
                }
                
                $nomTableau = "Score_S$($s + 1)"
                
                if ($premierTableau) {
                    $lignesSession | Export-Excel -Path $cheminComplet -AutoSize -StartRow $ligneActuelle -TableName $nomTableau -TableStyle Medium2
                    $premierTableau = $false
                } else {
                    $excel = Open-ExcelPackage -Path $cheminComplet
                    $ws = $excel.Workbook.Worksheets[1]
                    
                    $lignesSession | Export-Excel -ExcelPackage $excel -WorksheetName $ws.Name -AutoSize -StartRow $ligneActuelle -TableName $nomTableau -TableStyle Medium2                    
                }
                
                $ligneActuelle += $joueurs.Count + 2
            }
        }
    }
}

# ═══════════════════════════════════════════════════════════════════════
# Fonction d'optimisation
# ═══════════════════════════════════════════════════════════════════════

function Start-Optimisation {
    param(
        [int]$NumeroRelance,
        [int]$NbIterations
    )
    
    $planning = New-PlanningInitial
    
    Write-Host "`n🔍 Validation du planning initial..." -ForegroundColor Yellow
    if (-not (Test-PlanningValide $planning)) {
        Write-Host "❌ Planning initial INVALIDE ! Passage à la relance suivante.`n" -ForegroundColor Red
        return $null
    }
    Write-Host "✅ Planning initial VALIDE !`n" -ForegroundColor Green
    
    $rencontres = Get-RencontresCount $planning
    $scoreObj = Get-Score $rencontres
    Show-Score $scoreObj "Initial"
    
    $meilleurPlanning = $planning
    $meilleurScore = $scoreObj.Score
    $ameliorations = 0
    $hashsTestes = @{}
    $statsSwap1 = 0
    $statsSwap2 = 0
    $statsSwap2Cible = 0
    
    $hashInitial = Get-PlanningHash $planning
    $hashsTestes[$hashInitial] = $true
    
    Write-Host "`n🔄 Optimisation en cours..." -ForegroundColor Cyan
    
    for ($i = 0; $i -lt $NbIterations; $i++) {
        $typeSwap = Get-Random -Minimum 0 -Maximum 2
        
        if ($typeSwap -eq 0) {
            $nouveau = Invoke-Swap1-IntraSession $meilleurPlanning
            $statsSwap1++
        } else {
            $ciblerCollisions = (Get-Random -Minimum 0 -Maximum 100) -lt $config.optimization.swap_strategies.swap2.targeted_collisions.probability
            if ($ciblerCollisions) {
                $statsSwap2Cible++
            }
            
            $rencontresActuelles = Get-RencontresCount $meilleurPlanning
            $nouveau = Invoke-Swap2-InterSessions $meilleurPlanning $rencontresActuelles $ciblerCollisions
            $statsSwap2++
        }
        
        if (Test-PlanningValide $nouveau) {
            $hashNouveau = Get-PlanningHash $nouveau
            
            if (-not $hashsTestes.ContainsKey($hashNouveau)) {
                $hashsTestes[$hashNouveau] = $true
                
                $nouvellesRencontres = Get-RencontresCount $nouveau
                $nouveauScoreObj = Get-Score $nouvellesRencontres
                
                if ($nouveauScoreObj.Score -lt $meilleurScore) {
                    $meilleurPlanning = $nouveau
                    $meilleurScore = $nouveauScoreObj.Score
                    $ameliorations++
                    
                    if ($nouveauScoreObj.MaxRencontres -le $EarlyStoppingThreshold) {
                        Write-Host "`n🎯 SCORE OPTIMAL ATTEINT ! Arrêt de cette relance." -ForegroundColor Green
                        return @{
                            Planning = $meilleurPlanning
                            ScoreObj = $nouveauScoreObj
                            Ameliorations = $ameliorations
                            HashsTestes = $hashsTestes.Count
                            StatsSwap1 = $statsSwap1
                            StatsSwap2 = $statsSwap2
                            StatsSwap2Cible = $statsSwap2Cible
                            OptimalAtteint = $true
                        }
                    }
                }
            }
        }
        
        if (($i + 1) % $DisplayInterval -eq 0) {
            $tempRencontres = Get-RencontresCount $meilleurPlanning
            $tempScore = Get-Score $tempRencontres
            Write-Host "`n🔄 Itération $($i + 1)/$NbIterations | Améliorations: $ameliorations | Hash uniques: $($hashsTestes.Count)" -ForegroundColor Yellow
            Write-Host "   Swap1: $statsSwap1 | Swap2: $statsSwap2 (ciblés: $statsSwap2Cible)" -ForegroundColor Gray
            Show-Score $tempScore "Actuel"
        }
    }
    
    $rencontresFinales = Get-RencontresCount $meilleurPlanning
    $scoreObjFinal = Get-Score $rencontresFinales
    
    return @{
        Planning = $meilleurPlanning
        ScoreObj = $scoreObjFinal
        Ameliorations = $ameliorations
        HashsTestes = $hashsTestes.Count
        StatsSwap1 = $statsSwap1
        StatsSwap2 = $statsSwap2
        StatsSwap2Cible = $statsSwap2Cible
        OptimalAtteint = $false
    }
}

function Show-StatistiquesRelance {
    param($Resultat, $NumeroRelance)
    
    Write-Host "`n📊 Résultat de la relance $NumeroRelance :" -ForegroundColor Green
    Write-Host "Configurations uniques testées: $($Resultat.HashsTestes)" -ForegroundColor Green
    Write-Host "Swap1 effectués: $($Resultat.StatsSwap1) | Swap2 effectués: $($Resultat.StatsSwap2) (dont $($Resultat.StatsSwap2Cible) ciblés)" -ForegroundColor Green
    Show-Score $Resultat.ScoreObj "Final"
}

function Test-ConfigurationTournoi {
    Write-Host "`n╔═══════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║  VALIDATION DE LA CONFIGURATION                   ║" -ForegroundColor Cyan
    Write-Host "╚═══════════════════════════════════════════════════╝`n" -ForegroundColor Cyan
    
    # Calculer la capacité totale
    $capaciteTotale = 0
    foreach ($console in $Consoles) {
        $capaciteTotale += $console.JoueursParPartie * $console.NbGroupes
    }
    
    Write-Host "📊 Analyse de la configuration :" -ForegroundColor White
    Write-Host "   Nombre de joueurs demandé : $NbJoueurs" -ForegroundColor White
    Write-Host "   Nombre de sessions        : $NbSessions" -ForegroundColor White
    Write-Host "   Capacité totale/session   : $capaciteTotale joueurs`n" -ForegroundColor White
    
    # Détail par console
    Write-Host "📋 Détail des consoles :" -ForegroundColor White
    foreach ($console in $Consoles) {
        $capaciteConsole = $console.JoueursParPartie * $console.NbGroupes
        Write-Host "   $($console.Nom.PadRight(15)) : $($console.NbGroupes) groupe$(if($console.NbGroupes -gt 1){'s'}) × $($console.JoueursParPartie) joueurs = $capaciteConsole joueurs max" -ForegroundColor Gray
    }
    Write-Host ""
    
    # Validation
    if ($NbJoueurs -gt $capaciteTotale) {
        Write-Host "❌ ERREUR : Configuration impossible !" -ForegroundColor Red
        Write-Host "`n💡 Solutions possibles :`n" -ForegroundColor Yellow
        
        # Solution 1 : Réduire le nombre de joueurs
        Write-Host "   Option 1 - Réduire le nombre de joueurs :" -ForegroundColor Cyan
        Write-Host "   └─ Nombre maximum de joueurs avec cette configuration : $capaciteTotale" -ForegroundColor White
        Write-Host "   └─ Modifiez 'nbJoueurs' à $capaciteTotale dans config.json`n" -ForegroundColor Gray
        
        # Solution 2 : Calculer le nombre de groupes nécessaires
        Write-Host "   Option 2 - Ajouter des groupes :" -ForegroundColor Cyan
        
        $suggestionGroupes = @()
        foreach ($console in $Consoles) {
            $groupesNecessaires = [Math]::Ceiling($NbJoueurs / $console.JoueursParPartie)
            $groupesSupplementaires = $groupesNecessaires - $console.NbGroupes
            
            if ($groupesSupplementaires -gt 0) {
                $suggestionGroupes += @{
                    Console = $console.Nom
                    GroupesActuels = $console.NbGroupes
                    GroupesNecessaires = $groupesNecessaires
                    Supplementaires = $groupesSupplementaires
                }
            }
        }
        
        if ($suggestionGroupes.Count -gt 0) {
            foreach ($suggestion in $suggestionGroupes) {
                Write-Host "   └─ $($suggestion.Console) : passer de $($suggestion.GroupesActuels) à $($suggestion.GroupesNecessaires) groupes (+$($suggestion.Supplementaires))" -ForegroundColor White
            }
        } else {
            Write-Host "   └─ Toutes les consoles ont déjà assez de groupes individuellement" -ForegroundColor White
        }
        Write-Host ""
        
        # Solution 3 : Répartition optimale suggérée
        Write-Host "   Option 3 - Répartition suggérée avec groupes équilibrés :" -ForegroundColor Cyan
        
        $joueursRestants = $NbJoueurs
        $repartitionSuggeree = @()
        
        foreach ($console in $Consoles) {
            $joueursParSession = [Math]::Ceiling($joueursRestants / ($Consoles.Count - $repartitionSuggeree.Count))
            $groupesNecessaires = [Math]::Ceiling($joueursParSession / $console.JoueursParPartie)
            
            $repartitionSuggeree += @{
                Console = $console.Nom
                Groupes = $groupesNecessaires
                JoueursMax = $groupesNecessaires * $console.JoueursParPartie
            }
            
            $joueursRestants -= ($groupesNecessaires * $console.JoueursParPartie)
        }
        
        $capaciteSuggeree = ($repartitionSuggeree | ForEach-Object { $_.JoueursMax } | Measure-Object -Sum).Sum
        
        foreach ($suggestion in $repartitionSuggeree) {
            Write-Host "   └─ $($suggestion.Console) : $($suggestion.Groupes) groupes ($($suggestion.JoueursMax) joueurs max)" -ForegroundColor White
        }
        Write-Host "   └─ Capacité totale suggérée : $capaciteSuggeree joueurs`n" -ForegroundColor Green
        
        return $false
    }
    
    # Vérification de la répartition équilibrée
    $joueursParSession = [Math]::Ceiling($NbJoueurs / $NbSessions)
    
    if ($joueursParSession -gt $capaciteTotale) {
        Write-Host "⚠️  AVERTISSEMENT : Répartition déséquilibrée !" -ForegroundColor Yellow
        Write-Host "   Avec $NbJoueurs joueurs et $NbSessions sessions, chaque session devrait avoir ~$joueursParSession joueurs" -ForegroundColor Yellow
        Write-Host "   Mais la capacité totale est seulement de $capaciteTotale joueurs`n" -ForegroundColor Yellow
    }
    
    # Calcul du taux d'occupation
    $tauxOccupation = [Math]::Round(($NbJoueurs / $capaciteTotale) * 100, 1)
    
    if ($tauxOccupation -lt 70) {
        Write-Host "ℹ️  INFO : Taux d'occupation faible ($tauxOccupation%)" -ForegroundColor Cyan
        Write-Host "   Vous pourriez réduire le nombre de groupes pour optimiser l'utilisation`n" -ForegroundColor Cyan
    } else {
        Write-Host "✅ Configuration valide !" -ForegroundColor Green
        Write-Host "   Taux d'occupation : $tauxOccupation%`n" -ForegroundColor Green
    }
    
    # Vérification des contraintes d'équilibrage
    $minJoueursParGroupe = [int]::MaxValue
    $maxJoueursParGroupe = 0
    
    foreach ($console in $Consoles) {
        if ($console.JoueursParPartie -lt $minJoueursParGroupe) {
            $minJoueursParGroupe = $console.JoueursParPartie
        }
        if ($console.JoueursParPartie -gt $maxJoueursParGroupe) {
            $maxJoueursParGroupe = $console.JoueursParPartie
        }
    }
    
    if ($maxJoueursParGroupe - $minJoueursParGroupe -gt 2) {
        Write-Host "⚠️  AVERTISSEMENT : Grande variation dans la taille des groupes" -ForegroundColor Yellow
        Write-Host "   Min: $minJoueursParGroupe joueurs | Max: $maxJoueursParGroupe joueurs" -ForegroundColor Yellow
        Write-Host "   Cela peut compliquer l'équilibrage du planning`n" -ForegroundColor Yellow
    }
    
    return $true
}
# ═══════════════════════════════════════════════════════════════════════
# Programme principal avec relances multiples
# ═══════════════════════════════════════════════════════════════════════

Write-Host "`n╔═══════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  OPTIMISATION MARIO KART - VERSION 2.0            ║" -ForegroundColor Cyan
Write-Host "║  $NbRelances relances × $NbIterationsParRelance itérations                       ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════╝" -ForegroundColor Cyan

if (-not (Test-ConfigurationTournoi)) {
    Write-Host "❌ Veuillez corriger la configuration avant de continuer.`n" -ForegroundColor Red
    exit 1
}
$meilleurPlanningGlobal = $null
$meilleurScoreGlobal = [double]::MaxValue
$statistiquesRelances = @()

for ($relance = 1; $relance -le $NbRelances; $relance++) {
    Write-Host "`n╔═══════════════════════════════════════════════════╗" -ForegroundColor Yellow
    Write-Host "║  RELANCE $relance / $NbRelances                                   ║" -ForegroundColor Yellow
    Write-Host "╚═══════════════════════════════════════════════════╝" -ForegroundColor Yellow
    
    $resultat = Start-Optimisation -NumeroRelance $relance -NbIterations $NbIterationsParRelance
    
    if ($null -eq $resultat) {
        continue
    }
    
    Show-StatistiquesRelance -Resultat $resultat -NumeroRelance $relance
    
    $statistiquesRelances += @{
        Relance = $relance
        Score = $resultat.ScoreObj.Score
        Collisions = $resultat.ScoreObj.Collisions
        MaxRencontres = $resultat.ScoreObj.MaxRencontres
        Ameliorations = $resultat.Ameliorations
    }
    
    if ($resultat.ScoreObj.Score -lt $meilleurScoreGlobal) {
        $meilleurPlanningGlobal = $resultat.Planning
        $meilleurScoreGlobal = $resultat.ScoreObj.Score
        Write-Host "🏆 NOUVEAU MEILLEUR SCORE GLOBAL !" -ForegroundColor Magenta
    }
    
    if ($resultat.OptimalAtteint) {
        Write-Host "`n🎯 SCORE OPTIMAL ATTEINT ! Arrêt de toutes les relances." -ForegroundColor Green
        break
    }
}

# Affichage final
Write-Host "`n`n╔═══════════════════════════════════════════════════╗" -ForegroundColor Magenta
Write-Host "║  RÉSULTAT FINAL - MEILLEUR PLANNING               ║" -ForegroundColor Magenta
Write-Host "╚═══════════════════════════════════════════════════╝" -ForegroundColor Magenta

$rencontresFinalesGlobal = Get-RencontresCount $meilleurPlanningGlobal
$scoreObjFinalGlobal = Get-Score $rencontresFinalesGlobal
Show-Score $scoreObjFinalGlobal "MEILLEUR"
Show-PositionsDepart $meilleurPlanningGlobal

Write-Host "`n📈 Statistiques des relances :" -ForegroundColor Cyan
foreach ($stat in $statistiquesRelances) {
    Write-Host "  Relance $($stat.Relance): Score=$($stat.Score) | Collisions=$($stat.Collisions) | Max=$($stat.MaxRencontres) | Améliorations=$($stat.Ameliorations)"
}

if (-not [System.IO.Path]::IsPathRooted($OutputReport)) {
    $OutputReport = Join-Path $PSScriptRoot $OutputReport
}

if (-not [System.IO.Path]::IsPathRooted($DossierScores)) {
    $DossierScores = Join-Path $PSScriptRoot $DossierScores
}

Write-Host "`n💾 Export du planning..." -ForegroundColor Yellow
Export-PlanningExcel $meilleurPlanningGlobal $OutputReport
Write-Host "✅ Planning exporté vers: $OutputReport" -ForegroundColor Green

Export-FeuillesScore $meilleurPlanningGlobal $DossierScores
Write-Host "✅ Feuilles de score créées dans: $DossierScores\`n" -ForegroundColor Green