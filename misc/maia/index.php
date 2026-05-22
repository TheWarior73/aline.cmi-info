
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Style Sheets -->
        <!-- GLOBAL -->
    <link rel="stylesheet" href="/styles/global.css">

        <!-- Page related sheets -->
    <link rel="stylesheet" href="/styles/index.css">
    <link rel="stylesheet" href="/styles/nav.css">
    <link rel="stylesheet" href="/styles/misc.css">
    <link rel="stylesheet" href="./src/recueil.css">
        
    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- Title -->
    <title>Misc</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script> <!-- gets the current dir -->
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
                <li><a href="/">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/misc" id="active">Misc stuff</a></li>
            </ul>
            <!-- Photography -->
        </nav>
    </header>

    <main>
        <ul class="navigation">
            <li>
            </li>
        </ul>

        <div class="recueilList">
        </div>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="./data/recueil_1.js" type="module"></script>
<script src="/scripts/global/footer.js"></script>
</html>