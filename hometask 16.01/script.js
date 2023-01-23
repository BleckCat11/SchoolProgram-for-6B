let button = document.getElementById("admin");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let allDoc = [];
function checkIfIs() {
  if (document.getElementById("checkbox").checked) {
    uptadeDiv(numbers);
    selectedOption();
  } else {
    uptadeDiv("");
  }
}

function uptadeDiv(result) {
  document.getElementById("conteinerOfNumbers").innerHTML = result;
}

function selectedOption() {
  if (!document.getElementById("checkbox").checked) return;
  let selected = document.getElementById("mySelect").selectedIndex;
  let options = document.getElementById("mySelect").options;
  if (options[selected].text == "parni") {
    uptadeDiv(numbers.filter((number) => number % 2 == 0));
  } else if (options[selected].text == "ne parni") {
    uptadeDiv(numbers.filter((number) => number % 2 != 0));
  } else if (options[selected].text == "all") {
    uptadeDiv(numbers);
  }
}

function lastTask() {
  document.getElementById("admin").disabled = true;
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.type = "password";
  input.addEventListener(
    "keypress",
    function (e) {
      if (e.charCode == 13) {
        if (input.value == "admin") mainfuntion(input);
      }
    },
    false
  );
  allDoc.push(input);
}

function mainfuntion(input) {
  const input2 = document.createElement("input");
  document.body.appendChild(input2);
  input2.type = "number";
  input.disabled = true;
  allDoc.push(input2);
  for (let i = 0; i < 2; i++) {
    if (i == 0) {
      const button = document.createElement("button");
      document.body.appendChild(button);
      button.innerHTML = "+";
      button.id = "hi";
      allDoc.push(button);
    } else {
      const button = document.createElement("button");
      document.body.appendChild(button);
      button.innerHTML = "-";
      button.id = "hi2";
      allDoc.push(button);
    }
  }
  let notAdminAnymore = document.createElement("button");
  document.body.appendChild(notAdminAnymore);
  functionTask3(input2, notAdminAnymore);
  allDoc.push(notAdminAnymore);
}

function functionTask3(input2, a) {
  document.getElementById("hi").addEventListener(
    "click",
    function () {
      numbers.push(Number(input2.value));
      selectedOption();
    },
    false
  );
  document.getElementById("hi2").addEventListener(
    "click",
    function () {
      let indexOfInput = numbers.indexOf(Number(input2.value));
      if (indexOfInput != -1) {
        numbers.splice(indexOfInput, 1);
        selectedOption();
      }
    },
    false
  );
  a.addEventListener(
    "click",
    function () {
      for (let i of allDoc) {
        i.remove();
        allDoc = [];
        button.disabled = false;
      }
    },
    false
  );
}
