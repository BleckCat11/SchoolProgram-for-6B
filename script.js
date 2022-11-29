function check() {
  let input = document.getElementById("input").value;
  if (input == "123123") {
    window.location.href = "createrealcourse.html";
  }else{
    document.getElementById("div").innerHTML = "пароль неправильний. спробуйте ще раз"
  }

}

function check2(){
    let allInputs = document.getElementsByName("alInputs")
    for (i of allInputs){
if (i.value.length == ""||i.value.length == " "){
    document.getElementById("div1").innerHTML = "введіть справжні сначення в інпут!"
    return
}
    }
    if (allInputs[2].value == allInputs[3].value && allInputs[2].value.length > 4){
        window.location.href = "index.html";
    }
}