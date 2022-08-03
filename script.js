/*function bulleDisparition(){
    if(window.innerWidth<=920 && document.getElementById("Checkbox").checked == true){
}else {
    document.getElementById('menu').style.rotate = "90";
    document.getElementById('menu').style.transition = "250ms";
}
}*/
/*var btn = document.getElementById('blurBtn');
var img = document.getElementById('blurImg');

btn.addEventListener('click', addBlur)

function addBlur() {
  img.style.filter = 'blur(20px)';
}
// Get the modal
/*var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');
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
}*/
const btn = document.querySelector('.btn')
const vu = document.getElementsByClassName('vu')

btn.addEventListener('click', () => { //()=> veut dire fonction nouvelle écriture en javascript
    vu.classList.toggle("show") //show class déclarée en css // toggle appelle ou enlève au clic donc ici l'image apparait ou disparait
})

  

