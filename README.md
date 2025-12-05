# 🏎️ KARTING PROJECT - Documentation d'Installation Complète

Bienvenue sur le projet **KARTING_PROJECT**. Ce guide détaille étape par étape comment installer, configurer et lancer l'application (Backend + Frontend) sur une machine vierge.

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine.

### 1. Java Development Kit (JDK) 21
Le backend utilise **Java 21**.
- **Télécharger :** [Oracle JDK 21](https://www.oracle.com/java/technologies/downloads/#java21) ou [OpenJDK 21](https://jdk.java.net/21/).
- **Vérification :** Ouvrez un terminal et tapez :
  ```bash
  java -version
  ```
  *Vous devez voir une version indiquant "21".*

### 2. Node.js & npm (via NVM recommandé)
Le frontend utilise **Angular 20**. Il est **fortement recommandé** d'utiliser **NVM (Node Version Manager)** pour installer Node.js.

#### Pourquoi utiliser NVM ?
**NVM** permet de gérer plusieurs versions de Node.js sur la même machine.
- **Cohérence :** Cela garantit que tous les développeurs du projet utilisent exactement la même version de Node.
- **Flexibilité :** Vous pouvez changer de version instantanément sans désinstaller/réinstaller Node manuellement.
- **Stabilité :** Évite les bugs subtils liés aux différences de versions ("ça marche chez moi").

#### Installation de NVM :
- **Windows :** Téléchargez [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
- **Mac/Linux :** Utilisez [nvm-sh](https://github.com/nvm-sh/nvm).

#### Une fois NVM installé :
Ouvrez un nouveau terminal (pour charger nvm) et installez la version requise (ex: NodeJS 22 LTS) :
```bash
nvm install 22
nvm use 22
```

**Vérification :**
```bash
node -v
npm -v
```

---

## ⚡ Démarrage Rapide (Windows)

Le projet contient un fichier **`START.bat`** à la racine qui automatise le lancement de l'application.

Ce script va :
1. Installer les dépendances Frontend (`npm install`).
2. Compiler le Frontend (`ng build`).
3. Lancer l'API Backend (nécessite que le JAR soit déjà généré).
4. Lancer le serveur de développement Frontend (`ng serve`).

**⚠️ Important pour la première utilisation :**
Le script exécute le Backend via son fichier `.jar`. Sur une machine vierge, vous devez générer ce fichier au moins une fois manuellement avant d'utiliser le script :
```powershell
cd nat-kart-api
.\mvnw.cmd clean package -DskipTests
cd ..
.\START.bat
```

---

## 📂 Structure du Projet

Le projet est divisé en deux dossiers principaux :
- **`nat-kart-api/`** : Le Backend (Spring Boot 3.5.8 + Java 21).
- **`nat-kart/`** : Le Frontend (Angular 20 + PrimeNG).

---

## 🛠️ Installation & Lancement du Backend (`nat-kart-api`)

Le backend est une API REST Spring Boot qui gère la logique métier et la base de données.

### Étape 1 : Ouvrir le dossier Backend
Ouvrez votre terminal et naviguez vers le dossier de l'API :
```bash
cd /chemin/vers/KARTING_PROJECT/nat-kart-api
```

### Étape 2 : Lancer l'application
Le projet inclut un wrapper Maven (`mvnw`), vous n'avez donc pas besoin d'installer Maven manuellement.

**Sous Windows :**
```powershell
.\mvnw.cmd spring-boot:run
```

**Sous Mac/Linux :**
```bash
./mvnw spring-boot:run
```

> **Note :** La première exécution peut prendre quelques minutes pour télécharger toutes les dépendances.

### Étape 3 : Vérifier le fonctionnement
Une fois l'application démarrée, vous verrez des logs défiler. Le backend est accessible sur le port **8080**.

- **URL de l'API :** `http://localhost:8080`
- **Documentation Swagger (API) :** `http://localhost:8080/swagger-ui/index.html` (ou chemin similaire selon config)
- **Console Base de Données H2 :** `http://localhost:8080/h2-console`

### ⚙️ Configuration du Backend
Le fichier de configuration principal se trouve dans :
`src/main/resources/application.properties`

**Détails importants :**
- **Port Serveur :** `8080`
- **Base de Données :** H2 (Fichier local)
  - **Chemin :** `./data/natkart` (la DB sera créée dans un dossier `data` à la racine de l'API)
  - **URL JDBC :** `jdbc:h2:file:./data/natkart`
  - **User :** `sa`
  - **Password :** *(vide)*
- **CORS :** Autorise les requêtes venant de `http://localhost:4200` (le frontend).

---

## 🎨 Installation & Lancement du Frontend (`nat-kart`)

Le frontend est une application Angular utilisant PrimeNG pour l'interface utilisateur.

### Étape 1 : Ouvrir le dossier Frontend
Ouvrez un **nouveau** terminal (gardez celui du backend ouvert) et naviguez vers le dossier :
```bash
cd /chemin/vers/KARTING_PROJECT/nat-kart
```

### Étape 2 : Installer les dépendances
Installez les librairies nécessaires (Angular, PrimeNG, etc.) via npm :
```bash
npm install
```

### Étape 3 : Lancer le serveur de développement
Démarrez l'application Angular :
```bash
npm start
```
*Cette commande est un alias pour `ng serve`.*

### Étape 4 : Accéder à l'application
Ouvrez votre navigateur (Chrome, Firefox, Edge) et allez à l'adresse :
👉 **http://localhost:4200**

---

## 🗄️ Base de Données

Le projet utilise **H2 Database** en mode fichier. Cela signifie que :
1. Vous n'avez **pas besoin d'installer** de serveur de base de données (comme MySQL ou PostgreSQL).
2. Les données sont stockées localement dans le dossier `nat-kart-api/data/`.
3. Pour visualiser/modifier les données directement, connectez-vous à la console H2 (`http://localhost:8080/h2-console`) avec les identifiants mentionnés plus haut.

---

## 🚀 Résumé des Commandes

| Action | Dossier | Commande |
| :--- | :--- | :--- |
| **Lancer Back** | `nat-kart-api/` | `.\mvnw.cmd spring-boot:run` |
| **Install Front** | `nat-kart/` | `npm install` (une seule fois) |
| **Lancer Front** | `nat-kart/` | `npm start` |

Si vous rencontrez des erreurs de port (ex: "Address already in use"), vérifiez qu'aucun autre processus n'utilise les ports **8080** ou **4200**, ou modifiez les configurations respectives.

Bon développement ! 🏎️💨
