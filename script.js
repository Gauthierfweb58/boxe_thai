

var combattant0 = { id:0, prenom: "JASON", nom: "QUITUSISA", age: '22 ans', taille: '180 cm', club: 'KERNER TEAM', Nationalité: 'Français', Palmarès: '15 combats', Nbre: '12 V 0 N 3 D 4 KO', poids: '78 kg - 80 kg' };
var combattant1 = { id:1, prenom: "KARIM", nom: "OUNISSI", age: '24 ans', taille: '172 cm', club: 'Badri ROUABHIA', Nationalité: 'Français', Palmarès: '39 combats', Nbre: '34 V 1 N 4 D 11 KO', poids: '78 kg - 80 kg' };
var combattant2 = { id:2, prenom: "ARISTOTE", nom: "QUITUSIS", age: '26 ans', taille:'178 cm', club: 'Les 7 samourais', Nationalité: 'Français', Palmarès: '17 combats', Nbre: '14 V 0 N 3 D 4 KO', poids: '82 kg - 84 kg' };
var combattant3 = { id:3, prenom: "SYLLA", nom: "DEMBA", age: '27 ans', taille: '184 cm', club: 'BOXING SCHOOL', Nationalité: 'Français', Palmarès: '21 combats', Nbre: '12 V 3 N 6 D 2 KO', poids: '82 kg - 84 kg' };
var combattant4 = { id:4, prenom: "MAMADOU", nom: "KONAT", age: '31 ans', taille: '181 cm', club: 'KERNER TEAM', Nationalité: 'Français', Palmarès: '15 combats', Nbre: '12 V 0 N 3 D 1 KO', poids: '73 kg - 76 kg' };
var combattant5 = { id:5, prenom: "DRIS", nom: "MAKALOU", age: '32 ans', taille: '176 cm', club: 'Badri ROUABHIA', Nationalité: 'Français', Palmarès: '28 combats', Nbre: '20 V 4 N 4 D 8 KO', poids: '78 kg - 80 kg' };
var combattant6 = { id:6, prenom: "SAMI", nom: "CRAUSER", age: '24 ans', taille:'191 cm', club: 'KERNER TEAM', Nationalité: 'Français', Palmarès: '19 combats', Nbre: '12 V 3 N 4 D 6 KO', poids: '84 kg - 87 kg' };
var combattant7 = { id:7, prenom: "AMEL", nom: "DEHBY", age: '26 ans', taille:'187 cm', club: 'ZEITOUN', Nationalité: 'Français', Palmarès: '32 combats', Nbre: '27 V 3 N 2 D 9 KO', poids: '84 kg - 87 kg' };

var combattants = [];
combattants.push(combattant0);
combattants.push(combattant1);
combattants.push(combattant2);
combattants.push(combattant3);
combattants.push(combattant4);
combattants.push(combattant5);
combattants.push(combattant6);
combattants.push(combattant7);

let valeurCombattant = JSON.parse(localStorage.getItem('combattants'));
if(valeurCombattant !== undefined){
  combattants = valeurCombattant;
}

function indexCombattant(id){
  for (let index = 0; index < combattants.length; index++) {
    const element = combattants[index];
    if(element.id === id){
      return index;
    }
  }
  return -1;
}

function localStorageSave(){
  localStorage.setItem("combattants", JSON.stringify(combattants));
}

for (let index = 0; index < combattants.length; index++) {
  const element = combattants[index];

  document.getElementById('prenom' + index).innerHTML= element.prenom;
  document.getElementById('nom' + index).innerHTML=element.nom;
  document.getElementById('club' + index).innerHTML=element.club;
  document.getElementById('nationalité' + index).innerHTML=element.Nationalité;
  document.getElementById('palmarès' + index).innerHTML=element.Palmarès;
  document.getElementById('Nbre' + index).innerHTML = element.Nbre;
  document.getElementById('age' + index).innerHTML =element.age;
  document.getElementById('taille' + index).innerHTML = element.taille;
  document.getElementById('poids' + index).innerHTML = element.poids;
}

