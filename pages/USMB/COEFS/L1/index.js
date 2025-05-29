

const S1 = [
    {
        "option" : false,
        "titre" : "MATHS103",
        "module" : "MATHS",
        "titre_long" : "Mathématiques et applications",
        "notes" : {
            "CM_ControleContinu" : 2.43,
            "CM_ControleTerminal" : 2.97,
            "TD" : 0.45,
            "TP" : 0.15
        }
    },
    {
        "option" : false,
        "titre" : "INFO101",
        "module" : "INFO",
        "titre_long" : "Algorithmique",
        "notes" : {
            "CM_ControleContinu" : 0.8,
            "CM_ControleTerminal" : 1.3,
            "TP" : 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "INFO102",
        "module" : "INFO",
        "titre_long" : "Langages du Web 1",
        "notes" : {
            "CM" : 1.5,
            "TP" : 1.5,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS101",
        "module" : "ETRS",
        "titre_long" : "Mathématiques pour le numérique 1",
        "notes" : {
            "CM" : 1.5,
            "TP" : 1.5,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS102",
        "module" : "ETRS",
        "titre_long" : "Systèmes numériques",
        "notes" : {
            "CM" : 2.1,
            "TP_connaissance" : 0.6,
            "TP_competence" : 0.3,
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
    {
        "option" : false,
        "titre" : "AIPE101",
        "module" : "MOD",
        "titre_long" : "Méthodologie du travail universitaire",
        "notes" : {
            "AIPE101" : 1
        }
    },
    {
        "option" : false,
        "titre" : "AIPE102",
        "module" : "MOD",
        "titre_long" : "Intégration à la vie universitaire",
        "notes" : {
            "AIPE102" : 1
        }
    },
    {
        "option" : false,
        "titre" : "OPTION",
        "module" : "MOD",
        "titre_long" : "Enseignement d'ouverture (conf / climat / sport)",
        "notes" : {
            "OPTION" : 1
        }
    },
    {
        "option" : true,
        "titre" : "MATHS104",
        "module" : "INDIV",
        "titre_long" : "Statistique descriptive",
        "notes" : {
            "CM" : 2.25,
            "TD" : 0.45,
            "TP" : 0.3
        }
    },
    {
        "option" : true,
        "titre" : "MATHS105",
        "module" : "INDIV",
        "titre_long" : "Logique et ensembles",
        "notes" : {
            "CM" : 2.4,
            "TD" : 0.6
        }
    },
    {
        "option" : true,
        "titre" : "ETRS103",
        "module" : "INDIV",
        "titre_long" : "Domotique",
        "notes" : {
            "CC" : 4.2,
            "CC1_competence" : 1.494,
            "CC2_competence" : 0.306
        }
    },
];

const S2 = [
    
];

var moyenne = -1;
var moyenne_par_modules = [];

// ONLOAD

function html_onload() {
    // charge les semestres :
    html_semestre(S1, ".un");
    html_semestre(S2, ".deux");
}


// HTML CONSTRUCTOR
function html_semestre(modules, semestre_nb) {
    let semestre = document.querySelector(semestre_nb); // semestre : ".un" ou ".deux"

    let liste_options = [];

    // on parcours les modules a créer
    for (let i=0; i<modules.length; i++) {
        if (modules[i]["option"] === false) { // pas une option (les options a la fin)
            module = html_module(modules[i]);
            semestre.appendChild(module);
        } else {
            liste_options.push(modules[i]);
        }
    }

    // au tour des options
    let h3_opt = document.createElement("h3");
    h3_opt.innerHTML = "Options";
    semestre.appendChild(h3_opt);

    for (let i=0; i<liste_options.length; i++) {
        let module = html_module(liste_options[i]);
        semestre.appendChild(module);
    }

    // finalement on ajoute un bouton pour calculer
    let bouton = document.createElement("button");
    bouton.innerHTML = "Calculer la moyenne";
    bouton.addEventListener("click", calcule_moyenne);
    semestre.appendChild(bouton);
} 


function html_module(module) {
    let div_module = document.createElement("div");
    div_module.className = "module";

    let titre = document.createElement("p");
    titre.innerHTML = module["titre"];
    titre.id = "ModNum";
    
    let titre_long = document.createElement("p");
    titre_long.innerHTML = module["titre_long"];
    titre_long.id = "ModTitle";

    let moyenne = document.createElement("p");
    moyenne.innerHTML = "moyenne : N/A";
    moyenne.id = "moyenne";

    div_module.appendChild(titre);
    div_module.appendChild(titre_long);
    div_module.appendChild(moyenne)

    for (let elt in module["notes"]) {
        let tmp = html_note(elt, module["notes"][elt]);
        div_module.appendChild(tmp);
    }

    return div_module;
}

function html_note(nom_note, coef) {
    let div_note = document.createElement("div");
    div_note.id = "section";

    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = nom_note + " - Coef : " + coef;
    input.className = coef; // pour le récupérer plus tard

    div_note.appendChild(input);
    return div_note;
}


// CALCULS MOYENNES


/**
 * Calcul moyenne :
 * (note0 * coeff0) + (note1 * coeff1) + ... + (noteN * coeffN) / (coeff0 + coeff1 + ... + coeffN)
 */
function calcule_moyenne(event) {
    let parent = event.target.parentNode;
    let childs = parent.childNodes;
    let notes;


    // on récupère les modules
    let modules = get_modules(childs);

    // pour chaque module, on prends les notes remplies et leurs coefs
    for (let i=0; i<modules.length; i++) {  
        let sections = get_sections(modules[i]);
        // on verifie si il y a une note, sinon on ne la garde pas
        let NotesAGarder = keep_notes(sections);
        if (NotesAGarder.length != 0) { // il y a une ou plusieures notes dans le module.

        }
    }
}

function get_modules(childs) {
    let modules = [];

    for (let i=0; i<childs.length; i++) {
        if (childs[i].className == "module") {
            modules.push(childs[i]);
        }
    }
    return modules;
}

function get_sections(module) {
    let sections = [];
    let childs = module.childNodes;

    for (let i=0; i<childs.length; i++) {
        if (childs[i].id == "section") {
            if (childs[i].children[0].tagName == "INPUT") {
                sections.push(childs[i].children[0]);
            }
        }
    }
    return sections;
}

function keep_notes(inputs) {
    notes_remplies = [];

    for (let i=0; i<inputs.length; i++) {
        if (!inputs[i].value == "") {
            notes_remplies.push(inputs[i]);
        }
    }
    return notes_remplies;
}