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
            Aline B.
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

        <div id="intro"> <!-- Unused ID -->
            <h1>Collection of miscellaneous stuff</h1>
            <p><code>Find all the stuff that I share</code>, this can range from Miscworks to poetry, and pretty much everything that I want to share outside of prog.
            Sometimes friends works can appear as well !</p>
        </div>


        <!-- 
        <div class="Misc">
            <h2>Personal</h2>
        </div> 
        -->

        <div class="Misc">
            <h2>Lasnelus <code>Friend</code></h2>

            <h3 id="pagesNav"><a href="https://github.com/lasnelus/GSort">GSort
                <!-- <svg id="redirect" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2" stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                </svg> -->
            </a></h3>
            <p>
                » A very good sorting algorithm, works in (or bellow) O(n) for any list!
            </p>
        </div>

        <!-- 
        <div class="Misc">
            <h2><code>Friend</code> placeholder</h2>
        </div> 
        -->

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>