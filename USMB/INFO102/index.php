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
    <title>Home</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script>                                  <!-- gets the current dir -->
</head>
<body onload="getnav()">
    <header>
        <a href="/">
            <img src="/img/four_leaf_pfp.jpg" alt="Pfp">
            Aline B.
        </a>
        <nav>
            <ul>
                <li><a href="/">About Me</a></li>
                <li><a href="/projects" id="active">Projects</a></li>
                <li><a href="/misc">Art Stuff</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <ul class="navigation">
            <li>
            </li>
        </ul>

        <h2 id="pagesNav">TP Info102</h2>
        <p>
            Ces pages sont chacunes un TP distinct.
        </p>

        <h1 id="pagesNav">TP1</h1>
        <p>
            <a href="TP1/index.html">Miyasaki <sup>. . .</sup> 08.11.2025</a>
        </p>

        <h1 id="pagesNav">TP2</h1>
        <p>
            <a href="TP2/index.html">SNK <sup>. . .</sup> 18.11.2025</a>
        </p>

        <h1 id="pagesNav">TP3</h1>
        <p>
            <a href="TP3/TP3.html">Canvas <sup>. . .</sup> 26.11.2025</a>
        </p>

        <h1 id="pagesNav">TP4 (Exam)</h1>
        <p>
            <a href="TP4/index.html">Exam <sup>. . .</sup> 02.12.2025</a>
        </p>
        
        
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>