let idOnglet = 3;
var histoire = {id:0, titre: "Histoire de la boxe thai", texte: "&ensp;&ensp;La genèse, l'histoire ancienne et l'image du muay thaï sont présentées d'une manière standardisée dans une abondante littérature en Thaïlande. Les données historiques les plus anciennes, qui attesteraient de pratiques de boxe avant le XIXe siècle, sont inspirées principalement par les chroniques royales, plusieurs fois réécrites (notamment sous Rama Ier), après les destructions du XVIIIe siècle (chute d'Ayutthaya en 1767). Il est donc difficile de confirmer l'historicité des légendes et de la genèse du muay thai. De même, il ne faut pas ignorer la forte teneur idéologique, notamment nationaliste, qui préside en Thaïlande à la présentation des origines de la boxe thaïlandaise (et du muay-boran), son histoire ancienne, et son image contemporaine. Le combat des fils du roi Sen Muang Ma Selon la tradition, en 1411, à la mort du roi Sen Muang Ma, ses deux fils, Ki et Fang, voulurent s'emparer du pouvoir. Comme leurs armées respectives n'arrivaient pas à se départager sur un champ de bataille, ils décidèrent de régler leur conflit par un duel. Chaque camp choisit son meilleur boxeur. L'homme de Fang fut battu et Ki monta sur le trône. La technique de combat de son guerrier (boxeur) fit école. La popularité du Muay Thaï Au XVIe siècle, la boxe thaïlandaise faisait partie de l'entraînement militaire. Le roi Naresuan le grand (r. 1590-1605) aurait encouragé sa pratique à ce titre. Il atteignit sa plus grande popularité au début du XVIIIe siècle, sous le règne de Pra Chao Sua, 'le Roi Tigre'. C'était le passe-temps favori de la population ; chaque village organisait des combats régulièrement. Le roi, qui était un boxeur de première force s'amusait à défier les champions locaux ! <br><button id='0' onclick='openModal2(event)'>Modifier</button>" };
var equipements = {id:1, titre: "Les premiers équipements des boxeurs", texte: "  &ensp;&ensp;À l'époque, les combattants protégeaient leurs poings en se bandant les mains avec du crin de cheval. Plus tard, le crin fut remplacé par des bandes de coton maintenues avec de la glu. On se servait de coquillages ou d'écorces d'arbres, comme coquille ! Parfois, avec l'accord des deux boxeurs, des morceaux de verre pouvaient être amalgamés dans la glu des bandages. À cette époque, les combats se déroulaient sans catégories de poids ni de limite de temps (combat dit « au finish). <br>La charte du NAKMUAY :<br>MAITRISE<br>RESPECT<br>COURAGE<br>HONNEUR<br>HUMILITÉ<br>LOYAUTÉ<br>FAIR PLAY<br>MORALITÉ <br><button id='1' onclick='openModal2(event)'>Modifier</button>" };
var internationalisation = {id:2, titre: "Internationalisation de la boxe thailandaise", texte: "&ensp;&ensp;Le développement du tourisme en Thaïlande a fait découvrir le muay thaï aux autres nations. Il s'est d'abord répandu aux Pays-Bas puis est venu très vite concurrencer en France le full-contact (boxe américaine) et le kick-boxing américain (low-kick), cela dans sa version « garantie d'origine » et dans sa version japonaise, le kick-boxing japonais (ou K-1). En 1966, l'adepte du karaté kyokushinkai Kenji Kurosaki défia un boxeur thaïlandais et fut battu par K.O. au premier round. Après ce combat, il séjourna en Thaïlande plusieurs mois, pour étudier le muay thaï, qu'il introduisit ensuite au Japon sous le nom de kick-boxing. <br><button id='2' onclick='openModal2(event)'>Modifier</button>"};

