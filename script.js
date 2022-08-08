var combattant1 = { prenom: "JASON", nom: "QUITUSISA", age: '22 ans', taille: '180 cms', club: 'KERNER TEAM', Nationnalité: 'Français', Palmarès: '15 combats', Nbre: '12 V 0 N 3 D 4 KO', poids: '78 kgs - 80 kgs' };
var combattant2 = { prenom: "KARIM", nom: "OUNISSI", age: '24 ans', taille: '172 cms', club: 'Badri ROUABHIA', Nationnalité: 'Français', Palmarès: '39 combats', Nbre: '34 V 1 N 4 D 11 KO', poids: '78 kgs - 80 kgs' };
var combattant3 = { prenom: "ARISTOTE", nom: "QUITUS", age: '26 ans', taille:'178 cms', club: 'Les 7 samourais', Nationnalité: 'Français', Palmarès: '17 combats', Nbre: '14 V 0 N 3 D 4 KO', poids: '82 kgs - 84 kgs' };
var combattant4 = { prenom: "SYLLA", nom: "DEMBA", age: '27 ans', taille: '184 cms', club: 'BOXING SCHOOL', Nationnalité: 'Français', Palmarès: '21 combats', Nbre: '12 V 3 N 6 D 2 KO', poids: '82 kgs - 84 kgs' };
var combattant5 = { prenom: "MAMADOU", nom: "KONAT", age: '31 ans', taille: '181 cms', club: 'KERNER TEAM', Nationnalité: 'Français', Palmarès: '15 combats', Nbre: '12 V 0 N 3 D 1 KO', poids: '73 kgs - 76 kgs' };
var combattant6 = { prenom: "DRIS", nom: "MAKALOU", age: '32 ans', taille: '176 cms', club: 'Badri ROUABHIA', Nationnalité: 'Français', Palmarès: '28 combats', Nbre: '20 V 4 N 4 D 8 KO', poids: '78 kgs - 80 kgs' };
var combattant7 = { prenom: "SAMHIR", nom: "CRAUSER", age: '24 ans', taille:'191 cms', club: 'KERNER TEAM', Nationnalité: 'Français', Palmarès: '19 combats', Nbre: '12 V 3 N 4 D 6 KO', poids: '84 kgs - 87 kgs' };
var combattant8 = { prenom: "AMEL", nom: "DEHBY", age: '26 ans', taille:'187 cms', club: 'ZEITOUN', Nationnalité: 'Français', Palmarès: '32 combats', Nbre: '27 V 3 N 2 D 9 KO', poids: '84 kgs - 87 kgs' };

localStorage.setItem('user1', JSON.stringify(combattant1));
localStorage.setItem('user2', JSON.stringify(combattant2));
localStorage.setItem('user3', JSON.stringify(combattant3));
localStorage.setItem('user4', JSON.stringify(combattant4));
localStorage.setItem('user5', JSON.stringify(combattant5));
localStorage.setItem('user6', JSON.stringify(combattant6));
localStorage.setItem('user7', JSON.stringify(combattant7));
localStorage.setItem('user8', JSON.stringify(combattant8));

combattant1 = JSON.parse(localStorage.getItem('user1')) || [];
combattant2 = JSON.parse(localStorage.getItem('user2')) || [];
combattant3 = JSON.parse(localStorage.getItem('user3')) || [];
combattant4 = JSON.parse(localStorage.getItem('user4')) || [];
combattant5 = JSON.parse(localStorage.getItem('user5')) || [];
combattant6 = JSON.parse(localStorage.getItem('user6')) || [];
combattant7 = JSON.parse(localStorage.getItem('user7')) || [];
combattant8 = JSON.parse(localStorage.getItem('user8')) || [];


document.getElementById('prenom1').innerHTML= combattant1.prenom;
document.getElementById('nom1').innerHTML=combattant1.nom;
document.getElementById('club1').innerHTML=combattant1.club;
document.getElementById('nationalité1').innerHTML=combattant1.Nationnalité;
document.getElementById('palmarès1').innerHTML=combattant1.Palmarès;
document.getElementById('Nbre1').innerHTML = combattant1.Nbre;
document.getElementById('age1').innerHTML =combattant1.age;
document.getElementById('taille1').innerHTML = combattant1.taille;
document.getElementById('poids1').innerHTML = combattant1.poids;

