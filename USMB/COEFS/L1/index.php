<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/global.css">
    <link rel="stylesheet" href="../coefs.css">
    <link rel="stylesheet" href="/styles/nav.css">
    <script async src="./index.js"></script>
    <title>Coefs - L1</title>


    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script>                              <!-- gets the current dir -->
    
</head>
<body onload="html_onload()">
    <header>
        <a href="/">
            <img src="/img/four_leaf_pfp.jpg" alt="Pfp">
            Aline B.
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

        <div class="disclaimer">
            <h2>
                <code>Note : Le calcul de note peut être cassé</code>
            </h2>
            <code>Pensez a faire un report de bug <a href="https://github.com/TheWarior73/aline.cmi-info/issues" style="color: var(--main); font-weight: 600;">sur le github</a></code><br>
            <code>Ou a envoyer un mail a <a href="mailto:bellotew@etu.univ-smb.fr" style="color: var(--main); font-weight: 600; text-decoration: underline;">bellotew@etu.univ-smb.fr</a></code>
        </div>


        <div class="annee">

            <h1>Première année</h1>
            <p>Le calcul ne s'effectue que sur les notes entrées, si un champ est laissé vide, il n'est pas compté</p>
            
            <code>
                <a href="#s2" style="color: var(--main); font-weight: 600;">Aller au semestre 2</a>
            </code>

            <div class="un">
                <h2 id="s1">Semestre 1</h2>
                <p>
                    Calcul semestre 1, les options se trouvent a la fin du formulaire
                </p>
            </div>
                
            <div class="deux">
                <h2 id="s2">Semestre 2</h2>
                <p>
                    Calcul semestre 2, les options se trouvent a la fin du formulaire
                </p>
            </div>
        </div>

    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
<script>
    getnav()
</script>
</html>