var histoires = [];
histoires.push(histoire);
histoires.push(equipements);
histoires.push(internationalisation);

let valeurHistoire = JSON.parse(localStorage.getItem('histoires'));
if(valeurHistoire !== undefined){
  histoires = valeurHistoire;
}

function indexhistoire(id){
  for (let index = 0; index < histoires.length; index++) {
    const element = histoires[index];
    if(element.id === id){
      return index;
    }
  }
  return -1;
}

function localStorageSave2(){
  localStorage.setItem("histoires", JSON.stringify(histoires));
  localStorage.setItem("onglets", idOnglet);
}

for (let index = 0; index < histoires.length; index++) {
  const element1 = histoires[index];
if(document.getElementById('t' + element1.id) != undefined){
    document.getElementById('t' + element1.id).innerHTML= element1.texte;
  document.getElementById('r' + element1.id).innerHTML= element1.titre;
}

}


/*function bulleDisparition(){
    if(window.innerWidth<=920 && document.getElementById("Checkbox").checked == true){
}else {
    document.getElementById('menu').style.rotate = "90";

function menu(){
    document.getElementById('menu').style.opacity = "0";

    document.getElementById('menu').style.transition = "250ms";
    document.getElementById('menu1').style.opacity = "1";
    document.getElementById('menu1').style.transition = "250ms";
    document.getElementById('nav').style.left = "3.5%";
}

}*/
/*var btn = document.getElementById('blurBtn');
var img = document.getElementById('blurImg');

btn.addEventListener('click', addBlur)

function addBlur() {
  img.style.filter = 'blur(20px)';
}*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";

}

/*btn.array.forEach(element => {

}*/
const btn = document.querySelectorAll('.btn-checkbox')
/*const vu = document.getElementsByClassName('vu')*/

btn.forEach(element => {

    element.addEventListener('click', (e) => { //()=> veut dire fonction nouvelle écriture en javascript
        let vumain = this.PannerNode.querySelector(".visible");
        vumain.classList.remove("vu");
        vumain.classList.add("show"); //show class déclarée en css // toggle appelle ou enlève au clic donc ici l'image apparait ou disparait
    })

});
btn.forEach(element => {
      element.addEventListener('click', (e) => { //()=> veut dire fonction nouvelle écriture en javascript
          let vumain = e.target.parentNode.parentNode.querySelector(".visible");
          if(vumain.classList.contains("vu")) {
              vumain.classList.remove("vu");
              vumain.classList.add("show"); //show class déclarée en css // toggle appelle ou enlève au clic donc ici l'image apparait ou disparait
          } else {
              vumain.classList.remove("show");
              vumain.classList.add("vu"); //show class déclarée en css // toggle appelle ou enlève au clic donc ici l'image apparait ou disparait
          }
      })
  });
/*GLISSER DEPOSER*/
var deplacable = document.getElementById("depart");
var deplacable1 = document.getElementById("depart1");
var deplacable2 = document.getElementById("depart2");
var deplacable3 = document.getElementById("depart3");
var deplacable4 = document.getElementById("depart4");
var depot = document.getElementById("arrivee");


deplacable.addEventListener('dragstart', function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
});
deplacable1.addEventListener('dragstart', function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
});
deplacable2.addEventListener('dragstart', function(ev){
    ev.dataTransfer.setData("text", ev.target.id);
});
deplacable3.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});
deplacable4.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
});


depot.addEventListener('drop', function(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
});
depot.addEventListener('dragover', function(ev){
    ev.preventDefault();
});

/*****************onglets ********************************************* */
$(document).ready(function() {
	$( "#onglets" ).tabs();
});




const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => { // e pour event
    // console.log(event);
    /*horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;*/
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";//permet de bouger de gauche à droite
    // mouseEvent.style.top = e.y / window.innerHeight * 100 + "%";// permet de bouger de haut en bas

    if (e.x > 1600) {
        document.body.style.filter = "blur(10px)"; // pour flouter dès que cela dépasse 500px
    } else {
        document.body.style.filter = "none"; // pas de floutage en dessous
    }
});






