<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styles/global.css">
    <link rel="stylesheet" href="../../coefs.css">
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
            <span id="header_aline">
                Aline B.
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

        <div class="info">
            <h2 style="margin: 0 10px;">Note : Le calcul de note peut être cassé</h2>
            <ul class="chevron" style="margin: 5px 10px;">
                <li>
                    Pensez a faire un report de bug <a href="https://github.com/TheWarior73/aline.cmi-info/issues" style="font-weight: 600;">sur le github</a>
                </li>
                <li>
                    Ou a envoyer un mail a <a href="mailto:bellotew@etu.univ-smb.fr" style="font-weight: 600; text-decoration: underline;">bellotew@etu.univ-smb.fr</a>
                </li>
                <li>
                    Contact discord possible si vous le connaisez.
                </li>
            </ul>

            <div class="error">
                <h2>
                    Disclaimer : 
                </h2>
                <p>
                    Ce calculateur n'as aucune validitée juridique, son but est de fournir un calcul automatisé de moyennes, il peut être erroné.
                </p>
                <p>
                    Pensez a revérifier vos moyennes en cas de doutes !
                </p>
            </div>

        </div>


        <div class="annee">

            <h1>Première année - Session 2</h1>
            <div class="error">
                <p>Le calcul ne s'effectue que sur les notes entrées, si un champ est laissé vide, il n'est pas compté</p>
            </div>

            <div class="success">
                <p>
                    <a href="../Session1/" style="font-weight: 600;">Aller a la session 1</a>
                </p>
                <p>
                    <a href="#s2" style="font-weight: 600;">Voir le semestre 2</a>
                </p>
                <ul class="chevron">
                    <li>
                        <a href="/.github/grades_calc/grade_calc_Licence_1_session1.html" style="font-weight: 600;" download="">Télécharger le fichier</a>
                    </li>
                </ul>
            </div>

            <div class="un">
                <h2 id="s1">Semestre 1</h2>
                <p>
                    Calcul semestre 1, les options se trouvent a la fin du formulaire
                </p>
                <p>
                    <b>*</b> après le nom d'une note signifie un report de la note
                    <br>
                    <b>**</b> après le nom d'une note indique que les modalitées sont différentes en fonction de l'option
                </p>
            </div>
                
            <div class="deux">
                <h2 id="s2">Semestre 2</h2>
                <p>
                    Calcul semestre 2, les options se trouvent a la fin du formulaire
                </p>
                <p>
                    <b>*</b> après le nom d'une note signifie un report de la note
                    <br>
                    <b>**</b> après le nom d'une note indique que les modalitées sont différentes en fonction de l'option
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