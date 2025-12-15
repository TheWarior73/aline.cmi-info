import {loadSemesters} from "/scripts/coeffs/coeffs.js"

// TODO MODULES
const S1 = [
    {
        "option" : false,
        "titre" : "MATHS103",
        "module" : "MATHS",
        "titre_long" : "Mathématiques et applications",
        "notes" : {
            "CM_ControleTerminal" : 5.4,
            "TD*" : 0.6,
        }
    },
    {
        "option" : false,
        "titre" : "INFO101",
        "module" : "INFO",
        "titre_long" : "Algorithmique",
        "notes" : {
            "CM_ControleTerminal" : 2.1,
            "TP*" : 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "INFO102",
        "module" : "INFO",
        "titre_long" : "Langages du Web 1",
        "notes" : {
            "CM" : 1.8,
            "TP*" : 1.2,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS101",
        "module" : "ETRS",
        "titre_long" : "Mathématiques pour le numérique 1",
        "notes" : {
            "CM_ControleTerminal" : 2.1,
            "TP*" : 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS102",
        "module" : "ETRS",
        "titre_long" : "Systèmes numériques",
        "notes" : {
            "CM_ControleTerminal" : 2.1,
            "TP_CR*" : 0.603,
            "TP_competence*" : 0.297,
        }
    },
    {
        "option" : false,
        "titre" : "ANGL101",
        "module" : "MOD",
        "titre_long" : "Anglais",
        "notes" : {
            "ANGLAIS" : 3
        }
    },
    //les évaluation d'AIPE101 et AIPE102 sont commune à l'exeption des notes d'oraux et ceux qui on une note inférieure à 10/20
    {
        "option" : false,
        "titre" : "AIPE101",
        "module" : "MOD",
        "titre_long" : "Méthodologie du travail universitaire",
        "notes" : {
            "Oral*" : 0.5,
            "Dossier" : 0.5
        }
    },
    {
        "option" : false,
        "titre" : "AIPE102",
        "module" : "MOD",
        "titre_long" : "Intégration à la vie universitaire",
        "notes" : {
            "COMUN AIPE101 ^^^^^^" : 0
        }
    },
    {
        "option" : false,
        "titre" : "OPTION",
        "module" : "MOD",
        "titre_long" : "Enseignement d'ouverture (conf / climat / sport)",
        "notes" : {
            "OPTION**" : 1
        }
    },
    {
        "option" : true,
        "titre" : "MATHS104",
        "module" : "INDIV",
        "titre_long" : "Statistique descriptive",
        "notes" : {
            "CM" : 2.25,
            "TD*" : 0.45,
            "TP*" : 0.3
        }
    },
    {
        "option" : true,
        "titre" : "MATHS105",
        "module" : "INDIV",
        "titre_long" : "Logique et ensembles",
        "notes" : {
            "CM" : 2.4,
            "TD*" : 0.6
        }
    },
    {
        "option" : true,
        "titre" : "ETRS103",
        "module" : "INDIV",
        "titre_long" : "Domotique",
        "notes" : {
            "TP*" : 6,
        }
    },
];

const S2 = [
    {
        "option" : false,
        "titre" : "MATH204",
        "module" : "MATHS",
        "titre_long" : "Algèbre 2",
        "notes" : {
            "CM_CT" : 2.4,
            "TD*" : 0.45,
            "TP*": 0.15,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS201",
        "module" : "ETRS",
        "titre_long" : "Réseaux informatiques et internet",
        "notes" : {
            "CM" : 2.1,
            "TP_CC*" : 0.297,
            "TP_CT*" : 0.603,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS202",
        "module" : "ETRS",
        "titre_long" : "Electronique programmable",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },
    {
        "option" : false,
        "titre" : "INFO201",
        "module" : "INFO",
        "titre_long" : "Systèmes d'exploitation",
        "notes" : {
            "CM_CT" : 1.8,
            "TP*" : 1.2,
        }
    },
    {
        "option" : false,
        "titre" : "INFO202",
        "module" : "INFO",
        "titre_long" : "Programmation et algorithmique",
        "notes" : {
            "CM_CT" : 1.8,
            "TP*" : 1.2,
        }
    },
    {
        "option" : false,
        "titre" : "INFO203",
        "module" : "INFO",
        "titre_long" : "Languages du Web 2",
        "notes" : {
            "CM_CT" : 1.5,
            "TP*" : 1.5,
        }
    },
    {
        "option" : false,
        "titre" : "INFO205",
        "module" : "INFO",
        "titre_long" : "Mathématiques pour le numérique 2",
        "notes" : {
            "CM_CT" : 2.4,
            "TP_CC*" : 0.6,
        }
    },
    {
        "option" : false,
        "titre" : "ANGL201",
        "module" : "MOD",
        "titre_long" : "Anglais SceM",
        "notes" : {
            "CT" : 3,
        }
    },
    {
        "option" : false,
        "titre" : "AIPE201",
        "module" : "MOD",
        "titre_long" : "Orientation et métiers",
        "notes" : {
            "Dossier*" : 0.5,
            "Rapport*" : 0.5,
            "Oral*" : 0.5,
            "Écrit*" : 0.5,
        }
    },
    {
        "option" : false,
        "titre" : "OPTION",
        "module" : "OPTION",
        "titre_long" : "Nutrition / Conférences / sport",
        "notes" : {
            "Note**" : 1,
        }
    },


    {
        "option" : true,
        "titre" : "INFO204",
        "module" : "INFO",
        "titre_long" : "Projet multidisciplinaire",
        "notes" : {
            "Note*" : 3,
        }
    },
    {
        "option" : true,
        "titre" : "MATH202",
        "module" : "MATHS",
        "titre_long" : "Analyse",
        "notes" : {
            "CM_CT" : 2.4,
            "TD*" : 0.6,
        }
    },
];

// ONLOAD

export function html_onload() {
    // charge les semestres :
    loadSemesters(S1, S2)
}

window.addEventListener("DOMContentLoaded", html_onload);