/**********************************************************************************************************/


function menu(){
  document.getElementById('menu').style.opacity = "0";
  document.getElementById('menu').style.transition = "250ms";
  document.getElementById('menu1').style.opacity = "1";
  document.getElementById('menu1').style.transition = "250ms";
  document.getElementById('nav').style.left = "50%";
  document.getElementById('nav').style.transform = "translate(-50%, -50%)";
}
function menu1(){
    document.getElementById('menu').style.opacity = "1";
    document.getElementById('menu').style.transition = "250ms";
    document.getElementById('menu1').style.opacity = "0";
    document.getElementById('menu1').style.transition = "250ms";
    document.getElementById('nav').style.left = "-800px";
    document.getElementById('nav').style.transform = "translate(0%, 0%)";
}

var pause = 0;

function play(){
  if(pause==0){
    document.getElementById('destination').style.cursor = "url(/images/pause.svg), e-resize";
    pause=1;
  }else{
    document.getElementById('destination').style.cursor = "url(/images/play.svg), e-resize";
    pause=0;
  }

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scroll_to_top").style.opacity = "1";
    document.getElementById("scroll_to_top").style.zIndex = "50";
    document.getElementById("scroll_to_top").style.transform = "500ms";
  } else {
    document.getElementById("scroll_to_top").style.opacity = "0";
    document.getElementById("scroll_to_top").style.zIndex = "-50";
    document.getElementById("scroll_to_top").style.transform = "500ms";
  }
};
window.addEventListener('load',horloge);
      function horloge(){
        let d = new Date();
        document.getElementById('heure').innerHTML = d.toLocaleTimeString();
        setTimeout(horloge, 1000);
}

function openModal(){    
        document.getElementById('overlay').style.opacity = "1";
        document.getElementById('popup').style.opacity = "1";
        document.getElementById('overlay').style.zIndex = "102";
        document.getElementById('popup').style.zIndex = "110";
        document.getElementById('overlay').style.transition = "500ms";
        document.getElementById('popup').style.transition = "500ms";                         
    }
let idpopup = -1;
    function openModal1(e){    
      let idd = e.target.id;
      idpopup = idd;
      console.log(idd);
      let combattant = combattants[indexCombattant(parseInt(idd))];
      console.log(combattant);
      document.getElementById('prenompopup').value = combattant.prenom;
      document.getElementById('nompopup').value = combattant.nom;
      document.getElementById('clubpopup').value = combattant.club;
      document.getElementById('nationalitepopup').value = combattant.Nationalité;
      document.getElementById('palmarespopup').value = combattant.Palmarès;
      document.getElementById('nbrepopup').value = combattant.Nbre;
      document.getElementById('agepopup').value = combattant.age;
      document.getElementById('taillepopup').value = combattant.taille;
      document.getElementById('poidspopup').value = combattant.poids;

      document.getElementById('overlay').style.opacity = "1";
      document.getElementById('popup1').style.opacity = "1";
      document.getElementById('overlay').style.zIndex = "102";
      document.getElementById('popup1').style.zIndex = "110";
      document.getElementById('overlay').style.transition = "500ms";
      document.getElementById('popup1').style.transition = "500ms";                         
  }
  function closeAvecOverlay(){
    document.getElementById('overlay').style.opacity = "0";
    document.getElementById('popup').style.opacity = "0";
    document.getElementById('popup1').style.opacity = "0";
    document.getElementById('popup2').style.opacity = "0";
    document.getElementById('overlay').style.zIndex = "-1";
    document.getElementById('popup').style.zIndex = "-2";
    document.getElementById('popup1').style.zIndex = "-2";
    document.getElementById('popup2').style.zIndex = "-2";
    document.getElementById('overlay').style.transition = "500ms";
    document.getElementById('popup').style.transition = "500ms";
    document.getElementById('popup1').style.transition = "500ms";
    document.getElementById('popup2').style.transition = "500ms";
}

