
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
    <title>MISPI</title>

    <!-- Preload Scripts -->
    <script src="/scripts/global/nav.js"></script>                              <!-- gets the current dir -->
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

        <div id="intro">                                                        <!-- Unused ID -->
            <h1>Présentation portail MISPI</h1>
            <p>
                ❯❯ L1 MISPI - USMB
            </p>
            <p>
                📍Campus de Technolac - 73376 Le Bourget-du-Lac
            </p>
            <h2>Sommaire</h2>
            <ul>
                <li><a href="#infos">Infos Pratiques</a></li>
                <li><a href="#deb">Débouchés</a></li>
                <li><a href="#cours">Cours</a></li>
            </ul>

            <div class="info">
                <p>
                    MISPI : <b>M</b>athématiques <b>I</b>nformatique <b>S</b>cience Pour l'<b>I</b>ngénieur
                </p>
                <p>
                    Ce sont les 3 grandes thématiques de la formation en 1<sup>ere</sup> année
                </p>
            </div>
            
            <div class="success">
                <p>
                    <a href="https://formations.univ-smb.fr/fr/catalogue/licence-XA/sciences-technologies-sante-STS/licence-informatique-KGXYTYFC.html">Lien de la présentation de la formation par l'USMB</a>
                </p>
            </div>
            <p>
                La première année vois plusieurs domaines regroupés au cein de la formation, d'ou le nom MISPI. Cela a pour effet de permettre un choix supplémentaire a la fin de l'année dans la formation sans forcément devoir se réorienter via parcoursup si le domaine ne vous plait pas.
            </p>

            <h2 id="infos">Infos Pratiques</h2>  
            <div class="success">
                <p>
                    Diplôme National de Licence contrôlé par l'etat
                </p>
            </div>

            <ul>
                <li>
                    <b>Durée</b> : 3 an (6 semestres)
                </li>
                <li>
                    <b>ECTS</b> : 180 (60/an)
                </li>
                <li>
                    <b>Niveau de diplôme</b> : Bac + 3 
                    <ul>
                        <li><b>Master</b> : Bac + 5</li>
                    </ul>
                </li>
                <li>
                    <b>Langue</b> : Français            
                </li>
            </ul>

            <p>
                Conditions pour valider l'année : 10 de moyenne générale annuelle
            </p>
            


            <h2 id="deb">Poursuite d'études</h2>
            <ul class="chevron">
                <li>
                    Master Informatique
                </li>
                <li>
                    Master Réseaux et télécommunication
                </li>
                <li>
                    Préparation CAPES Informatique
                </li>
                <li>
                    Intégration école ingénieur (INPG, INSA, …)
                </li>
            </ul>

            <h2 id="cours">Cours</h2>
            <div class="info">
                <p>
                    Cours du Semestre N°1, triés par modules
                </p>
                <p>
                    La quantitée peut paraitre importante, mais en réalité le volume horaire l'est moins
                </p>

                <div class="success">
                    <p>
                        A l'université, le travail de préparation en prévision des cours (TD/TP) est important
                    </p>
                </div>
            </div>

            <div>
                <h3>
                    UAF101 Outils Mathématiques (6 crédits)
                </h3>
                <ul class="chevron">
                    <li>
                        Mathématiques et applications (MATH103) 
                    </li>
                </ul>
            </div>

            <div>
                <h3>
                    UAF102 Sciences du numérique (6 crédits)
                </h3>
                <ul class="chevron"">
                    <li>
                        Mathématiques pour le numérique 1 (ETRS101)
                    </li>
                    <li>
                        Systèmes numériques (ETRS102)
                    </li>
                </ul>
            </div>

            <div>
                <h3>
                    UAF103 Informatique (6 crédits)
                </h3>
                <ul class="chevron">
                    <li>
                        Algorithmique (INFO101)
                    </li>
                    <li>
                        Langages du Web 1 (INFO102) 
                    </li>
                </ul>
            </div>
             
            <div>
                <h3>
                    UAI104 UA d'individualisation (1 UA parmi 2)
                </h3>
                Au choix : 1 parmi 2
                
                <ul class="chevron">
                    <li>
                        UAI104 Projet Interdisciplinaire
                        <ul style="list-style-type: disc;">
                            <li>
                                Domotique (ETRS103) 
                            </li>
                        </ul>
                    </li>
                    <li>
                        UAI104 Mathématiques
                        <ul style="list-style-type: disc;">
                            <li>
                                Statistique descriptive (MATH104)
                            </li>
                            <li>
                                Logique et ensembles (MATH105) 
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
                
            <div>
                <h3>
                    UAM105 UA Modulaire (6 crédits)
                </h3>
                <ul class="chevron">
                    <li>
                        Anglais (ANGL101_SCEM)
                    </li>
                    <li>
                        Méthodologie du travail universitaire (AIPE101)
                    </li>
                    <li>
                        Intégration à la vie universitaire (AIPE102) 
                    </li>
                    <li>
                        Enseignements d'ouverture
                        <ul style="list-style-type: disc;">
                            <p>
                                Au choix : 1 parmi 3
                            </p>
                            <li>
                                Cycle Conférences 1 (CONF101)
                            </li>
                            <li>
                                Changement climatique-Impacts et Solutions 1 (CCIS101)
                            </li>
                            <li>
                                Sport 73 (Bourget) (SPOR101) 
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </main>
</body>
<!-- Post Load Scripts -->
<script src="/scripts/global/footer.js"></script>
</html>