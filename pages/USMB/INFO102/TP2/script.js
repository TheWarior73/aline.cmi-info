var vitrine = document.querySelector(".vitrine");
var icon = document.querySelector(".iconeMenu");
console.log(icon, vitrine);

icon.addEventListener("click", clickMenu);
function clickMenu() {
    vitrine.className = vitrine.className === 'vitrine afficheMenu' ? 'vitrine' : 'vitrine afficheMenu' ;
    icon.className = icon.className === 'iconeMenu afficheMenu' ? 'iconeMenu' : 'iconeMenu afficheMenu';
}