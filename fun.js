var johnny = document.querySelector(".perso1");
var soldat = document.querySelector(".perso2");
var ninja = document.querySelector(".perso3");
var pegu = document.querySelector(".perso4");
var zombie = document.querySelector(".M1");
var chaos = document.querySelector(".M2");
var pv = ["100", "100", "100", "100"];

var squelette = document.querySelector(".M3");
var johnnyImg = document.querySelector(".J1");
var soldatImg = document.querySelector(".J2");
var ninjaImg = document.querySelector(".J3");
var peguImg = document.querySelector(".J4");

var divJ = document.createElement("div");
var divM = document.createElement("div");

var attaque = document.querySelector("#attaque");
var defense = document.querySelector("#defense");
var special = document.querySelector("#special");

var ready = 0
var johnnyChoix = false;
var soldatChoix = false;
var ninjaChoix = false;
var peguChoix = false;
var johnnyChoixPossible = true;
var soldatChoixPossible = true;
var ninjaChoixPossible = true;
var peguChoixPossible = true;
var ninjaAction = "";
var soldatAction = "";
var peguAction = "";
var johnnyAction = "";

var zombieChoix = 0;
var squeletteChoix = 0;
var chaosChoix = 0;

//héro over :
peguImg.addEventListener("mouseover",function(){
    pegu.style.backgroundColor = "red";
})
peguImg.addEventListener("mouseout",function(){
    pegu.style.backgroundColor = "";
})
johnnyImg.addEventListener("mouseover",function(){
    johnny.style.backgroundColor = "red";
})
johnnyImg.addEventListener("mouseout",function(){
    johnny.style.backgroundColor = "";
})
ninjaImg.addEventListener("mouseover",function(){
    ninja.style.backgroundColor = "red";
})
ninjaImg.addEventListener("mouseout",function(){
    ninja.style.backgroundColor = "";
})
soldatImg.addEventListener("mouseover",function(){
    soldat.style.backgroundColor = "red";
})
soldatImg.addEventListener("mouseout",function(){
    soldat.style.backgroundColor = "";
})

//monstres over :
zombie.addEventListener("mouseover",function(){
    this.style.backgroundColor = "red";
})
zombie.addEventListener("mouseout",function(){
    this.style.backgroundColor = "";
})
squelette.addEventListener("mouseover",function(){
    this.style.backgroundColor = "red";
})
squelette.addEventListener("mouseout",function(){
    this.style.backgroundColor = "";
})
chaos.addEventListener("mouseover",function(){
    this.style.backgroundColor = "red";
})
chaos.addEventListener("mouseout",function(){
    this.style.backgroundColor = "";
})

