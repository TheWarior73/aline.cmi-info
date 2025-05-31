

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
            "CM_ControleContinu" : 0.84,
            "CM_ControleTerminal" : 1.26,
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
            "CM_ControleTerminal" : 2.1,
            "TP" : 0.9,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS102",
        "module" : "ETRS",
        "titre_long" : "Systèmes numériques",
        "notes" : {
            "CM_ControleTerminal" : 2.1,
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
    //les évaluation d'AIPE101 et AIPE102 sont commune à l'exeption des notes d'oraux et ceux qui on une note inférieure à 10/20
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
    {
        "option" : false,
        "titre" : "MATH204",
        "module" : "MATHS",
        "titre_long" : "Algèbre 2",
        "notes" : {
            "CM_CC1" : 1.2,
            "CM_CC2" : 1.2,
            "TD" : 0.45,
            "TP": 0.15,
        }
    },
    {
        "option" : false,
        "titre" : "ETRS201",
        "module" : "ETRS",
        "titre_long" : "Réseaux informatiques et internet",
        "notes" : {
            "CM" : 2.1,
            "TP_CC" : 0.297,      
            "TP_CT" : 0.603,  
        }
    },
    {
        "option" : false,
        "titre" : "ETRS202",
        "module" : "ETRS",
        "titre_long" : "Electronique programmable",
        "notes" : {
            "CM_ControleTerminal" : 2.25,
            "TP" : 0.75,
        }
    },
    {
        "option" : false,
        "titre" : "INFO201",
        "module" : "INFO",
        "titre_long" : "Systèmes d'exploitation",
        "notes" : {
            "CM_ControleTerminal" : 1.8,
            "TP" : 1.2,
        }
    },
    {
        "option" : false,
        "titre" : "INFO202",
        "module" : "INFO",
        "titre_long" : "Programmation et algorithmique",
        "notes" : {
            "CM_CC1" : -1 ,
            "CM_CC2" : -1 ,
            "CM_CC3" : -1 ,
            "TP" : -1 ,
        }
    },
    {
        "option" : false,
        "titre" : "INFO203",
        "module" : "INFO",
        "titre_long" : "Languages du Web 2",
        "notes" : {
            "CM_CC" : 1.8 ,
            "TP" : 1.2 ,
        }
    },
    {
        "option" : false,
        "titre" : "INFO205",
        "module" : "INFO",
        "titre_long" : "Mathématiques pour le numérique 2",
        "notes" : {
            "CM_CT" : 2.4,
            "TP_CC" : 0.6,
        }
    },
    {
        "option" : false,
        "titre" : "ANGL201",
        "module" : "MOD",
        "titre_long" : "Anglais SceM",
        "notes" : {
            "Écrit/Oral" : 2.4 ,
            "Travail personnel" : 0.6,
        }
    },
    {
        "option" : false,
        "titre" : "AIPE201",
        "module" : "MOD",
        "titre_long" : "Orientation et métiers",
        "notes" : {
            "Dossier" : 0.5,
            "Rapport" : 0.5,
            "Oral" : 0.5,
            "Écrit" : 0.5,
        }
    },
    {
        "option" : false,
        "titre" : "OPTION",
        "module" : "OPTION",
        "titre_long" : "Nutrition / Conférences / sport",
        "notes" : {
            "Note" : 1,
        }
    },


    {
        "option" : true,
        "titre" : "INFO204",
        "module" : "INFO",
        "titre_long" : "Projet multidisciplinaire",
        "notes" : {
            "Note" : 3,
        }
    },
    {
        "option" : true,
        "titre" : "MATH202",
        "module" : "MATHS",
        "titre_long" : "Analyse",
        "notes" : {
            "CM_CC1" : 1.2,
            "CM_CC2" : 1.2,
            "TD" : 0.6,
        }
    },
];


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
    bouton = bouton_html()
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

function bouton_html() {
    let div_bouton = document.createElement("div");
    div_bouton.className = "bouton"
    
    let bouton = document.createElement("button");
    bouton.innerHTML = "Calculer la moyenne";
    bouton.addEventListener("click", calcule_moyenne);
    
    let para = document.createElement("p");
    para.innerHTML = "Moyenne : N/A";

    div_bouton.appendChild(bouton);
    div_bouton.appendChild(para)
    return div_bouton;
}

// CALCULS MOYENNES


/**
 * Calcul moyenne :
 * (note0 * coeff0) + (note1 * coeff1) + ... + (noteN * coeffN) / (coeff0 + coeff1 + ... + coeffN)
 */
function calcule_moyenne(event) {
    let div_parent = event.target.parentNode;
    let parent = div_parent.parentNode;

    let html_moyenneG = div_parent.childNodes[1]; // p moyenne G
    let moyenneG = 0.0;
    let nb_modules = 0;

    let childs = parent.childNodes;

    // on récupère les modules
    let modules = get_modules(childs);

    // pour chaque module, on prends les notes remplies et leurs coefs
    for (let i=0; i<modules.length; i++) {  
        let sections = get_sections(modules[i]);
        // on verifie si il y a une note, sinon on ne la garde pas
        let NotesAGarder = keep_notes(sections);
        if (NotesAGarder.length != 0) { // il y a une ou plusieures notes dans le module.
            let moy_module = calcule_module(NotesAGarder);

            update_module(moy_module[0], modules[i]);
            moyenneG = moyenneG + parseFloat(moy_module[0]);
            nb_modules++;
        }
    }
    update_moyenneG(html_moyenneG, moyenneG, nb_modules);
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


function calcule_module(liste_notes) {
    //on parcourt la liste des notes
    let coeff = 0.0;
    let notes = 0.0;
    
    for (let i=0; i<liste_notes.length; i++) {
        // value == note
        // class == coeff
        let temp_val = parseFloat(liste_notes[i].value)
        if (temp_val > 20) {
            temp_val = 20.0;
            console.log("Valeur reçue supérieure a 20, abaissement a 20/20")
        }
        
        // calcul & ajout moy module
        coeff = coeff + parseFloat(liste_notes[i].className)

        // notes + (note * coeff)
        notes = notes + (temp_val * parseFloat(liste_notes[i].className))
    }
    let moyenne = notes/coeff
    moyenne = sanitizeFloatingPointErrors(moyenne) // removes imperfections
    return [moyenne, coeff]
}

function update_module(moyenne, module) {

    let moyenne_html = module.querySelector("#moyenne")
    moyenne_html.innerHTML = "Moyenne : " + moyenne
}

function sanitizeFloatingPointErrors(x) {
  return Number.parseFloat(x).toFixed(3);
}

function update_moyenneG(elt, moyenne, nb_notes) {

    let res = moyenne/nb_notes
    elt.innerHTML = "Moyenne : " + res;
}