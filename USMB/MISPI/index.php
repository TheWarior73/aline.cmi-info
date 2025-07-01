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

        <div id="intro">                                                        <!-- Unused ID -->
            <h1>Présentation portail MISPI</h1>
            <h2>Sommaire</h2>
            <ul>
                <li><a href="#mat">Tronc Commun</a></li>
                <li><a href="#opt">Options</a></li>
                <li><a href="#deb">Débouchés</a></li>
            </ul>
            <p>
                <code>Note</code> MISPI signifie Mathématiques Informatique Science Pour l'Ingénieur, ce sont les 3 grandes thématiques de la formation en 1<sup>ere</sup> année
            </p>
            <p>
                <a href="https://formations.univ-smb.fr/fr/catalogue/licence-XA/sciences-technologies-sante-STS/licence-informatique-KGXYTYFC.html">Lien de la présentation de la formation par l'USMB</a>
            </p>
            <p style="background-color: var(--tertiary100);border-radius: 1em;padding:5px 10px;">
                <u style="text-decoration-color: var(--secondary);color: var(--secondary);">La formation consiste en un regroupement de plusieurs domaines servant ainsi de portail lors de la première année, permettant ainsi d'experimenter dans les différentes matières afin de se laisser un choix supplémentaire pour décider en fin de première année</u>
            </p>

            <h2 id="mat">Tronc Commun</h2>
                <p>Ici nous aborderons les cours du Semestre 1 pour donner un avant goût de la formation</p>
                <code>Informatique (INFO)</code>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>101. Algorithmique | [4CM, 6TD, 6TP]</li>
                    <li>102. Langage du web | [4CM, 7TD, 4TP]</li>
                </ul>
                <code>Mathématiques (MATH)</code>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>103. Mathématiques et application | [16CM, 16TD, 3TP]</li>
                </ul>
                <code>Electronique (ETRS)</code>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>101. Mathématiques pour le numérique 1 | [6CM, 6TD, 3TP]</li>
                    <li>102. Mathématiques pour le numérique 2 | [5CM, 5TD, 4TP]</li>
                </ul>
                <code>Autres</code>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>101. Méthodologie du travail universitaire (AIPE) | [1CM, 7TD, NaN TP]</li>
                    <li>102. Intégration au travail universitaire (AIPE) | [1CM, 1TD, 2TP]</li>
                    <li>Nan. ANG | [En ligne]</li>
                </ul>
                
                
            <h2 id="opt">Options</h2>
                <p>Toujours au semestre 1... <br>
                    Possibilité de choisir l'une ou l'autre des matières suivantes (MATH = 2 cours)</p>
                <code>Mathématiques (MATH)</code>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>104. Statistiques descriptives | [6CM, 6TD, 3TP]</li>
                    <li>105. Ensembles et logique | [9CM, 10TD, NaN TP]</li>
                </ul>
                <code>Projet (ETRS)</code>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>103. Projet Domotique | [1CM, 17TD, 8TP]</li>
                </ul>
                
            <h2 id="deb">Débouchés</h2>
            <p>
                <ul style="list-style-type:none; padding-left: 1em;">
                    <li>Licence Math</li>
                    <li>Licence Info</li>
                    <li>Licence Science Pour l'Ingénieur</li>
                </ul>
            </p>
        </div>
        
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>