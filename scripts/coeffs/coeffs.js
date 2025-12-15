// ONLOAD
import { showDisclaimer, showInfo } from "./disclaimer.js";

const showInformation = true;

export function loadSemesters(S1, S2) {
    // charge les semestres :
    let noteDiv = document.querySelector("#topNote")
    if (showInformation) {
        // SHOW INFO
        showInfo(noteDiv)
    } else {
        // ONLY DISCLAIMER
        showDisclaimer(noteDiv)
    }

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
            let module = html_module(modules[i]);
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
    let bouton = bouton_html()
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
    let notes_remplies = [];

    for (let i=0; i<inputs.length; i++) {
        // On ne traite pas les "coefs = 0", c'est l'AIPE qui fait des dingueries dans les MCC
        if (inputs[i].value != "" && inputs[i].className != "0" ) {
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