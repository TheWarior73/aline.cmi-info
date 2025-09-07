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
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- Title -->
    <title>Projects</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script> <!-- gets the current dir -->
</head>
<body onload="getnav()">
    <header>
        <a href="/">
            <img src="/img/four_leaf_pfp.jpg" alt="Pfp">
            <span id="header_aline">
                <span id="header_aline">
                Aline B.
            </span>
            </span>
        </a>
        <nav>
            <ul>
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

        <h2 id="pagesNav"><a href="/USMB">USMB</a></h2>
        <p>
            All my projects tied to <code>Université Savoie Mont Blanc.</code> This can range from class stuff to grade calculators...
        </p>   
        <h2 id="pagesNav"><a href="perso">Personal Projects</a></h2>
        <p>
            Everything that I have on the side, and that I am willing to share :3
        </p>
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>