/**
 * 
 * @param {String} elt 
 * @param {String} c 
 * @param {String} id 
 * @param {HTMLElement} parent 
 * @returns HTMLElement
 */
function createElement(elt, c=null, id=null, parent=null) {
    let res = document.createElement(elt)

    if (c != null) {
        res.classList = c
    }

    if (id != null) {
        res.id = id
    }

    if (parent != null) {
        parent.appendChild(res)
    }

    return res
}


// *** ============== *** //

/**
 * Shows the info note at the top of the calc page
 * As well as the disclaimer
 */
export function showInfo(parent) {
    let info = getInfo()
    parent.appendChild(info)
}


// *** ============== *** //

/**
 * Shows the disclaimer on the page
 */
export function showDisclaimer(parent) {
    let disclaimer = getDisclaimer()
    parent.appendChild(disclaimer)
}

// *** ============== *** //
// *** ============== *** //
// *** ============== *** //

/**
 * Generates the info note for the calc page
 * @returns the info DOM elt
 */
function getInfo() {
    let disclaimer = getDisclaimer()
    let info = createElement("div", "info", null, null)
    
    let title = createElement("h2", null, null, info)
    title.style.margin = "0 10p;"
    title.innerHTML = "Note : Le calcul de note peut être cassé"

    let ul = createElement("ul", "chevron", null, info)
    ul.style.margin = "5px 10px"

        // Li
        let liGit = createElement("li", null, null, ul)
        liGit.innerHTML = 'Pensez a faire un report de bug <a href="https://github.com/TheWarior73/aline.cmi-info/issues" style="font-weight: 600;">sur le github</a>'

        let liMail = createElement("li", null, null, ul)
        liMail.innerHTML = 'Ou a envoyer un mail a <a href="mailto:bellotew@etu.univ-smb.fr" style="font-weight: 600; text-decoration: underline;">bellotew@etu.univ-smb.fr</a>'

        let liDiscord = createElement("li", null, null, ul)
        liDiscord.innerHTML = 'Contact discord possible si vous le connaisez.'

    // end
    info.appendChild(disclaimer)

    return info
}

// *** ============== *** //

/**
 * Generates the disclaimer note for the calc page
 * @returns the disclaimer DOM elt
 */
function getDisclaimer() {
    let disclaimer = createElement("div", "error", null, null)

    let title = createElement("h2", null, null, disclaimer)
    title.innerHTML = "Disclaimer : "
    
    let p1 = createElement("p", null, null, disclaimer)
    p1.innerHTML = "Ce calculateur n'as aucune validitée juridique, son but est de fournir un calcul automatisé de moyennes, il peut être erroné."
    
    let p2 = createElement("p", null, null, disclaimer)
    p2.innerHTML = "Pensez a revérifier vos moyennes en cas de doutes !"

    return disclaimer
}
