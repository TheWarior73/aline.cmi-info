var formulaire = document.querySelector("form");

formulaire.addEventListener("change",afficheCarte);

function afficheCarte(e){
    carte = e.target.getAttribute("id");
    if (carte == "cb") {
        formulaire.style = "background-image: url(images/CB.png); background-repeat: no-repeat;"
    } else if (carte == "mc"){
        formulaire.style = "background-image: url(images/mastercard.png); background-repeat: no-repeat;"
    } else {
        formulaire.style = "background-image: url(images/visa.png); background-repeat: no-repeat;"
    }
}


var items = document.querySelectorAll("li");

for (var i = 0; i < items.length; i++) {
    var coche = document.createElement("img");
    coche.setAttribute("src","images/case_non_coche.png");
    items[i].insertAdjacentElement("afterbegin",coche);
    items[i].firstChild.addEventListener("click", selectItem);
    items[i].firstChild.style.cursor = "pointer";
    coche = false;
    
}

function selectItem(e){
    coche ? coche = false : coche = true;
    var elt = document.createElement("img");
    if (coche == true) {
        e.target.setAttribute("src", "images/case_coche.PNG");
    } else {
        e.target.setAttribute("src", "images/case_non_coche.png");
    }
    e.target = elt
}


var bouton = document.querySelector("button");

bouton.addEventListener("click",delImages);

function delImages(){
    var cartes = document.querySelectorAll("form img");
    var labels = document.querySelectorAll(".lcarte");
    console.log(labels)
    console.log(cartes)
    console.log(labels[0])
    
    for (var i = 0; i < cartes.length; i++) {
        var texte = cartes[i].getAttribute("alt");
        cartes[i].parentNode.removeChild(cartes[i]);
        labels[i].innerHTML = texte;
        console.log(labels[i].innerHTML)
    }
}