window.addEventListener("keypress", thirdTask, false);
window.addEventListener("keypress", lastTask, false);
let array = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  firstTask([1, 2, -1]),
  secondTask([[1, 2], [3, 4, 5], [6], [7, 8, 9, 10, 11], [12, 13, 14]])
);
function firstTask(arr) {
  return arr
    .filter((number) => number > 0)
    .reduce((sum, current) => sum + current);
}

function secondTask(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

function lastTask(e) {
  switch (e.key) {
    case "F": {
      alert(numbers.filter((number) => !(number % 3)));
      break
    }
    case "G" : {
        alert (numbers.filter((number) => !(number % 2)))
        break
    }
    case "A":{
let i = +prompt()
numbers.push(i)
break
    }
    default:{
        break
    }
  }
}

function thirdTask(e) {
  array.push(e.keyCode);
  updateDiv("thirdTaskDiv");
}
function updateDiv(id) {
  document.getElementById(id).innerHTML = array;
}

const div = document.createElement("div");
div.setAttribute("id", "thirdTaskDiv");
document.body.appendChild(div);

// 4. Створити масив чисел [1,2,3,4,5,6,7,8,9]
// При натисканні на кнопку F вивести на екран лише ті елементи, що діляться на 3.
// При натисканні на кнопку G вивести на екран тільки ті елементи, що діляться на 2.
// При натисканні на кнопку A вивести prompt, у який вводиться число, що додається у масив чисел.
