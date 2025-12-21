/**
 * Adds the footer to the bottom of the pages
 */

// Some "in dev mode" css just so I know where I'm at with a quick glance ;(
const host = window.location.hostname
const isDev = host === 'aline'

let footerDOM = document.querySelector("footer");

if (footerDOM) {
    // Adds to existing footer
    add_to_footer();
} 
else {
    // Create footer first (and adds it to the bottom of the page)
    footerDOM = document.createElement("footer");
    add_to_footer();
    footerDOM.classList.add("dev")
    
    document.querySelector("body").appendChild(footerDOM);
}


function add_to_footer() {
    let div = document.createElement("div");
    div.id = "links";
    
    let txt = document.createTextNode("Aline . ");
    
    let link = document.createElement("a");
    link.href = "https://github.com/TheWarior73/aline.cmi-info";
    link.innerHTML = "Source";

    let year_content = new Date().getFullYear();
    let year = document.createTextNode(year_content)

    div.appendChild(txt);
    div.appendChild(link);
    div.appendChild(document.createTextNode(" . "));
    div.appendChild(year);

    footerDOM.appendChild(div);
}