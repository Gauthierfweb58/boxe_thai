
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
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";//permet de bouger de gauche à droite
    // mouseEvent.style.top = e.y / window.innerHeight * 100 + "%";// permet de bouger de haut en bas

    if (e.x > 1200) {
        document.body.style.filter = "blur(5px)"; // pour flouter dès que cela dépasse 500px
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
}
$(document).ready( function () {
                
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  var cursorCanvas= document.getElementById('cursor-canvas');
  var ctx_cc = cursorCanvas.getContext('2d');
  
  //Une fois la page bien ready
  //l'image de fond est chargée dans un objet Image
  var img1 = new Image();
  img1.src = './images/CELIA SARRAUTE.jpeg';

  img1.onload = function(){
      //L'image dessinée dans le canvas du fond
      ctx.drawImage(img1,0, 0, 150, 300);
  };
  
  //Le filtre qui floute l'image du fond est appliquée sur le 
  //canvas du fond
  ctx.filter = 'blur(5px)';

  //Lorsque le curseur se promène sur l'image
  //l'image suit le curseur
  $("#canvas").on("mousemove", function (event) {
      var x=event.pageX;
      var y=event.pageY;
      $("#curseur").css("left",event.pageX);
      $("#curseur").css("top",event.pageY);
      
//L'astuce pour afficher l'image en clair
//est dans cette seule ligne:
//img1 c'est l'image sans aucun effet de flou (le flou est appliqué au canvas)
//Les 4 premiers paramètres de cette fonction précise la portion de l'image
//que l'on veut afficher en l'occurrence on veut afficher ce qui ce trouve au
//niveau du curseur : x et y sont les coordonnées du curseur, 50x50 c'est la taille
// de la zone que l'on veut afficher!
//Les 4 derniers paramètres sont l'emplacement et la taille de l'image dans
//le canvas lui même ...
      if (img1 != undefined) {
      ctx_cc.drawImage(img1, x, y, 50, 50, 0, 0, 150, 150);
  }
  });

});



