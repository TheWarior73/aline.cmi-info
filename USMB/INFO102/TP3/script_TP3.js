var zone_dessin = document.getElementById("dessin");
var ctx = zone_dessin.getContext('2d');

var en_dessin = false;

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

zone_dessin.onmousedown = function(e){
	en_dessin = true;
	ctx.beginPath();
}

zone_dessin.onmousemove = function(e){
	if (en_dessin === true) {
		dessiner(e.offsetX, e.offsetY)
	}
}

zone_dessin.onmouseup = function(e){
	en_dessin = false
};

function dessiner(x,y){
	ctx.lineTo(x, y);
	ctx.stroke();
}

couleurs.onclick = function(e) {
	var couleur = e.target.getAttribute("alt");
	ctx.strokeStyle = couleur;
}

traits.onclick = function(e) {
	var epaisseur = e.target.getAttribute("alt");
	if (epaisseur === "taille 1"){
		ctx.lineWidth = 6;
	} else if (epaisseur === "taille 2"){
		ctx.lineWidth = 4;
	} else {
		ctx.lineWidth = 2;
	}
}

var bouton = document.getElementById("effacer");

bouton.addEventListener("click", efface);
function efface() {
	ctx.clearRect(0,0, zone_dessin.width, zone_dessin.height);
}