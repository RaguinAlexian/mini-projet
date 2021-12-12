var johnny = document.querySelector(".perso1");
var soldat = document.querySelector(".perso2");
var ninja = document.querySelector(".perso3");
var pegu = document.querySelector(".perso4");

var pvM = ["75", "200", "100"];
var ennemis = ["#PVM1", "#PVM2", "#PVM3"];

var zombie = document.querySelector(".M1");
var chaos = document.querySelector(".M2");
var squelette = document.querySelector(".M3");

var pv = [100, 100, 100, 100];
var mana = [100, 100, 100, 100];

var johnnyImg = document.querySelector(".J1");
var soldatImg = document.querySelector(".J2");
var ninjaImg = document.querySelector(".J3");
var peguImg = document.querySelector(".J4");

var personnages = ["#PVP1", "#PVP2", "#PVP3", "#PVP4"];
var personnagesMana = ["#PMP1", "#PMP2", "#PMP3", "#PMP4"];
var spriteM = [zombie, chaos, squelette];
var sprite = [johnnyImg, soldatImg, ninjaImg, peguImg];

var divJ = document.createElement("div");
var divM = document.createElement("div");

var attaque = document.querySelector("#attaque");
var defense = document.querySelector("#defense");
var special = document.querySelector("#special");

var infoDialogue = document.querySelector("#texte")

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
peguImg.addEventListener("mouseover", function () {
    pegu.style.backgroundColor = "red";
})
peguImg.addEventListener("mouseout", function () {
    pegu.style.backgroundColor = "";
})
johnnyImg.addEventListener("mouseover", function () {
    johnny.style.backgroundColor = "red";
})
johnnyImg.addEventListener("mouseout", function () {
    johnny.style.backgroundColor = "";
})
ninjaImg.addEventListener("mouseover", function () {
    ninja.style.backgroundColor = "red";
})
ninjaImg.addEventListener("mouseout", function () {
    ninja.style.backgroundColor = "";
})
soldatImg.addEventListener("mouseover", function () {
    soldat.style.backgroundColor = "red";
})
soldatImg.addEventListener("mouseout", function () {
    soldat.style.backgroundColor = "";
})

//monstres over :
zombie.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
})
zombie.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
})
squelette.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
})
squelette.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
})
chaos.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
})
chaos.addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
})

function changeChoiceStyle(actionName) {
    if (actionName == "attaque") {
        attaque.style.backgroundColor = 'grey';
    } else {
        attaque.style.backgroundColor = "";
    }
    if (actionName == "special") {
        special.style.backgroundColor = 'grey';
    } else {
        special.style.backgroundColor = "";
    }
    if (actionName == "defense") {
        defense.style.backgroundColor = 'grey';
    } else {
        defense.style.backgroundColor = "";
    }
}

