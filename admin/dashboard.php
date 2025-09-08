<?php

session_start();

if (!isset($_SESSION["logged_in"]) && $_SESSION["userData"]["discord_id"] != "526790971145453578") {
	echo "nuh huh";
        header("Location: ../errors/403.php");
}

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

    <link rel="stylesheet" href="/styles/nav.css">                          <!-- Include whenever not in /root -->
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!-- Title -->
    <title>Home</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script>                          <!-- gets the current dir --> <!-- Include whenever not in /root -->
</head>
<body>
    <header>
        <a href="/">
            <img src="/img/four_leaf_pfp.jpg" alt="Pfp">
            <span id="header_aline">
                Aline B.
            </span>
        </a>
        <nav>
            <ul>
				<li><a href="logout.php" style="color:var(--error);">Log Out</a></li>
                <li><a href="/" id="active">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/misc">Misc Stuff</a></li>
            </ul>
        </nav>
    </header>

    <main>
        
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>