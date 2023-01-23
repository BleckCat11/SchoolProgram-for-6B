console.log(getElemsWithoutWords(["a", "i"]));

function getElemsWithoutWords(array) {
    result = []
  const names = [
    "John",
    "Jack",
    null,
    "Sam",
    "Tyler",
    "Perry",
    "Daniel",
    undefined,
  ];
  let onlyStrings = names.filter((name)=>typeof name == "string")
  for (let i of onlyStrings) {
    let counter = 0
    for (let j of array) {
      for (let y of i) {
        if (y == j){
counter ++
        }
      }
    }
    if (counter == 0){
result.push (i)
    }
  }
  return result
}

console.log(
  isNotFalse([
    0,
    null,
    "dfdf",
    null,
    0,
    undefined,
    "",
    NaN,
    "234",
    "3",
    6,
    true,
  ])
);
function isNotFalse(array) {
  return array.filter((name) => Boolean(name));
}

console.log(areArraysEqual([1, 2, 3], [3, 2, 1,  3, 3, 3, 3]));
function areArraysEqual(a, b) {
  let biggerArray = b.length > a.length ? b : a;
  let smallerArray = b.length > a.length ? a : b;
  for (let i of biggerArray) {
    if (smallerArray.indexOf(i) == -1) {
      return false;
    }
  }
  return true;
}
console.log(chunkArray([1, 2, 3, 4, 7, 8], 3));
function chunkArray(myArray, chunk_size) {
  let arrayLength = myArray.length;
  let tempArray = [];
  for (let index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray;
}

console.log(
  task5([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
function task5(array) {
  let result = [];
  for (let allArrays of array) {
    for (let allValuesInArrays of allArrays) {
      result.push(allValuesInArrays);
    }
  }
  return result;
}
