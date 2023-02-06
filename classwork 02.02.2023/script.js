
function User(xxx, yyy) {
    this.id = getNextId;
    this.age = yyy;

    this.getAge = function () {
        console.log(this.age)
    }
}


const stopwatches = [
   
    // {
    //     id: 42,
    //     startDate: '2022-01-01', 
    //     endDate: '2022-01-02', 
    //     duration: 1200,
    // },
    // {
    //     id: 11,
    //     startDate: '2022-01-01', 
    //     endDate: '2022-01-02', 
    //     duration: 1200,
    // }
];

function getNextId() {
    return stopwatches.length?(stopwatches.sort((a, b) => b.id - a.id)[0]['id']+1) : 1;
}

function Stopwatch (){
    this.id = getNextId();
    this.startDate = new Date()
    this.endDate = null;
    this.duration = 0
}

let stopwatch1 = new Stopwatch()
console.log(stopwatch1)
// let user2 = new User('Jack', 100);


// Створити секундомір.

// Створити кнопку Старт. При натисканні на кнопку Старт - запускається секундомір. 

// Кожен секундомір - це об'єкт з полям:
// id, startDate, endDate, duration.

// Таких секундомірів може бути безліч. Усі вони зберігаються у окремому контейнері (діві). Кожен секундомір - це окрема картка з основними даними: початок секундоміра, кінець, та тривалість. У картці також має бути кнопка "Стоп".

// Секундомір вважається активним, якщо поле endDate = null. У неактивному секундомірі має бути сірий фон та кнопка "Видалити".

// Завдання:
// 1. Створити глобальну змінну, що буде в себе включати масив секундомірів.
// 2. Створити функцію, що буде генерувати ід (шукати останній найбільший ід, та виводити ід + 1). Назва: getNextId()
// 3. Створити функцію-конструктор, яка буде створювати новий об'єкт секундоміра. Назва: Stopwatch()
// 4. У цій функції-конструкторі реалізувати метод end(), який буде завершувати секундомір