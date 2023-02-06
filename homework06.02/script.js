let allTypesOfPayingMethods = ["card", "cash", "bonuses"];
let isClient = true;
let paymentType = 1;
let amount = 10;
let purchase = new Purchase(isClient, paymentType, amount);
console.log(purchase);

function Purchase() {
  this.isClient = isClient;
  this.paymentType = paymentType;
  this.amount = amount;
  this.id = getId();
  this.date = new Date();
}

function getId() {
  let allLetersAndNumbers = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
  ];
  let id = "";
  let counter = 0;
  while (counter != 10) {
    let max = 36;
    let random = Math.floor(Math.random() * max);
    id = id + allLetersAndNumbers[random];
    counter++;
  }
  return id
}
// Додатково до дз:
// - створити функцію-конструктор Purchase (покупка), яка буде створювати об'єкти з полями:
// id: generateId(),
// date (дата покупки - має генеруватися в момент створення покупки),
// amount (передається параметром)
// paymentType (тип оплати - 1 - картою, 2 - готівкою, 3 - бонусами. Передається параметром)
// isClient (чи є покупець клієнтом магазину - true, якщо так, false - якщо ні. Передається параметром)

// Функція generateId() має генерувати випадковий ід довжиною 10 символів з рандомними малими буквами та числами. Приклади:
// fw3kjh1i22
// ooe3p1mdo3
