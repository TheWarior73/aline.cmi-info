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
                <?php if (isset($_SESSION["logged_in"])){echo "<li><a href='/admin/dashboard' style='color:var(--error);'>Dashboard</a></li>";}?>
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
            <div class="recueilContent">
                <div class="recueilDesc">
                    <h1>Mon chibre dans toute sa splendeur</h1>
                    <p>Est. 2024 - Maia</p>
                </div>
                <div class="poemList">

                    <div class="poem">
                        <div class="success no_icon">
                            <h2>Mon chibre</h2>
                            <h3 class="Misc">Maia <code>12/04/2024</code></h3>
                        </div>
                        <p>
                            La migraine me frappe,                  <br>
                            Tel un ouragan.                         <br>
                            La migraine me frappe,                  <br>
                            La chaleur fit chaud,                   <br>
                            La sueur coula.                         <br>
                            Mes envies de meurtres s'achevèrent.    <br>
                            Ma tête tel les eaux de moïse.          <br>
                            Tel l'Huile et le Vinaigre.             <br>
                            Je suis bouleversée_ Refoulée           <br>
                            Per________due.                         <br>
                            _____________________ et                <br>
                            Consumée.                               <br>
                            La fièvre, la voila.
                        </p>
                    </div>

                    <div class="poem">
                        <div class="success no_icon">
                            <h2>Pamplemousse, tel est la question</h2>
                            <h3 class="Misc">Maia <code>12/04/2024</code></h3>
                        </div>
                        <p>
                            Sacrebleu et sac-à-merde!               <br>
                            Un pamplemousse dans ta kékette,        <br>
                            A-É-I-O-U :                             <br>
                            Les voyelles que j’ai conçue.           <br>
                            De sueur et de prouesse                 <br>
                            Ma splendeur est ma faiblesse           <br>
                            Doliprane est mon ennemi,               <br>
                            Le mojito est ma vie.                   <br>
                            Mais hélas ma fin me guette             <br>
                            Encore; Un pamplemousse dans ta kékette.<br>
                            Fin.
                        </p>
                    </div>
                    
                    <div class="poem">
                        <h2>titre</h2>
                        <h3>auteur - date</h3>
                        <p>
                            Contenu du poem.
                        </p>
                    </div>
                    
                    <div class="poem">
                        <h2>titre</h2>
                        <h3>auteur - date</h3>
                        <p>
                            Contenu du poem.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div class="recueilContent">
                <div class="recueilDesc">
                    <h1>Titre-Recueil</h1>
                    <p>Truc bidule machin chose</p>
                </div>
                <div class="poemList">

                    <div class="poem">
                        <h2>titre</h2>
                        <h3>auteur - date</h3>
                        <p>
                            Contenu du poem.
                        </p>
                    </div>

                    <div class="poem">
                        <h2>titre</h2>
                        <h3>auteur - date</h3>
                        <p>
                            Contenu du poem.
                        </p>
                    </div>
                    
                    <div class="poem">
                        <h2>titre</h2>
                        <h3>auteur - date</h3>
                        <p>
                            Contenu du poem.
                        </p>
                    </div>
                    
                    <div class="poem">
                        <h2>titre</h2>
                        <h3>auteur - date</h3>
                        <p>
                            Contenu du poem.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>