function save(e){
  combattants[indexCombattant(parseInt(idpopup))].nom = document.getElementById('nompopup').value;
  combattants[indexCombattant(parseInt(idpopup))].prenom = document.getElementById('prenompopup').value;
  combattants[indexCombattant(parseInt(idpopup))].club = document.getElementById('clubpopup').value;
  combattants[indexCombattant(parseInt(idpopup))].Nationalité = document.getElementById('nationalitepopup').value;
  combattants[indexCombattant(parseInt(idpopup))].Palmarès = document.getElementById('palmarespopup').value;
  combattants[indexCombattant(parseInt(idpopup))].Nbre = document.getElementById('nbrepopup').value;
  combattants[indexCombattant(parseInt(idpopup))].age = document.getElementById('agepopup').value;
  combattants[indexCombattant(parseInt(idpopup))].taille = document.getElementById('taillepopup').value;
  combattants[indexCombattant(parseInt(idpopup))].poids = document.getElementById('poidspopup').value;


  let combattant1 = combattants[indexCombattant(parseInt(idpopup))];
      document.getElementById('prenom' + idpopup).innerHTML= combattant1.prenom;
      document.getElementById('nom' + idpopup).innerHTML=combattant1.nom;
      document.getElementById('club' + idpopup).innerHTML=combattant1.club;
      document.getElementById('nationalité' + idpopup).innerHTML=combattant1.Nationalité;
      document.getElementById('palmarès' + idpopup).innerHTML=combattant1.Palmarès;
      document.getElementById('Nbre' + idpopup).innerHTML = combattant1.Nbre;
      document.getElementById('age' + idpopup).innerHTML =combattant1.age;
      document.getElementById('taille' + idpopup).innerHTML = combattant1.taille;
      document.getElementById('poids' + idpopup).innerHTML = combattant1.poids;

      localStorageSave();

  document.getElementById('overlay').style.opacity = "0";
  document.getElementById('popup1').style.opacity = "0";
  document.getElementById('overlay').style.zIndex = "-2";
  document.getElementById('popup1').style.zIndex = "-2";
  document.getElementById('overlay').style.transition = "500ms";
  document.getElementById('popup1').style.transition = "500ms";  

}

let idpopup2 = -1;
    function openModal2(e){    
      let id = e.target.id;
      idpopup2 = id;
      console.log(id);
      let histoiree = histoires[indexhistoire(parseInt(id))];
      console.log(histoiree);
      document.getElementById('textpopup').value = histoiree.texte;
      document.getElementById('titrepopup').value = histoiree.titre;

      document.getElementById('overlay').style.opacity = "1";
      document.getElementById('popup2').style.opacity = "1";
      document.getElementById('overlay').style.zIndex = "102";
      document.getElementById('popup2').style.zIndex = "110";
      document.getElementById('overlay').style.transition = "500ms";
      document.getElementById('popup2').style.transition = "500ms";     
      
  }

  function save1(e){
    histoires[indexhistoire(parseInt(idpopup2))].texte = document.getElementById('textpopup').value;
    histoires[indexhistoire(parseInt(idpopup2))].titre = document.getElementById('titrepopup').value;

  
  
    let histoire1 = histoires[indexhistoire(parseInt(idpopup2))];
        document.getElementById('t' + idpopup2).innerHTML= histoire1.texte;
        document.getElementById('r' + idpopup2).innerHTML= histoire1.titre;
        document.getElementById('t' + idpopup2).style.display = "none";
        localStorageSave2();
  
    document.getElementById('overlay').style.opacity = "0";
    document.getElementById('popup2').style.opacity = "0";
    document.getElementById('overlay').style.zIndex = "-2";
    document.getElementById('popup2').style.zIndex = "-2";
    document.getElementById('overlay').style.transition = "500ms";
    document.getElementById('popup2').style.transition = "500ms";  

    $(document).ready(function() {
      $( "#onglets" ).tabs();
    });
  
  }

