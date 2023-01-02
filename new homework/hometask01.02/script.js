// console.log(getElemsWithoutWords(["a", "i"]));

// function getElemsWithoutWords(array) {
//     result = []
//   const names = [
//     "John",
//     "Jack",
//     null,
//     "Sam",
//     "Tyler",
//     "Perry",
//     "Daniel",
//     undefined,
//   ];
//   for (let i of names) {
//     let counter = 0
//     for (let j of array) {
//       for (let y of i) {
//         if (y == j){
// counter ++
//         }
//       }
//     }
//     if (counter == 0){
// result.push (array)
//     }
//   }
//   return result
// }

console.log(isNotFalse([0, null, "dfdf"]));
function isNotFalse(array) {
  return array.filter((name) => Boolean(name) != false);
}

console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
function areArraysEqual(a, b) {
  for (let i of a) {
    if (b.indexOf(i) == false) {
      return false;
    }
    return true;
  }
}
console.log (chunkArray([1,2,3,4], 2))
function chunkArray(myArray, chunk_size) {
  let arrayLength = myArray.length;
  let tempArray = [];

  for (let index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);
    tempArray.push(myChunk);
  }
  return tempArray
}
console.log (task5( [ [1,2], [3,4], [5,6], [7,8] ]))
function task5 (array){

}