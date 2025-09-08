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

        <h1>Calcul de moyenne par session</h1>

        <h2 id="pagesNav"><a href="./Session1/">Session 1</a></h2>
        <p>
            Calcul Session 1 Semestre 1 et 2 première année
        </p>
        
        <h2 id="pagesNav"><a href="./Session2/">Session 2</a></h2>
        <p>
            Calcul Session 2 Semestre 1 et 2 première année
        </p>

        <h2>Bon à savoir :</h2>
        <p>
            Pour calculer sa moyenne, il faut résoudre l'equation suivante :<br>
            (note0 * coeff0) + (note1 * coeff1) + ... + (noteN * coeffN) / (coeff0 + coeff1 + ... + coeffN)
        </p>
        <p>
            Où : note0 ... noteN = les notes du semetres <br>
            Et : coeff0 ... coeffN sont les coefficients associés aux notes.
        </p>
        <p>
            coeff0 ... coeffN se calculent en prenant le coefficient du poids modulaire indiqué sur le MCC. ex : MATH103 <br>
            Poids modulaire : 5.4 <br>
            coeff : <br>
            - CC1 : 45% <br>
            - CC2 : 55%
        </p>
        <p>
            Alors : coeff CC1 = 5.4*0.45 = 2.43<br>
            et coeff CC2 = 5.4*0.55 ~ 2.97 <br>
            tot = 5.4
        </p>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>