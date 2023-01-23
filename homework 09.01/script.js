let array = ["hello", "world", "good", "buy"];
let div = document.getElementById("div");
div.innerHTML = array;
function isItPossibleToAddAWord() {
  let input = document.getElementById("input").value;
  if (array.indexOf(input) == -1) {
    array.push(input);
  } else {
    document.getElementById("error").innerHTML = "Дане слово вже є в масиві";
  }
  div.innerHTML = array;
}

function isItPossibleToDeleteAWord() {
  let input = document.getElementById("input").value;
  let indexOfInput = array.indexOf(input);
  if (indexOfInput != -1) {
    array.splice(indexOfInput, 1);
  } else {
    document.getElementById("error").innerHTML = "Даного слова немає в масиві";
  }
  div.innerHTML = array;
}
//  У діви має бути рамка чорного кольору, жирний шрифт та заливку довільного кольору.
div.style.backgroundColor = "lime"
div.style.border = "1px solid black "
div.style.fontWeight = "900"
div.style.display="inline-block"
div.style.padding = "0 5px"
console.log (sort(["hello", "world", "good","buy"]))
function sort (a){
  return a.sort((a,b)=>a.toLowerCase() > b.toLowerCase()?1:-1)
}
