console.log(capitalizeFirstLetters("helLo worLD"));

function capitalizeFirstLetters(arr) {
  let allLettersAreSmal = arr.toLowerCase();
  let splitedArr = allLettersAreSmal.split(" ");
  for (let i =0 ; i < splitedArr.length; i++) {
    splitedArr[i] = splitedArr[i][0].toUpperCase() + splitedArr[i].slice(1)
  }
  return splitedArr;
}

console.log(makeSentence(["Hello", "world"]));
function makeSentence(arr) {

  return arr.join(" ")
}
console.log(makeArray("I,am,programmer"));
function makeArray(str) {
  return str.split(",");

}

function getCharByIndex(word) {
  let input = document.getElementById("input").value;
  console.log(word[input]);
}

console.log(sliceWord(2));
function sliceWord(a, b) {
  let word = "hello";
  return word.slice(a, b);
}
