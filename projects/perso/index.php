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

        <h2 id="pagesNav">Uh Oh...</h2>
        <p>
            It looks like I have nothing to share for now <br>
            Maybe we should head back <a href="/">home</a> 
        </p>
        
        
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>