import {loadSemesters} from "/scripts/coeffs/coeffs.js"

// TODO MODULES
const S1 = [
    {
        "option" : false,
        "titre" : "MATHS301",
        "module" : "MATHS",
        "titre_long" : "Algèbre 3",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },
    {
        "option" : false,
        "titre" : "MATHS302",
        "module" : "MATHS",
        "titre_long" : "Algèbre 4",
        "notes" : {
            "CM_CT" : 2.25,
            "TP" : 0.75,
        }
    },

    // *** --- ***

    {
        "option" : false,
        "titre" : "INFO301",
        "module" : "WEB",
        "titre_long" : "Langages et environements du WEB",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*" : 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "INFO306",
        "module" : "WEB",
        "titre_long" : "bases de données",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*" : 0.9,
        }
    },

    // *** --- ***

    {
        "option" : false,
        "titre" : "ETRS301",
        "module" : "Ordinateurs & Réseaux",
        "titre_long" : "Structure et fonctionnement des ordinateurs",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS302",
        "module" : "Ordinateurs & Réseaux",
        "titre_long" : "Réseaux informatiques et protocoles",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },

    // *** --- ***

    {
        "option" : true,
        "titre" : "INFO303",
        "module" : "PROG.",
        "titre_long" : "Programmation Impérative",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },
    {
        "option" : true,
        "titre" : "INFO305",
        "module" : "PROG.",
        "titre_long" : "Programmation Orientée Objet",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*" : 0.9,
        }
    },
    
    // *** --- ***

    {
        "option" : true,
        "titre" : "ETRS303",
        "module" : "COMP. PROG.",
        "titre_long" : "Systèmes Embarqués",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },
    {
        "option" : true,
        "titre" : "ETRS305",
        "module" : "COMP. PROG.",
        "titre_long" : "Systèmes Séquentiels",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*" : 0.75,
        }
    },

    // *** --- ***

    {
        "option" : false,
        "titre" : "ANGL301",
        "module" : "MODULAIRE",
        "titre_long" : "Anglais",
        "notes" : {
            "TD_Ecrit_Oral*" : 1.8,
            "TD_Pratique*" : 0.6,
            "Autonomie*" : 0.6,
        }
    },
    {
        "option" : false,
        "titre" : "AIPE301",
        "module" : "MODULAIRE",
        "titre_long" : "Techniques de Communication Ecrite",
        "notes" : {
            "TD*" : 1,
        }
    },
    {
        "option" : false,
        "titre" : "AIPE302",
        "module" : "MODULAIRE",
        "titre_long" : "Techniques de Communication Orale",
        "notes" : {
            "TD*" : 1,
        }
    },
    {
        "option" : false,
        "titre" : "OPTION",
        "module" : "MODULAIRE",
        "titre_long" : "Conférences / sport / Autre...",
        "notes" : {
            "Note*" : 1,
        }
    },
];

const S2 = [
    {
        "option" : false,
        "titre" : "INFO402",
        "module" : "POO_DATA",
        "titre_long" : "Programation Orientée Objet 2",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*": 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "INFO410",
        "module" : "POO_DATA",
        "titre_long" : "Structure de Données Classiques",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*": 0.9,
        }
    },

    // *** --- ***

    {
        "option" : false,
        "titre" : "INFO403",
        "module" : "C_MAT",
        "titre_long" : "Programation C",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*": 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS401",
        "module" : "C_MAT",
        "titre_long" : "introduction télécom",
        "notes" : {
            "CM_CT" : 2.25,
            "TP*": 0.75,
        }
    },

    // *** --- ***

    {
        "option" : false,
        "titre" : "INFO405",
        "module" : "BDD_PROJ",
        "titre_long" : "Projet de programmation",
        "notes" : {
            "TD_Pratique*" : 2.01,
            "Soutenance*": 0.99,
        }
    },
    {
        "option" : false,
        "titre" : "INFO411",
        "module" : "BDD_PROJ",
        "titre_long" : "Serveur et technologies WEB",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*": 0.9,
        }
    },

    // *** --- ***
    
    {
        "option" : true,
        "titre" : "INFO406",
        "module" : "PROG_FONCT",
        "titre_long" : "Programmation fonctionelle 1",
        "notes" : {
            "CM_CTA" : 2.1,
            "TP*": 0.9,
        }
    },
    {
        "option" : true,
        "titre" : "INFO407",
        "module" : "PROG_FONCT",
        "titre_long" : "Programmation fonctionelle 2",
        "notes" : {
            "CM_Ecrit_Oral*" : 3,
        }
    },

    // *** --- ***

    {
        "option" : true,
        "titre" : "INFO408",
        "module" : "LPRO",
        "titre_long" : "Preparation Licence Pro 1",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*": 0.9,
        }
    },
    {
        "option" : true,
        "titre" : "INFO409",
        "module" : "LPRO",
        "titre_long" : "Preparation Licence Pro 2",
        "notes" : {
            "CM_CT" : 2.1,
            "TP*": 0.9,
        }
    },

    // *** --- ***

    {
        "option" : false,
        "titre" : "ANGL401",
        "module" : "MODULAIRE",
        "titre_long" : "Anglais",
        "notes" : {
            "Oral*" : 2.4,
            "Autonomie*": 0.6,
        }
    },
    {
        "option" : false,
        "titre" : "TEDS402",
        "module" : "MODULAIRE",
        "titre_long" : "Enjeux et transition écologique",
        "notes" : {
            "CM_CCI*" : 2.1,
            "TD*": 0.9,
        }
    },
];

// ONLOAD

export function html_onload() {
    // charge les semestres :
    loadSemesters(S1, S2)
}

window.addEventListener("DOMContentLoaded", html_onload);