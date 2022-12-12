let array = [];

function check() {
  let input = document.getElementById("input").value;
  if (input == "123123") {
    window.location.href = "createrealcourse.html";
  } else {
    document.getElementById("div").innerHTML =
      "пароль неправильний. спробуйте ще раз";
  }
}

function check2() {
  console.log ("fdasfadsf")
  let allInputs = document.getElementsByName("alInputs");
  for (i of allInputs) {
    if (i.value.length == "" || i.value.length == " ") {
      document.getElementById("div1").innerHTML =
        "введіть справжні сначення в інпут!";
      return;
    }
  }
  if (
    allInputs[2].value == allInputs[3].value &&
    allInputs[2].value.length > 4
  ) {
   ;
    window.setTimeout(() => {
      addACourse()
    }, 800);  
        // window.location.href = "index.html";

  }
  return;
}

function addACourse() {
  array.push("ім'я")
  array.push(document.getElementById("input1").value);
  array.push("клас")
  array.push(document.getElementById("input2").value);
  array.push("код щоби прєднатися до курсу")
  array.push(document.getElementById("input3").value);
  for(let i of array){
  let newDiv = document.createElement("div");
  newDiv.innerHTML = i
  document.body.appendChild(newDiv)
}
}
