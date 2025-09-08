<?php
session_start();
?>
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
    <link rel="stylesheet" href="style.css">
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- Title -->
    <title>Problem Solver</title>

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
        <h1>Problem Solver</h1>
        <div class="success">
            <p>
                This is a glorified random number generator, enjoy.
            </p>
        </div>

        <div id="problem_solver">

            <p>Specify how many choices you have, so I can decide which one you will pick !</p>
            <div id="params">
                <input type="number" id="number" value="0">
                <p id="choice">Choose</p>
            </div>
            <div id="ans">
                <h1>Choose a number first</h1>
                <code>Come on, don't be shy >:3c</code>
            </div>
        </div>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
<script src="./solver.js"></script>
</html>