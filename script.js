function check() {
  let input = document.getElementById("input").value;
  if (input == "123123") {
    window.location.href = "createrealcourse.html";
  }else{
    document.getElementById("div").innerHTML = "пароль неправильний. спробуйте ще раз"
  }

}
