const superheroCards = [{}];

function renderCards(link, name, descriptionOfSuperhero, powers) {
  let containerOfSuperheros = document.getElementById("container-superheros");
  let div = document.createElement("div");
  div.className = "card-superhero";
  containerOfSuperheros.appendChild(div);
  let imgOfSuperhero = document.createElement("img");
  imgOfSuperhero.src = link;
  imgOfSuperhero.alt = name;
  imgOfSuperhero.className = "container-superheros";
  div.appendChild(imgOfSuperhero);
  let h5 = document.createElement("h5");
  h5.innerHTML = name;
  div.appendChild(h5);
  let description = document.createElement("div");
  description.innerHTML = descriptionOfSuperhero;
  div.appendChild(description);
  let power = document.createElement("ul");
  div.appendChild(power);
  for (let i in powers) {
    let oneOfPower = document.createElement("li");
    oneOfPower.innerHTML = capitalizeFirstLetter(i) + " " + powers[i];
    power.appendChild(oneOfPower);
  }
}
let halkLink =
  "https://amiel.club/uploads/posts/2022-03/1647738998_1-amiel-club-p-kartinki-pro-khalka-1.jpg";
let nameOfHalk = "halk";

let Halksdescription = "Really strong and green";

let powerOfHalk = {
  speed: 56,
  skills: 73,
  intelligence: 81,
  power: 99,
  danger: 100,
};

let halk = new SuperheroCard(
  halkLink,
  nameOfHalk,
  Halksdescription,
  powerOfHalk
);


function SuperheroCard(link, name, description, powers) {
  this.link = link;
  this.name = name;
  this.description = description;
  this.powers = powers;
  renderCards(this.link, this.name, this.description, this.powers);
}

function capitalizeFirstLetter(word) {
  word = word[0].toUpperCase() + word.slice(1);
  return word;
}

function makeACard() {
  let link = document.getElementById("link").value;
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let powers = document.getElementsByClassName("powers");
  let donePowers = makeObject([...powers]);
  SuperheroCard(link, name, description, donePowers);
}

function makeObject(powers) {
  console.log(powers)
  let valuesOfHtmlObjects = powers.map((htmlObject) => htmlObject.value);
  let idOfHtmlObjects = powers.map((htmlObject) => htmlObject.id);
  let obj = {};
  for (let i = 0; i < powers.length; i++) {
    obj[idOfHtmlObjects[i]]= valuesOfHtmlObjects[i]
  }
  return obj
}
