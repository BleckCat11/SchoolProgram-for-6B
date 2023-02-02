let powers = {
  speed: 1,
  strength: 1,
  intelegent: 1,
};
let resourses = 3;
let gold = 10;
let power = 12;

function myPower(nameOfAPower) {
  alert("your " + nameOfAPower + "is lvl - " + powers[nameOfAPower]);
}

function upgradePowers() {
  document.getElementById("upgradePowersButton").disabled = true;
  let div = document.getElementById("power");
  for (let i = 0; i < 3; i++) {
    let button = document.createElement("button");
    div.appendChild(button);
    if (i == 0) {
      button.innerHTML = "upgrade speed";
      button.id = "upgrade speed";
    } else if (i == 1) {
      button.innerHTML = "upgrade strength";
      button.id = "upgrade strength";
    } else {
      button.innerHTML = "upgrade intellekt";
      button.id = "upgrade intellekt";
    }
  }
  speedFunction();
  strengthFunction();
  intelegentFunction();
}

function speedFunction() {
  let buttond = document.getElementById("upgrade speed");
  buttond.addEventListener(
    "click",
    function () {
      let allPowers = document.getElementsByClassName("powers");
      if (gold >= 5) {
        if (resourses != 10) {
          gold = gold - 5;
          allPowers[0].innerHTML = "speed - " + (Number(powers.speed) + 1);
          powers.speed = powers.speed + 1;
          resourses = resourses + 1;
        } else {
          alert("you are too much points");
        }
      } else {
        alert("You don't have enough Gold!");
      }
    },
    false
  );
}
function strengthFunction() {
  let buttond = document.getElementById("upgrade strength");
  buttond.addEventListener(
    "click",
    function () {
      let allPowers = document.getElementsByClassName("powers");
      if (gold >= 7) {
        if (resourses != 10) {
          gold = gold - 7;
          allPowers[1].innerHTML = "strength - " + (Number(powers.strength) + 1);
          powers.strength = powers.strength + 1;
          resourses = resourses + 1;
        } else {
          alert("you are too much points");
        }
      } else {
        alert("You don't have enough Gold!");
      }
    },
    false
  );
}

function intelegentFunction() {
  let buttond = document.getElementById("upgrade intellekt");
  buttond.addEventListener(
    "click",
    function () {
      let allPowers = document.getElementsByClassName("powers");
      if (gold >= 10) {
        if (resourses != 10) {
          gold = gold - 10;
          allPowers[2].innerHTML = "intelekt - " + Number(powers.intelegent) + 1;
          powers.intelegent = powers.intelegent + 1;
          resourses = resourses + 1;
        } else {
          alert("you are too much points");
        }
      } else {
        alert("You don't have enough Gold!");
      }
    },
    false
  );
}

function checkIfPossibleSold() {
  document.getElementById("buttonOfSoldongPowers").disabled = true
  let button = document.createElement("button");
  button.id = "speed"
  document.body.appendChild(button);
  button.innerHTML = "sold speed";
  button.onclick =soldSpeed
  if (powers.speed != 0) {
  } else {
    button.disabled;
  }
  let button2= document.createElement("button");
  button2.id = "strength"
  document.body.appendChild(button2);
  button2.innerHTML = "sold strength";
  button2.onclick =soldStrength


  if (powers.strength != 0) {
  } else {
    button.disabled;
  }
  let button3= document.createElement("button");
  button3.id = "intelekt"
  document.body.appendChild(button3);
  button3.innerHTML = "sold intelekt";
  button3.onclick =soldIntelekt
  

  if (powers.intelegent != 0) {
  } else {
    button.disabled;
  }
}

function soldSpeed(){
  let allPowers = document.getElementsByClassName("powers");
  (gold = gold + 2.5);
    allPowers[0].innerHTML = "speed - " +( +powers.speed -1);
    +powers.speed--
    updatePower()
    isNotOne()
}

function soldStrength (){
 
  let allPowers = document.getElementsByClassName("powers");
  (gold = gold + 3.5);
    allPowers[1].innerHTML = "strength - " + (+powers.strength -1);
    powers.strength--
    updatePower()
    isNotOne()

}

function soldIntelekt (){

  let allPowers = document.getElementsByClassName("powers");
  (gold = gold + 5);
    allPowers[2].innerHTML = "intelegent - " + (+powers.intelegent -1);
    powers.intelegent--
    updatePower()
    isNotOne()
}

function updatePower (){
  resourses--
 colculatePower() 
  
}

function colculatePower (){
power = (+powers.speed*3) + (+powers.strength * 4) + (+powers.intelegent * 5)
console.log (power)

}

function isNotOne (){
if (powers.speed == 0){
  document.getElementById("speed").disabled = true
} 
if (powers.strength == 0){
  document.getElementById("strength").disabled = true
}
if (powers.intelegent == 0){
  document.getElementById("intelekt").disabled = true
}
}

function goCavingButton (){
  setTimeout(clicking, 60000)

}

function clicking(){
// make abutton, count every click, delete Button, show results
}

function fieght (){
  if (gold < 10){
    alert("not enought gold")
    return
  }
 gold = gold - 10
 let powerOfOponmant = powerOfOponmantFunction() 
 if(powerOfOponmant>power){
  alert ("you lost")
  
 }else {
  alert ("you won")
  gold = gold + 20
 }
}

function powerOfOponmantFunction() {
  let max = 40
  return Math.floor(Math.random() * max);
}