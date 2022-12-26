// function getWordsWithS(array) {
//   let array2 = [];
//   for (let i of array) {
//     let indexOf = i.indexOf("s");
//     if (indexOf != -1) {
//       array2.push(i);
//     }
//   }
//   return array2;
// }

// function getArray() {
//   let array = ["stop", "crop", "top", "sport", "post", "lost", "port"];
//   let result = getWordsWithS(array);
//   alert(result);
// }

// console.log(getPerimeter(3, 4));

// function getPerimeter(a, b) {
//   return a * 2 + b * 2;
// }

// console.log(
//   "========================================================================="
// );
// const array1 = [1, 2, 4];
// const array2 = [1, 3, 4, 5];
// const result = concatTwoArrays(array1, array2);
// console.log(result);

// function concatTwoArrays(a, b) {
//   let result = [];
//   let allArraysTogether = a.concat(b);
//   for (let i of allArraysTogether) {
//     if (result.indexOf(i) == -1) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(
//   "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
// );

// // function getTheBiggestNumber (a, b){
// //   return a>b? a : b
// // }

// const getTheBiggestNumber2 = (a, b) => (a > b ? a : b);

// console.log(getTheBiggestNumber2(8, 12));

// console.log(
//   "---------------------------------------------------------------------"
// );

// const numberWithDivisor3 = (a) => {
//   return a.filter((number) => number % 3 == 0);
// };
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(numberWithDivisor3(array));

// console.log(
//   "////////////////////////////////////////////////////////////////////////"
// );

// const wordWhichBeginsWithS = (a) => {
//   return a.filter((nameWithOrWithoutS) => nameWithOrWithoutS.indexOf("S") == 0);
// };
// let arrayOfNames = ["Ivan", "Fedir", "Stepan", "Sergiy", "Ruslan", "Anton"];
// console.log(wordWhichBeginsWithS(arrayOfNames));

// // home task
// // task 1
// console.log("fdsafds");
// const names = (a) => {
//   let result = [];
//   for (let i of a) {
//     let counter = 0;
//     for (let j of i) {
//       if (j.toLowerCase() == "n") {
//         counter++;
//       }
//     }
//     if (counter >= 2) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// const arrayOfNames2 = [
//   "Ivan",
//   "Fedir",
//   "Stepan",
//   "Sergiy",
//   "Ruslan",
//   "Anton",
//   "Nina",
// ];
// console.log(names(arrayOfNames2));

// // task 2
// const array3 = [
//   13, 15, 16, 18, 19, 20, 21, 25, 27, 29, 41, 63, 74, 78, 79, 512,
// ];
// console.log(numbers(array3));

// function numbers(a) {
//   let result = [];
//   let counter = 0;
//   for (let j of a) {
//     for (let i = 1; i <= j; i++) {
//       if (j % i == 0) {
//         counter++;
//       }
//     }
//     if (counter == 2) {
//       result.push(j);
//     }
//     counter = 0;
//   }
//   return result;
// }

// // task 3

// console.log(numbers2(60), "jfdahfjdhlas");

// function numbers2(a) {
//   const array3 = [ 13, 15, 16, 18, 19, 20, 21, 25, 27, 29, 41, 63, 74, 78, 79, 512,];
//   return array3.filter((number) => a % number == 0);
// }

// // task 4



// // task5
// const g = ["Ivan", "Fedir", "Stepan", "Sergiy", "Ruslan", "Anton", "Nina"];
// console.log(numbers3(g));

// function numbers3(g) {
//   let result = []
//   let counter = 0
//   let array = ["e", "y", "u", "i", "o", "a"];
//   for (let i of g) {
//     for (let j of i){
//       if (array.indexOf(j.toLowerCase()) != -1){
//         counter++
//       }
//     }
//     if ((i.length - counter) == counter){
//       result.push(i)
//     }
//     counter = 0
//   }
//   return result
// }

// let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,0]
// let newArray = arrayOfNumbers.map((oneNumber)=> oneNumber*2)
// console.log (newArray)

// function hello (){
//   let array = [1,2,3,4,5,79]
//   let newArray = array.map((number)=>number % 2 == 0? number : number*2)
//   return newArray
// }
// console.log (hello())

// let array = [2,2,2,2,2,2,2,5678]
// let IsTwo = array.every((hello)=> hello == 2)
// console.log(IsTwo)


// let arra2 = [5678,234,34,32,42,1]
// let IsTwoInArray = arra2.some((hello)=> hello == 2)
// console.log(IsTwoInArray)

// let arra3 = [5678,234,34,34,42,1,1]
// let IsTwoInArray2 = arra2.lastIndexOf(1)
// console.log(IsTwoInArray2)


const names1 = ['Ivan', 'Fedir', 'Stepan', 'Sergiy', 'Ruslan', 'Anton', 'Nina']

console.log (names(names1))

function names(array){
return array.map((oneName)=>oneName + " " + "Ivanenko")
}
mainFunction()
function mainFunction (){
    const names1 = ['Ivan', 'Fedir', 'Stepan', 'Sergiy', 'Ruslan', 'Anton', 'Nina']
 let howManyNames = names1.length   
let result = createSurname(howManyNames)
console.log(names1.map((name)=>name + " "+ result[names1.indexOf(name)]))
}

function createSurname(howManyNames){
    let letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let allSurnames = []
    for(let i = 1; i <= howManyNames; i ++){
        let surname = ""
        for (let j = 0; j != 5; j++){
            let max = 26
            let random = Math.floor(Math.random() * max);
            surname = surname + letters[Math.round(random)]
        }
        allSurnames.push(surname)
        surname = ""
    }
    return allSurnames
}



console.log("=====================================================")

mainFunction1()
function mainFunction1 (){
    const names1 = ['Ivan', 'Fedir', 'Stepan', 'Sergiy', 'Ruslan', 'Anton', 'Nina']
 let howManyNames = names1.length   
let result = createSurname1(howManyNames)
console.log(names1.map((name)=>name + " "+ result[names1.indexOf(name)]))
}

function createSurname1(howManyNames){
    let letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    let allSurnames = []
    // let random2 = hello()
    for(let i = 1; i <= howManyNames; i ++){
        let surname = ""
        let random2 = hello()
        for (let j = 0; j != random2; j++){
            let max = 26
            let random = Math.floor(Math.random() * max);
            surname = surname + letters[Math.round(random)]
        }
        allSurnames.push(surname)
    }
    return allSurnames
}

function hello (){
    let max = 4
    let random = Math.floor(Math.random() * max);
    let Done = Math.round(random) + 5
    return Done 
}

// не регенерується кожне слово по своєму у всіх однаково