function choixHeros() {
    peguImg.addEventListener("click", function () {
        if (peguChoixPossible == true) {
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            }
            var newSelec = pegu.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            changeChoiceStyle(peguAction);
            soldatChoix = true;
            ninjaChoix = false;
            peguChoix = true;
            johnnyChoix = false;
        }
    })
    johnnyImg.addEventListener("click", function () {
        if (johnnyChoixPossible == true) {
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            }
            var newSelec = johnny.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            changeChoiceStyle(johnnyAction);
            soldatChoix = true;
            ninjaChoix = false;
            peguChoix = false;
            johnnyChoix = true;
        }
    })
    ninjaImg.addEventListener("click", function () {
        if (ninjaChoixPossible == true) {
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            }
            var newSelec = ninja.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            changeChoiceStyle(ninjaAction);
            soldatChoix = true;
            ninjaChoix = true;
            peguChoix = false;
            johnnyChoix = false;
        }
    })
    soldatImg.addEventListener("click", function () {
        if (soldatChoixPossible == true) {
            if (document.contains(document.querySelector(".selectionHero"))) {
                document.querySelector(".selectionHero").remove();
            }
            var newSelec = soldat.appendChild(divJ);
            newSelec.classList.add("selectionHero");
            divJ.innerHTML = "<p> < </p>";
            newSelec.style.color = "white";
            newSelec.style.fontSize = "20px";
            newSelec.style.font = "bold";
            changeChoiceStyle(soldatAction);
            soldatChoix = true;
            ninjaChoix = false;
            peguChoix = false;
            johnnyChoix = false;
        }
    })
}
function choixMonstre() {
    zombie.addEventListener("click", function () {
        if (document.contains(document.querySelector(".selectionMonstre"))) {
            document.querySelector(".selectionMonstre").remove();
        }
        var Selec = zombie.appendChild(divM);
        Selec.classList.add("selectionMonstre");
        divM.innerHTML = "<p> < </p>";
        Selec.style.color = "white";
        Selec.style.fontSize = "25px";
        Selec.style.font = "bold";
        cible = document.querySelector("#nomM1");
        ciblePV = document.querySelector("#PVM1");
        cibleChiffre = 0;
    })
    chaos.addEventListener("click", function () {
        if (document.contains(document.querySelector(".selectionMonstre"))) {
            document.querySelector(".selectionMonstre").remove();
        }
        var Selec = chaos.appendChild(divM);
        Selec.classList.add("selectionMonstre");
        divM.innerHTML = "<p> < </p>";
        Selec.style.color = "white";
        Selec.style.fontSize = "25px";
        Selec.style.font = "bold";
        cible = document.querySelector("#nomM2");
        ciblePV = document.querySelector("#PVM2");
        cibleChiffre = 1;
    })
    squelette.addEventListener("click", function () {
        if (document.contains(document.querySelector(".selectionMonstre"))) {
            document.querySelector(".selectionMonstre").remove();
        }
        var Selec = squelette.appendChild(divM);
        Selec.classList.add("selectionMonstre");
        divM.innerHTML = "<p> < </p>";
        Selec.style.color = "white";
        Selec.style.fontSize = "25px";
        Selec.style.font = "bold";
        cible = document.querySelector("#nomM3");
        ciblePV = document.querySelector("#PVM3");
        cibleChiffre = 2;
    })
}

function changeLog(text) {
    infoDialogue = document.querySelector("#texte");
    infoDialogue.innerHTML = text
}

