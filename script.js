
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