function BasculerVersListe(listeSource, listeDestination){
  for(i = 0; i < listeSource.length; i++){
    if (listeSource.options[i].selected){
      //on recupere le texte de l'élément sélectionné
      elementSelectionne = listeSource.options[i].text;
      //on recupère le nb d'éléments dans la liste destinataire pour positionner le nouvel élément à cet emplacement
      nbElementsListeDestinataire = listeDestination.length;
      //on insère le nouvel l'élément dans la liste destinataire
      listeDestination.options[nbElementsListeDestinataire] = new Option(elementSelectionne);
      //on supprime l'élément dans la liste source
      listeSource.options[i] = null;
    }
  }
}
window.onload = () => {
  let filters = document.querySelectorAll("#filters div");

  for(let filter of filters){
      filter.addEventListener("click", function(){
          let tag = this.id;

          let images = document.querySelectorAll("#gallery img");

          for(let image of images){
              image.classList.replace("active", "inactive");

              if(tag in image.dataset || tag === "all"){
                  image.classList.replace("inactive", "active");
              }
          }
      });
  }
}

function chgt_background1() {
  document.getElementById("all").style.backgroundColor = "rgb(192,117,31)";
  document.getElementById("75_kgs").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("80_kgs").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("84_kgs").style.backgroundColor = "rgb(0,0,0)";
}

function chgt_background2() {
  document.getElementById("all").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("75_kgs").style.backgroundColor ="rgb(192,117,31)";
  document.getElementById("80_kgs").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("84_kgs").style.backgroundColor = "rgb(0,0,0)";
}
function chgt_background3() {
  document.getElementById("all").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("75_kgs").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("80_kgs").style.backgroundColor = "rgb(192,117,31)";
  document.getElementById("84_kgs").style.backgroundColor = "rgb(0,0,0)";
}
function chgt_background4() {
  document.getElementById("all").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("75_kgs").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("80_kgs").style.backgroundColor = "rgb(0,0,0)";
  document.getElementById("84_kgs").style.backgroundColor = "rgb(192,117,31)";
}
/***************modal  ***********************************************/

var boxeur1 = document.getElementById('boxeur_1');
    var btn_affiche = document.getElementById('caracteristiques');
    var btn_fermeture = document.getElementById('fermeture');
    btn_affiche.onclick = function() {
      boxeur1.showModal();
    }
    btn_fermeture.onclick = function() {
      boxeur1.close();
    }

/***************************Search barre ********************************/

const searchBar = document.getElementById('barreSearch');

searchBar.addEventListener('keyup', (e) => {
    const searchedLetters = e.target.value;
    const cards = document.querySelectorAll('.combat_3');
    filterElements(searchedLetters, cards);
})

    function filterElements(letters, elements){
        for(let i=0; i<elements.length; i++){
        if(elements[i].textContent.toLowerCase().includes(letters)) {
            elements[i].style.display = "block";
        } else {
            elements[i].style.display = "none";
        } 
    }
    }


function ajout(){
document.getElementById('onglets').innerHTML += '<div id="onglet-' + idOnglet +'"><p id="t' + idOnglet +'"></p></div>';
document.getElementById('onglet_ul').innerHTML += '<li><button class="bouton_onglet"><a id="r'+ idOnglet +'" href="#onglet-'+ idOnglet +'"><button id="'+ idOnglet +'" onclick=\'openModal2(event)\'>Modifier</button></a></button></li>';
var titre = {id: idOnglet, titre: "", texte: ""};

idOnglet++;
histoires.push(titre);
$(document).ready(function() {
	$( "#onglets" ).tabs();
});
}