document.getElementById('prenom2').innerHTML= combattant2.prenom;
document.getElementById('nom2').innerHTML=combattant2.nom;
document.getElementById('club2').innerHTML=combattant2.club;
document.getElementById('nationalité2').innerHTML=combattant2.Nationnalité;
document.getElementById('palmarès2').innerHTML=combattant2.Palmarès;
document.getElementById('Nbre2').innerHTML = combattant2.Nbre;
document.getElementById('age2').innerHTML =combattant2.age;
document.getElementById('taille2').innerHTML = combattant2.taille;
document.getElementById('poids2').innerHTML = combattant2.poids;

document.getElementById('prenom3').innerHTML= combattant3.prenom;
document.getElementById('nom3').innerHTML=combattant3.nom;
document.getElementById('club3').innerHTML=combattant3.club;
document.getElementById('nationalité3').innerHTML=combattant3.Nationnalité;
document.getElementById('palmarès3').innerHTML=combattant3.Palmarès;
document.getElementById('Nbre3').innerHTML = combattant3.Nbre;
document.getElementById('age3').innerHTML =combattant3.age;
document.getElementById('taille3').innerHTML = combattant3.taille;
document.getElementById('poids3').innerHTML = combattant3.poids;

document.getElementById('prenom4').innerHTML= combattant4.prenom;
document.getElementById('nom4').innerHTML=combattant4.nom;
document.getElementById('club4').innerHTML=combattant4.club;
document.getElementById('nationalité4').innerHTML=combattant4.Nationnalité;
document.getElementById('palmarès4').innerHTML=combattant4.Palmarès;
document.getElementById('Nbre4').innerHTML = combattant4.Nbre;
document.getElementById('age4').innerHTML =combattant4.age;
document.getElementById('taille4').innerHTML = combattant4.taille;
document.getElementById('poids4').innerHTML = combattant4.poids;

document.getElementById('prenom5').innerHTML= combattant5.prenom;
document.getElementById('nom5').innerHTML=combattant5.nom;
document.getElementById('club5').innerHTML=combattant5.club;
document.getElementById('nationalité5').innerHTML=combattant5.Nationnalité;
document.getElementById('palmarès5').innerHTML=combattant5.Palmarès;
document.getElementById('Nbre5').innerHTML = combattant5.Nbre;
document.getElementById('age5').innerHTML =combattant5.age;
document.getElementById('taille5').innerHTML = combattant5.taille;
document.getElementById('poids5').innerHTML = combattant5.poids;

document.getElementById('prenom6').innerHTML= combattant6.prenom;
document.getElementById('nom6').innerHTML=combattant6.nom;
document.getElementById('club6').innerHTML=combattant6.club;
document.getElementById('nationalité6').innerHTML=combattant6.Nationnalité;
document.getElementById('palmarès6').innerHTML=combattant6.Palmarès;
document.getElementById('Nbre6').innerHTML = combattant6.Nbre;
document.getElementById('age6').innerHTML =combattant6.age;
document.getElementById('taille6').innerHTML = combattant6.taille;
document.getElementById('poids6').innerHTML = combattant6.poids;

document.getElementById('prenom7').innerHTML= combattant7.prenom;
document.getElementById('nom7').innerHTML=combattant7.nom;
document.getElementById('club7').innerHTML=combattant7.club;
document.getElementById('nationalité7').innerHTML=combattant7.Nationnalité;
document.getElementById('palmarès7').innerHTML=combattant7.Palmarès;
document.getElementById('Nbre7').innerHTML = combattant7.Nbre;
document.getElementById('age7').innerHTML =combattant7.age;
document.getElementById('taille7').innerHTML = combattant7.taille;
document.getElementById('poids7').innerHTML = combattant7.poids;

document.getElementById('prenom8').innerHTML= combattant8.prenom;
document.getElementById('nom8').innerHTML=combattant8.nom;
document.getElementById('club8').innerHTML=combattant8.club;
document.getElementById('nationalité8').innerHTML=combattant8.Nationnalité;
document.getElementById('palmarès8').innerHTML=combattant8.Palmarès;
document.getElementById('Nbre8').innerHTML = combattant8.Nbre;
document.getElementById('age8').innerHTML =combattant8.age;
document.getElementById('taille8').innerHTML = combattant8.taille;
document.getElementById('poids8').innerHTML = combattant8.poids;


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

    function closeAvecOverlay(){
        document.getElementById('overlay').style.opacity = "0";
        document.getElementById('popup').style.opacity = "0";
        document.getElementById('overlay').style.zIndex = "-1";
        document.getElementById('popup').style.zIndex = "-2";
        document.getElementById('overlay').style.transition = "500ms";
        document.getElementById('popup').style.transition = "500ms";
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