function choixAction() {
    infoDialogue = document.querySelector("#texte");
    attaque.addEventListener("click", function () {
        if (pvM[0] > 0 || pvM[1] > 0 || pvM[2] > 0) {
            if (document.contains(document.querySelector(".selectionMonstre")) && document.contains(document.querySelector(".selectionHero")) && (peguChoix == true || soldatChoix == true || ninjaChoix == true || johnnyChoix == true)) {
                document.querySelector(".selectionMonstre").remove();
                document.querySelector(".selectionHero").remove();
                if (peguChoix == true && peguAction == "attaque" && peguChoixPossible == true)
                    return
                if (soldatChoix == true && soldatAction == "attaque" && soldatChoixPossible == true)
                    return
                if (johnnyChoix == true && johnnyAction == "attaque" && johnnyChoixPossible == true)
                    return
                if (ninjaChoix == true && ninjaAction == "attaque" && ninjaChoixPossible == true)
                    return
                if (peguChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == true) {
                    changeLog("Random pégu attaque : " + cible.innerHTML + " Et lui inflige 5 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 5;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(3, 200)
                    setTimeout(function () {
                        peguChoix = false;
                        peguChoixPossible = false;
                        peguAction = "attaque";
                        actionMonstre();
                    }, 3000);
                }
                else if (ninjaChoix == true && soldatChoixPossible == false && ninjaChoixPossible == true && johnnyChoixPossible == false && peguChoixPossible == false) {
                    changeLog("Ninja rouillé attaque : " + cible.innerHTML + " Et lui inflige 20 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 20;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(2, 200)
                    setTimeout(function () {
                        ninjaChoix = false;
                        ninjaChoixPossible = false;
                        ninjaAction = "attaque";
                        actionMonstre();
                    }, 3000);
                }
                else if (johnnyChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == true && peguChoixPossible == false) {
                    changeLog("Johnny la hache attaque : " + cible.innerHTML + " Et lui inflige 10 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 10;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(0, 200)
                    setTimeout(function () {
                        johnnyChoix = false;
                        johnnyChoixPossible = false;
                        johnnyAction = "attaque";
                        actionMonstre();
                    }, 3000);
                }
                else if (soldatChoix == true && soldatChoixPossible == true && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == false) {
                    changeLog("Garde royal attaque : " + cible.innerHTML + " Et lui inflige 15 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 15;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(1, 200)
                    setTimeout(function () {
                        soldatChoix = false;
                        soldatChoixPossible = false;
                        soldatAction = "attaque";
                        actionMonstre();
                    }, 3000);
                }
                else if (peguChoix == true) {
                    changeLog("Random pégu attaque : " + cible.innerHTML + " Et lui inflige 5 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 5;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(3, 200)
                    peguChoix = false;
                    peguChoixPossible = false;
                    peguAction = "attaque";
                }
                else if (ninjaChoix == true) {
                    changeLog("Ninja rouillé attaque : " + cible.innerHTML + " Et lui inflige 20 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 20;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(2, 200)
                    ninjaChoix = false;
                    ninjaChoixPossible = false;
                    ninjaAction = "attaque";
                }
                else if (johnnyChoix == true) {
                    changeLog("Johnny la hache attaque : " + cible.innerHTML + " Et lui inflige 10 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 10;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(0, 200)
                    johnnyChoix = false;
                    johnnyChoixPossible = false;
                    johnnyAction = "attaque";
                }
                else if (soldatChoix == true) {
                    changeLog("Garde royal attaque : " + cible.innerHTML + " Et lui inflige 15 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 15;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    animationAttack(1, 200)
                    soldatChoix = false;
                    soldatChoixPossible = false;
                    soldatAction = "attaque";
                }
            }
        } else {
            changeLog("Félicitations, tu as gagné !");
        }
    })
    defense.addEventListener("click", function () {
        if (document.contains(document.querySelector(".selectionMonstre")) && document.contains(document.querySelector(".selectionHero")) && (peguChoix == true || soldatChoix == true || ninjaChoix == true || johnnyChoix == true)) {
            document.querySelector(".selectionMonstre").remove();
            document.querySelector(".selectionHero").remove();
            if (peguChoix == true && peguAction == "defense" && peguChoixPossible == true)
                return
            if (soldatChoix == true && soldatAction == "defense" && soldatChoixPossible == true)
                return
            if (johnnyChoix == true && johnnyAction == "defense" && johnnyChoixPossible == true)
                return
            if (ninjaChoix == true && ninjaAction == "defense" && ninjaChoixPossible == true)
                return
            if (peguChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == true) {
                changeLog("Random pégu se défend");
                animationDefense(3, 200);
                setTimeout(function () {
                    peguChoix = false;
                    peguChoixPossible = false;
                    peguAction = "defense";
                    actionMonstre();
                }, 3000);
            }
            else if (ninjaChoix == true && soldatChoixPossible == false && ninjaChoixPossible == true && johnnyChoixPossible == false && peguChoixPossible == false) {
                changeLog("Ninja rouillé se défend");
                animationDefense(2, 200);
                setTimeout(function () {
                    ninjaChoix = false;
                    ninjaChoixPossible = false;
                    ninjaAction = "defense";
                    actionMonstre();
                }, 3000);
            }
            else if (johnnyChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == true && peguChoixPossible == false) {
                changeLog("Johnny la hache se défend");
                animationDefense(0, 200);
                setTimeout(function () {
                    johnnyChoix = false;
                    johnnyChoixPossible = false;
                    johnnyAction = "defense";
                    actionMonstre();
                }, 3000);
            }
            else if (soldatChoix == true && soldatChoixPossible == true && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == false) {
                changeLog("Garde royal se défend");
                animationDefense(1, 200);
                setTimeout(function () {
                    soldatChoix = false;
                    soldatChoixPossible = false;
                    soldatAction = "defense";
                    actionMonstre();
                }, 3000);
            }
            else if (peguChoix == true) {
                changeLog("Random pégu se défend");
                animationDefense(3, 200);
                peguChoix = false;
                peguChoixPossible = false;
                peguAction = "defense";
            }
            else if (ninjaChoix == true) {
                changeLog("Ninja rouillé se défend");
                animationDefense(2, 200);
                ninjaChoix = false;
                ninjaChoixPossible = false;
                ninjaAction = "defense";
            }
            else if (johnnyChoix == true) {
                changeLog("Johnny la hache se défend");
                animationDefense(0, 200);
                johnnyChoix = false;
                johnnyChoixPossible = false;
                johnnyAction = "defense";
            }
            else if (soldatChoix == true) {
                changeLog("Garde royal se défend");
                animationDefense(1, 200);
                soldatChoix = false;
                soldatChoixPossible = false;
                soldatAction = "defense";
            }
        }
    })
    special.addEventListener("click", function () {
        if (document.contains(document.querySelector(".selectionMonstre")) && document.contains(document.querySelector(".selectionHero")) && (peguChoix == true || soldatChoix == true || ninjaChoix == true || johnnyChoix == true)) {
            document.querySelector(".selectionMonstre").remove();
            document.querySelector(".selectionHero").remove();
            if (peguChoix == true && peguAction == "special" && peguChoixPossible == true)
                return
            if (soldatChoix == true && soldatAction == "special" && soldatChoixPossible == true)
                return
            if (johnnyChoix == true && johnnyAction == "special" && johnnyChoixPossible == true)
                return
            if (ninjaChoix == true && ninjaAction == "special" && ninjaChoixPossible == true)
                return
            if (peguChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == true) {
                if (mana[3] < 20) {
                    changeLog("Random pégu n'a pas assez de Mana");
                } else {
                    changeLog("Random pégu rajoute à l'ensemble de l'équipe de 10 points de vie");
                    console.log(pv)
                    for (let i = 0; i < pv.length; i++) {
                        console.log(pv)
                        pv[i] += 10;
                        document.querySelector(personnages[i]).innerHTML = "Pv : " + pv[i];
                    }
                    mana[3] -= 20;
                    document.querySelector(personnagesMana[3]).innerHTML = "Mana : " + mana[3];
                    animationSpecial(3, 200);
                    setTimeout(function () {
                        peguChoix = false;
                        peguChoixPossible = false;
                        peguAction = "special";
                        actionMonstre();
                    }, 3000);
                }
            }
            else if (ninjaChoix == true && soldatChoixPossible == false && ninjaChoixPossible == true && johnnyChoixPossible == false && peguChoixPossible == false) {
                if (mana[2] == 0) {
                    changeLog("Ninja rouillé n'a pas assez de Mana");
                } else {
                    tmp = "Ninja rouillé tente une ancienne technique interdite<br>"
                    if (Math.floor(Math.random() * 2) == 0) {
                        tmp += "Mais il échoue"
                    } else {
                        tmp += "Il réussi, et tue : " + cible.innerHTML + " en un seul coup !";
                        pvM[cibleChiffre] = 0;
                        ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                        if (pvM[cibleChiffre] <= 0) {
                            spriteM[cibleChiffre].style.display = "none";
                        }
                    }
                    mana[2] = 0;
                    document.querySelector(personnagesMana[2]).innerHTML = "Mana : " + mana[2];
                    changeLog(tmp)
                    animationSpecial(2, 200);
                    setTimeout(function () {
                        ninjaChoix = false;
                        ninjaChoixPossible = false;
                        ninjaAction = "special";
                        actionMonstre();
                    }, 3000);
                }
            }
            else if (johnnyChoix == true && soldatChoixPossible == false && ninjaChoixPossible == false && johnnyChoixPossible == true && peguChoixPossible == false) {
                if (mana[0] < 15) {
                    changeLog("Johnny n'a pas assez de Mana");
                } else {
                    changeLog("Johnny la hache attaque deux fois très rapidement : " + cible.innerHTML + " Et lui inflige 20 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 20;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    mana[0] -= 15
                    document.querySelector(personnagesMana[0]).innerHTML = "Mana : " + mana[0];
                    animationSpecial(0, 200);
                    setTimeout(function () {
                        johnnyChoix = false;
                        johnnyChoixPossible = false;
                        johnnyAction = "special";
                        actionMonstre();
                    }, 3000);
                }
            }
            else if (soldatChoix == true && soldatChoixPossible == true && ninjaChoixPossible == false && johnnyChoixPossible == false && peguChoixPossible == false) {
                if (mana[1] < 30) {
                    changeLog("Garde royal n'a pas assez de Mana");
                } else {
                    changeLog("Garde royal attaque l'ensemble des enemies et leur infligent 10 points de damage");
                    for (let i = 0; i < pvM.length; i++) {
                        pvM[i] = pvM[i] - 10;
                        document.querySelector(ennemis[i]).innerHTML = "Pv : " + pvM[i];
                        if (pvM[i] <= 0) {
                            spriteM[i].style.display = "none";
                        }
                    }
                    mana[1] -= 30
                    document.querySelector(personnagesMana[1]).innerHTML = "Mana : " + mana[1];
                }
                animationSpecial(1, 200);
                setTimeout(function () {
                    soldatChoix = false;
                    soldatChoixPossible = false;
                    soldatAction = "special";
                    actionMonstre();
                }, 3000);
            }
            else if (peguChoix == true) {
                if (mana[3] < 20) {
                    changeLog("Random pégu n'a pas assez de Mana");
                } else {
                    changeLog("Random pégu rajoute à l'ensemble de l'équipe de 10 points de vie");
                    for (let i = 0; i < pv.length; i++) {
                        pv[i] += 10;
                        document.querySelector(personnages[i]).innerHTML = "Pv : " + pv[i];
                    }
                    mana[3] -= 20;
                    document.querySelector(personnagesMana[3]).innerHTML = "Mana : " + mana[3];
                    animationSpecial(3, 200);
                    peguChoix = false;
                    peguChoixPossible = false;
                    peguAction = "special";
                }
            }
            else if (ninjaChoix == true) {
                if (mana[2] < 1) {
                    changeLog("Random pégu n'a pas assez de Mana");
                } else {
                    tmp = "Ninja tente une ancienne technique interdite<br>"
                    if (Math.floor(Math.random() * 2) == 0) {
                        tmp += "Mais il échoue"
                    } else {
                        tmp += "Il réussi, et tue : " + cible.innerHTML + " en un seul coup !";
                            pvM[cibleChiffre] = 0;
                        ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                        if (pvM[cibleChiffre] <= 0) {
                            spriteM[cibleChiffre].style.display = "none";
                        }
                    }

                    mana[2] = 0;
                    document.querySelector(personnagesMana[2]).innerHTML = "Mana : " + mana[2];
                    animationSpecial(2, 200);
                    changeLog(tmp)
                    ninjaChoix = false;
                    ninjaChoixPossible = false;
                    ninjaAction = "special";
                }
            }
            else if (johnnyChoix == true) {
                if (mana[0] < 15) {
                    changeLog("Johnny n'a pas assez de Mana");
                } else {
                    changeLog("Johnny la hache attaque deux fois très rapidement : " + cible.innerHTML + " Et lui inflige 20 points de damage");
                    pvM[cibleChiffre] = pvM[cibleChiffre] - 20;
                    ciblePV.innerHTML = "Pv : " + pvM[cibleChiffre];
                    if (pvM[cibleChiffre] <= 0) {
                        spriteM[cibleChiffre].style.display = "none";
                    }
                    mana[0] -= 15
                    document.querySelector(personnagesMana[0]).innerHTML = "Mana : " + mana[0];
                    animationSpecial(0, 200);
                    johnnyChoix = false;
                    johnnyChoixPossible = false;
                    johnnyAction = "special";
                }
            }
            else if (soldatChoix == true) {
                if (mana[1] < 30) {
                    changeLog("Garde royal n'a pas assez de Mana");
                } else {
                    changeLog("Garde royal attaque l'ensemble des enemies et leur infligent 10 points de damage");
                    for (let i = 0; i < pvM.length; i++) {
                        pvM[i] = pvM[i] - 10;
                        document.querySelector(ennemis[i]).innerHTML = "Pv : " + pvM[i];
                        if (pvM[i] <= 0) {
                            spriteM[i].style.display = "none";
                        }
                    }
                    mana[1] -= 30
                    document.querySelector(personnagesMana[1]).innerHTML = "Mana : " + mana[1];
                    animationSpecial(1, 200);
                    soldatChoix = false;
                    soldatChoixPossible = false;
                    soldatAction = "special";
                }
            }
        }
    })
}

function isDefending(cibleChoix) {
    if (johnnyAction == "defense" && cibleChoix == 0) {
        return true;
    }
    if (soldatAction == "defense" && cibleChoix == 1) {
        return true;
    }
    if (ninjaAction == "defense" && cibleChoix == 2) {
        return true;
    }
    if (peguAction == "defense" && cibleChoix == 3) {
        return true;
    }
    return false;
}
function actionMonstre() {
    infoDialogue = document.querySelector("#texte")
    var textDialogue = "Actions : <br>";
    if (pv[0] > 0 || pv[1] > 0 || pv[2] > 0 || pv[3] > 0) {
        if (pvM[0] > 0) {
            animationMonstre(0, 200)
            zombieChoix = Math.floor(Math.random() * personnages.length);
            if (isDefending(zombieChoix) == false) {
                pv[zombieChoix] = pv[zombieChoix] - 10;
                charaAttacked = document.querySelector(personnages[zombieChoix]);
                nom = document.querySelector("#nomP" + parseInt(zombieChoix + 1))
                charaAttacked.innerHTML = "Pv : " + pv[zombieChoix];
                if (pv[zombieChoix] <= 0) {
                    mort(zombieChoix, 1000);
                    personnages.pop(zombieChoix);
                    textDialogue += "Le zombie tue : " + nom.innerHTML + "</br>";
                } else {
                    textDialogue += "Le zombie attaque : " + nom.innerHTML + " Et lui inflige 10 points de damage" + "</br>";
                }
            } else {
                charaAttacked = document.querySelector(personnages[zombieChoix]);
                nom = document.querySelector("#nomP" + parseInt(zombieChoix + 1))
                charaAttacked.innerHTML = "Pv : " + pv[zombieChoix];
                textDialogue += "Le zombie attaque : " + nom.innerHTML + " Et lui inflige 0 points de damage" + "</br>";
            }
        }
        changeLog(textDialogue)
        setTimeout(function () {
            if (pvM[1] > 0) {
                chaosChoix = Math.floor(Math.random() * personnages.length);
                animationMonstre(1, 200)
                if (isDefending(chaosChoix) == false) {
                    pv[chaosChoix] = pv[chaosChoix] - 25;
                    charaAttacked = document.querySelector(personnages[chaosChoix]);
                    nom2 = document.querySelector("#nomP" + parseInt(chaosChoix + 1))
                    charaAttacked.innerHTML = "Pv : " + pv[chaosChoix];
                    if (pv[chaosChoix] <= 0) {
                        personnages.pop(chaosChoix);
                        mort(chaosChoix, 1000);
                        textDialogue += "Le maître du chaos tue : " + nom2.innerHTML + "</br>";
                    } else {
                        textDialogue += "Le maître du chaos attaque : " + nom2.innerHTML + " Et lui inflige 25 points de damage" + "</br>";
                    }
                } else {
                    pv[chaosChoix] = pv[chaosChoix] - 12;
                    charaAttacked = document.querySelector(personnages[chaosChoix]);
                    nom2 = document.querySelector("#nomP" + parseInt(chaosChoix + 1))
                    charaAttacked.innerHTML = "Pv : " + pv[chaosChoix];
                    if (pv[chaosChoix] <= 0) {
                        personnages.pop(chaosChoix);
                        mort(chaosChoix, 1000);
                        textDialogue += "Le maître du chaos tue : " + nom2.innerHTML + "</br>";
                    } else {
                        textDialogue += "Le maître du chaos attaque : " + nom2.innerHTML + " Et lui inflige 12 points de damage" + "</br>";
                    }
                }
            }
            changeLog(textDialogue)
            setTimeout(function () {
                if (pvM[2] > 0) {
                    squeletteChoix = Math.floor(Math.random() * personnages.length);
                    animationMonstre(2, 200)
                    if (isDefending(squeletteChoix) == false) {
                        pv[squeletteChoix] = pv[squeletteChoix] - 10;
                        charaAttacked = document.querySelector(personnages[squeletteChoix]);
                        nom3 = document.querySelector("#nomP" + parseInt(squeletteChoix + 1))
                        charaAttacked.innerHTML = "Pv : " + pv[squeletteChoix];
                        if (pv[squeletteChoix] <= 0) {
                            personnages.pop(squeletteChoix);
                            mort(chaosChoix, 1000);
                            textDialogue += "L'assassin squelette tue : " + nom3.innerHTML + "</br>";
                        } else {
                            textDialogue += "L'assassin squelette attaque : " + nom3.innerHTML + " Et lui inflige 10 points de damage" + "</br>";
                        }
                    } else {
                        charaAttacked = document.querySelector(personnages[squeletteChoix]);
                        nom3 = document.querySelector("#nomP" + parseInt(squeletteChoix + 1))
                        charaAttacked.innerHTML = "Pv : " + pv[squeletteChoix];
                        textDialogue += "L'assassin squelette attaque : " + nom3.innerHTML + " Et lui inflige 0 points de damage" + "</br>";
                    }
                }
                changeLog(textDialogue)
            }, 1000)
        }, 1000)

        soldatChoixPossible = true;
        johnnyChoixPossible = true;
        ninjaChoixPossible = true;
        peguChoixPossible = true;


        if (pv[0] <= 0) {
            johnnyChoix = false;
            johnnyChoixPossible = false;
        }
        if (pv[1] <= 0) {
            soldatChoix = false;
            soldatChoixPossible = false;
        }
        if (pv[2] <= 0) {
            ninjaChoix = false;
            ninjaChoixPossible = false;
        }
        if (pv[3] <= 0) {
            peguChoix = false;
            peguChoixPossible = false;
        }
        choixAction();
    }
    else {
        changeLog("Dommage, tu as perdu !");
    }
}

choixHeros();
choixMonstre();
choixAction();


function animationAttack(spriteIndex, timems) {
    sprite[spriteIndex].style.transition = "transform "+timems+"ms ease-in-out";
    sprite[spriteIndex].style.transform = "translate(-100px, 0)";
    setTimeout(function () {
        sprite[spriteIndex].style.transform = "translate(-100px, -25px)"
        setTimeout(function () {
            sprite[spriteIndex].style.transform = "translate(-100px, 0)"
            setTimeout(function () {
                sprite[spriteIndex].style.transform = "translate(0, 0)"
            }, timems);
        }, timems);
    }, timems);
}

function animationDefense(spriteIndex, timems) {
    sprite[spriteIndex].style.transition = "transform "+timems+"ms ease-in-out";
    sprite[spriteIndex].style.transform = "scale(2)"
    setTimeout(function () {
        sprite[spriteIndex].style.transform = "scale(1)"
    }, timems);
}

function animationSpecial(spriteIndex, timems) {
    sprite[spriteIndex].style.transition = "transform "+timems+"ms ease-in-out";
    sprite[spriteIndex].style.transform = "rotate(360deg)";
    setTimeout(function () {
        sprite[spriteIndex].style.transform = "rotate(0deg)";
    }, timems);
}

function animationMonstre(spriteIndex, timems) {
    spriteM[spriteIndex].style.transition = "transform "+timems+"ms ease-in-out";
    spriteM[spriteIndex].style.transform = "translate(100px, 0)";
    setTimeout(function () {
        spriteM[spriteIndex].style.transform = "translate(100px, -25px)"
        setTimeout(function () {
            spriteM[spriteIndex].style.transform = "translate(100px, 0)"
            setTimeout(function () {
                spriteM[spriteIndex].style.transform = "translate(0, 0)"
            }, timems);
        }, timems);
    }, timems);
}

function mort(spriteIndex, timems){
    sprite[spriteIndex].style.transition = "transform "+timems+"ms ease-in-out";
    sprite[spriteIndex].style.transform = "scale(0)"
    setTimeout(function(){
        sprite[spriteIndex].style.display = "none";
    }, timems)
}