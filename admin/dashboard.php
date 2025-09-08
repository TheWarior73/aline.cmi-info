<?php

session_start();

error_reporting(0);
$_SESSION["logged_in"] = true; // DEBUG TO REMOVE

if (!isset($_SESSION["logged_in"]) || $_SESSION["userData"]["discord_id"] != "526790971145453578") {
	echo "not a valid session";
    // header("Location: ../errors/403");
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
                <?php if (isset($_SESSION["logged_in"])){echo "<li><a href='logout.php' style='color:var(--error);'>Log Out</a></li>";}?>
                <li><a href="/">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/misc">Misc Stuff</a></li>
            </ul>
        </nav>
    </header>

    <main>
        
    <div class="container">
        <div id="left-column">
            
        </div>

        
        <div id="center-column">
            
        </div>
        
        
        <!-- Placeholder -->
        <div id="right-column"> 
            <div id="quick_links">
                <h1>Quick Actions</h1>
                <p> 
                    <a href="#">
                        New Post «
                    </a>
                </p>
                <p>
                    <a href="#">
                        Update last post «
                    </a>
                </p>
            </div>
        </div>
    </div>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>