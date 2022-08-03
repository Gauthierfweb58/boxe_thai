let liste_defilement = document.getElementsByClassName("carrousel1");

let renoveDefilement = false;
let valeurDeDepart = 0;
let listBouton = [];

async function creation_bouton_defilement(carrousel) {
        let new_button;
        let new_flex = document.createElement("div");
        new_flex.id = "carrousel_animation_principale";
        new_flex.style.display = "flex";
        new_flex.style.justifyContent = "center";
        new_flex.style.padding = "5px 10%";
        new_flex.style.flexWrap = "wrap";
        let depot = document.getElementById("img_factice");
        depot.insertAdjacentElement("afterend", new_flex);
        for (let i = carrousel.length - 1; i >= 0; i--) {
            new_button = document.createElement("div");
            new_button.className = "bouton";
            new_button.style.width = "40px";
            new_button.style.height = "40px";
            new_button.style.border = "1px solid black";
            new_button.style.borderRadius = "50%"
            new_button.style.backgroundColor = "lightgrey";
            new_button.style.margin = "5px";
            new_button.onclick = async function () {
                valeurDeDepart = i;
                renoveDefilement = true;
                while (screen.width < 1024 || window.innerWidth < 1024){
                    await defilement_recursive(carrousel,valeurDeDepart);
                }
            };
            carrousel[i].addEventListener('animationiteration', function () {
                carrousel[i].style.animationPlayState = "paused";
                new_button.style.backgroundColor = "lightgrey";
            });
            listBouton.unshift(new_button);
            new_flex.insertAdjacentElement("afterbegin", new_button);
        }

        while (screen.width < 1024 || window.innerWidth < 1024){
            await defilement_recursive(carrousel,valeurDeDepart);
        }
    }

async function defilement_recursive(carrousel, i) {
    for (j = 0; j < carrousel.length; j++) {    
        carrousel[j].style.animationName = null;
    }   
    do {
        if(renoveDefilement) { 
            renoveDefilement=false;
            i = valeurDeDepart;
        }
        for (j = 0; j < carrousel.length; j++) {
            if(i != j) {
                listBouton[j].style.backgroundColor = "lightgrey";
            }
        }
        i = i >= carrousel.length ? 0 : i;
        carrousel[i].style.animationDuration = "6s";
        carrousel[i].style.animationPlayState = "running";
        carrousel[i].style.animationName = "defilement";
        carrousel[i].style.opacity = 1;
        listBouton[i].style.backgroundColor = "green";
        let attente = new Promise((successCallback, failureCallback) => {
            carrousel[i].addEventListener('animationiteration', function () {
                for (j = 0; j < carrousel.length; j++) { 
                    if(i != j) {
                        carrousel[j].style.animationName = null;
                        carrousel[j].style.opacity = 0;
                        listBouton[j].style.backgroundColor = "lightgrey";
                    }
                }
                successCallback("en lecture");
                i++;
            })
        });
        await attente;
    } while (i < carrousel.length && !renoveDefilement && screen.width < 1024 || window.innerWidth < 1024);
    return (i == carrousel.length);
}

creation_bouton_defilement(liste_defilement);