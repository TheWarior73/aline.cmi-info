function createNode(elt, c=null, id=null, parent=null) {
    let res = document.createElement(elt);
    if (c != null && c != "") {
        res.classList = c;
    }
    
    if (id != null && id != "") {
        res.id = id;
    }

    if (parent != null && parent != "") {
        parent.appendChild(res);
    }
    return res
}

function createDesc(recueil, parent) {
    let recueilDesc = createNode("div", "recueilDesc", "", parent)
    let h1Title = createNode("h1", "", "", recueilDesc)
    h1Title.innerHTML = recueil.title

    let subTitle = createNode("p", "", "", recueilDesc)
    subTitle.innerHTML = "Est. " + recueil.year + " - " + recueil.author
}

function parseContent(content, parent) {
    const p = createNode("p", "", "", parent)

    content.split('\n').forEach((line, index, arr) => {
        p.appendChild(document.createTextNode(line))
        if (line != "") {
            if (index < arr.length -1) {
                createNode("br", "", "", p)
            }
        }
    })
    return p
}

function addInfo(note, parent) {
    let DOMnote = createNode("div", "info", "", parent)
    let p = createNode("p", "", "", DOMnote)
    p.innerHTML = note
}

function addNew(parent) {
    createNode("newPoem", "", "", parent)
}

/**
 * poemObject = {
 *  author : String
 *  title : String
 *  date : String - Should be of type Date later
 *  content : String
 * }
 */
function createPoem(poemObject, parent) {
    let poem = createNode("div", "poem", "", parent)

    // New ?
    if (poemObject.new) {
        addNew(poem)
    }

    // Desc
    let desc = createNode("div", "success", "", poem)
    desc.classList.add("no_icon")

    let h2Titre = createNode("h2", "", "", desc)
    h2Titre.innerHTML = poemObject.title

    let author = createNode("h3", "Misc", "", desc)
    
    let date = createNode("code", "", "", "")
    date.innerHTML = poemObject.date

    author.innerHTML = poemObject.author
    author.appendChild(date)

    // info ?
    if (poemObject.note) {
        addInfo(poemObject.note, poem)
    }

    // Content
    let content = parseContent(poemObject.content, poem)
}

export function createRecueil(recueil) {
    const recueilList = document.querySelector(".recueilList")

    let recueilContent = createNode("div", "recueilContent", "", recueilList)
    
    createDesc(recueil, recueilContent);
    
    let poemList = createNode("div", "poemList", "", recueilContent)
    recueil.poems.forEach(poem => {
        createPoem(poem, poemList)
    });
}