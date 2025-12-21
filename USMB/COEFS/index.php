<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Style Sheets -->
        <!-- GLOBAL -->
    <link rel="stylesheet" href="/styles/global.css">

        <!-- Page related sheets -->
    <link rel="stylesheet" href="/styles/index.css">
    <link rel="stylesheet" href="/styles/nav.css">
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- Title -->
    <title>Coefs</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script>                              <!-- gets the current dir -->
</head>
<body onload="getnav()">
    <header>
        <a href="/">
            <img src="/img/four_leaf_pfp.jpg" alt="Pfp">
            <span id="header_aline">
                Aline B.
            </span>
        </a>
        <nav>
            <ul>
                <?php if (isset($_SESSION["logged_in"])){echo "<li><a href='/admin/dashboard' style='color:var(--error);'>Dashboard</a></li>";}?>
                <li><a href="/">About Me</a></li>
                <li><a href="/projects" id="active">Projects</a></li>
                <li><a href="/misc">Misc Stuff</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <ul class="navigation">
            <li>
            </li>
        </ul>

        <h1>Calcul de moyenne par semestre</h1>

        <!-- INFO NEW 2025-2026 -->

        <div class="info">
            <h2>Calculateur 2025-2026 maintenant en ligne !</h2>
            <p>
                Le calculateur as été mis à jour avec les coefficients de l'année universitaire 2025-2026 pour la L1 et L2 !
                <br>
                <span>Date: <code>Dec. 15. 2025</code></span>
            </p>
        </div>

        <h2 id="pagesNav"><a href="./L1">Licence 1</a></h2>
        <p>
            Calcul semestres 1 et 2 de la première année
        </p>

        <!-- Caché pour l'instant, WIP revenez + tard :3 -->
        <h2 id="pagesNav"><a href="./L2">Licence 2</a></h2>
        <p>
            Calcul semestres 1 et 2 de la seconde année. Actuellement désactivé. On as pas calculé les coefs :3
        </p>

        <!-- <h2 id="pagesNav"><a href="">Licence 3</a></h2>
        <p>
            Calcul semestres 1 et 2 de la troisième année
        </p> -->

        <h2>La suite plus tard (Soon™)</h2>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>