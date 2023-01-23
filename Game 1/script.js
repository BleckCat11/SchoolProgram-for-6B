let powers = {
  speed: 1,
  strength: 1,
  intelegent: 1,
};
let totalPower = 3;
let gold = 5;
let power = 12;
let resourses = 3;

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
        if (totalPower != 10) {
          gold = gold - 5;
          allPowers[0].innerHTML = "speed - " + (Number(powers.speed) + 1);
          powers.speed = powers.speed + 1;
          totalPower = totalPower + 1;
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
        if (totalPower != 10) {
          gold = gold - 7;
          allPowers[0].innerHTML = "speed - " + (Number(powers.speed) + 1);
          powers.speed = powers.speed + 1;
          totalPower = totalPower + 1;
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
        if (totalPower != 10) {
          gold = gold - 10;
          allPowers[0].innerHTML = "speed - " + Number(powers.speed) + 1;
          powers.speed = powers.speed + 1;
          totalPower = totalPower + 1;
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
  let allPowers = document.getElementsByClassName("powers");
  let button = document.createElement("button");
  document.body.appendChild(button);
  button.innerHTML = "sold speed";
  if (powers.speed != 0) {
    (gold = gold + 2), 5;
    allPowers[0].innerHTML = "speed - " + powers.speed + 1;
  } else {
    button.disabled;
  }
}