function choixHeros(){
    peguImg.addEventListener("click",function(){
        if (peguChoixPossible == true){
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            } 
            var newSelec = pegu.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            soldatChoix = true;
            ninjaChoix = false;
            peguChoix = true;
            johnnyChoix = false;
        }
    })
    johnnyImg.addEventListener("click",function(){
        if (johnnyChoixPossible == true){
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            } 
            var newSelec = johnny.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            soldatChoix = true;
            ninjaChoix = false;
            peguChoix = false;
            johnnyChoix = true;
        }
    })
    ninjaImg.addEventListener("click",function(){
        if (ninjaChoixPossible == true){
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            } 
            var newSelec = ninja.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            soldatChoix = true;
            ninjaChoix = true;
            peguChoix = false;
            johnnyChoix = false;
        }
    })
    soldatImg.addEventListener("click",function(){
        if (soldatChoixPossible == true){
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            } 
            var newSelec = soldat.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            soldatChoix = true;
            ninjaChoix = false;
            peguChoix = false;
            johnnyChoix = false;
        }
    })
}
function choixMonstre(){
    zombie.addEventListener("click",function(){
        if (document.contains(document.querySelector(".selectionMonstre"))) {
            document.querySelector(".selectionMonstre").remove();
        } 
        var Selec = zombie.appendChild(divM);
        Selec.classList.add("selectionMonstre");
        divM.innerHTML = "<p> < </p>";
        Selec.style.color = "white";
        Selec.style.fontSize = "25px";
        Selec.style.font = "bold";
    })
    chaos.addEventListener("click",function(){
        if (document.contains(document.querySelector(".selectionMonstre"))) {
            document.querySelector(".selectionMonstre").remove();
        } 
        var Selec = chaos.appendChild(divM);
        Selec.classList.add("selectionMonstre");
        divM.innerHTML = "<p> < </p>";
        Selec.style.color = "white";
        Selec.style.fontSize = "25px";
        Selec.style.font = "bold";
    })
    squelette.addEventListener("click",function(){
        if (document.contains(document.querySelector(".selectionMonstre"))) {
            document.querySelector(".selectionMonstre").remove();
        } 
        var Selec = squelette.appendChild(divM);
        Selec.classList.add("selectionMonstre");
        divM.innerHTML = "<p> < </p>";
        Selec.style.color = "white";
        Selec.style.fontSize = "25px";
        Selec.style.font = "bold";
    })
}
function choixAction(){
    attaque.addEventListener("click",function(){
        if (document.contains(document.querySelector(".selectionMonstre")) && document.contains(document.querySelector(".selectionHero")) && (peguChoix == true || soldatChoix == true || ninjaChoix == true || johnnyChoix == true)) {
            ready++;
            document.querySelector(".selectionMonstre").remove();
            document.querySelector(".selectionHero").remove();
            if(peguChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == true){
                peguChoix = false;
                peguChoixPossible = false;
                peguAction = "attaque";
                actionMonstre(pv);
            }
            else if(ninjaChoix == true && soldatChoixPossible == false && ninjaChoixPossible == true && johnnyChoixPossible == false && peguChoixPossible == false){
                ninjaChoix = false;
                ninjaChoixPossible = false;
                ninjaAction = "attaque";
                actionMonstre(pv);
            }
            else if(johnnyChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == true && peguChoixPossible == false){
                johnnyChoix = false;
                johnnyChoixPossible = false;
                johnnyAction = "attaque";
                actionMonstre(pv);
            }
            else if(soldatChoix == true && soldatChoixPossible == true && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == false){
                soldatChoix = false;
                soldatChoixPossible = false;
                soldatAction = "attaque";
                actionMonstre(pv);
            }
            else if(peguChoix == true){
                peguChoix = false;
                peguChoixPossible = false;
                peguAction = "attaque";
            }
            else if(ninjaChoix == true){
                ninjaChoix = false;
                ninjaChoixPossible = false;
                ninjaAction = "attaque";
            }
            else if(johnnyChoix == true){
                johnnyChoix = false;
                johnnyChoixPossible = false;
                johnnyAction = "attaque";
            }
            else if(soldatChoix == true){
                soldatChoix = false;
                soldatChoixPossible = false;
                soldatAction = "attaque";
            }
        }
    })
    defense.addEventListener("click",function(){
        if (document.contains(document.querySelector(".selectionMonstre")) && document.contains(document.querySelector(".selectionHero")) && (peguChoix == true || soldatChoix == true || ninjaChoix == true || johnnyChoix == true)) {
            ready++;
            document.querySelector(".selectionMonstre").remove();
            document.querySelector(".selectionHero").remove();
            if(peguChoix == true){
                peguChoix = false;
                peguChoixPossible = false;
                peguAction = "defense";
            }
            else if(ninjaChoix == true){
                ninjaChoix = false;
                ninjaChoixPossible = false;
                ninjaAction = "defense";
            }
            else if(johnnyChoix == true){
                johnnyChoix = false;
                johnnyChoixPossible = false;
                johnnyAction = "defense";
            }
            else if(soldatChoix == true){
                soldatChoix = false;
                soldatChoixPossible = false;
                soldatAction = "defense";
            }
        }
    })
    special.addEventListener("click",function(){
        if (document.contains(document.querySelector(".selectionMonstre")) && document.contains(document.querySelector(".selectionHero")) && (peguChoix == true || soldatChoix == true || ninjaChoix == true || johnnyChoix == true)) {
            ready++;
            document.querySelector(".selectionMonstre").remove();
            document.querySelector(".selectionHero").remove();
            if(peguChoix == true){
                peguChoix = false;
                peguChoixPossible = false;
                peguAction = "special";
            }
            else if(ninjaChoix == true){
                ninjaChoix = false;
                ninjaChoixPossible = false;
                ninjaAction = "special";
            }
            else if(johnnyChoix == true){
                johnnyChoix = false;
                johnnyChoixPossible = false;
                johhnyAction = "special";
            }
            else if(soldatChoix == true){
                soldatChoix = false;
                soldatChoixPossible = false;
                soldatAction = "special";
            }
        }
    })
}
function actionMonstre(pv){
    zombieChoix = Math.round(Math.random()*3);
    chaosChoix = Math.round(Math.random()*3);
    squeletteChoix = Math.round(Math.random()*3);
    var personnages = ["#PVP1","#PVP2","#PVP3","#PVP4"];
    if(pv[0] > 0 || pv[1] > 0 || pv[2] > 0 || pv[3] > 0){
        pv[zombieChoix] = pv[zombieChoix] - 10;
        test = document.querySelector(personnages[zombieChoix]);
        test.innerHTML = "Pv : " + pv[zombieChoix];
        pv[chaosChoix] = pv[chaosChoix] - 25;
        test = document.querySelector(personnages[chaosChoix]);
        test.innerHTML = "Pv : " + pv[chaosChoix];
        pv[squeletteChoix] = pv[squeletteChoix] - 15;
        test = document.querySelector(personnages[squeletteChoix]);
        test.innerHTML = "Pv : " + pv[squeletteChoix];
        soldatChoixPossible = true;
        johnnyChoixPossible = true;
        ninjaChoixPossible = true;
        peguChoixPossible = true;
    }
}

choixHeros();
choixMonstre();
choixAction();

if (peguChoixPossible == false && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == false){
    actionMonstre();
}

var test = document.querySelector(".dialogue");
test.addEventListener("click", function(){
    actionMonstre(pv);
});
