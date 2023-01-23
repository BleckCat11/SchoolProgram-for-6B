let array = [];

let counterOfWords = 0;

let classIsDeleteSomething = document.getElementsByClassName("deleteSomething");
let classIsAddSomething = document.getElementsByClassName("addSomething");


let input = document.getElementById("input");
document
  .getElementById("input")
  .addEventListener("keydown", IsInputEmpty, false);
for (let i of document.getElementsByTagName("button")) {
  i.addEventListener("click", updateArray, false);
}

function updateArray() {
  document.getElementById("div").innerHTML = array;
}

function IsInputEmpty() {
  if (input.value != "" || input.value != " ") {
    for (let i of classIsAddSomething) {
      i.disabled = false;
    }
  } else {
    for (let i of classIsAddSomething) {
      i.disabled = true;
    }
  }
}

function addWordAtTheBeginning() {
  array.unshift(input.value);
  counterOfWords++;
  for (let i of classIsDeleteSomething) {
    i.disabled = false;
  }
}

function addWordAtTheEnd() {
  array.push(input.value);
  counterOfWords++;
  for (let i of classIsDeleteSomething) {
    i.disabled = false;
  }
}

function deleteWordAtTheEnd() {
  array.pop();
  counterOfWords--;
  if (counterOfWords == 0) {
    for (let i of classIsDeleteSomething) {
      i.disabled = true;
    }
  }
}

function deleteWordAtTheBeginning() {
  array.shift();
  counterOfWords--;
  if (counterOfWords == 0) {
    for (let i of classIsDeleteSomething) {
      i.disabled = true;
    }
  }
}

function filter() {
  let inputFilterTask = document.getElementById("filter").value;
  let filtretArray = array.filter((word) => word.indexOf(inputFilterTask) != -1);
  console.log(filtretArray)
  document.getElementById("filterOfInput").innerHTML = filtretArray;
}

function map() {
    let inputMapTask = document.getElementById("map").value;
  let arrayMap = array.map((word) => word + inputMapTask);
  document.getElementById("mapOfInput").innerHTML = arrayMap;
}

function add() {
    let result = array
    let inputAddTask = document.getElementById("add").value;
  while (result.length < inputAddTask) {
    result.push(".");
  }
  document.getElementById("addOfInput").innerHTML = result
}

function every() {
    let inputEveryTask = document.getElementById("every").value;
  let isEvery = array.every((word) => word.indexOf (inputEveryTask) != -1);
if (isEvery){
    document.getElementById("every").style.backgroundColor = "green"
}else{
    document.getElementById("every").style.backgroundColor = "red"
}
}

function some() {
    let inputSomeTask = document.getElementById("some").value;
        let isSome = array.some((word) => word.indexOf(inputSomeTask) != -1);
  if (isSome){
      document.getElementById("some").style.backgroundColor = "green"
  }else{
      document.getElementById("some").style.backgroundColor = "red"
  }}

