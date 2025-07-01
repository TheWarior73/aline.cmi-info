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
    <title>Home</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script>                              <!-- gets the current dir -->
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
                <li><a href="/Misc">Misc Stuff</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <ul class="navigation">
            <li>
            </li>
        </ul>

        <h1>USMB</h1>
        <h2 id="pagesNav">Featured</h2>
        <p>
            <a href="COEFS/">Grade Calculator</a><br>
            A tool to easily visualise your semester's averages for MISPI students over at USMB. (currently support 1st years, with plans to support other years as well.)
        </p>
        
        <h2 id="pagesNav">Web</h2>
        <p>
            <a href="INFO102/">INFO102</a><br>
            Module INFO102 (L1 - S1)
        </p>
        <p>
            <a href="https://jpeg.cmi-info.fr" style="display:flex">J.P.E.G.
                <svg id="redirect" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2" stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                </svg>
            </a>
            Projet J.P.E.G. 
                
        </p>

        <h2 id="pagesNav">Miscellaneous content</h2>
        <p>
            <a href="MISPI/">MISPI</a><br>
            Presentation of the formation to futur students (in french)
        </p>
        
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>