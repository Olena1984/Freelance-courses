"use strict";

/* Задача №1
 Що потрапить в консоль?*/

let someVar = 0;
++someVar;

if (someVar) {
    console.log(someVar);
}

// в консоль потрапить - 1

/*Задача №2
    За допомогою циклу FOR виведіть в консоль 10 рядків:
    Пункт №1
    Пункт №2
    і т.д.
*/
// let number = 1;
for (let number = 1; number <= 10; number++) {
    console.log("Пункт " + "№" + number);
}

/*Задача №3
Що потрапить в консоль ?*/

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
    console.log('000');
}
false || false && true || false

// console.log(false)

/*Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку.*/

function calcDivision(a, b) {
    let divide = a / b;

    if (isNaN(a) || isNaN(b)) {
        return "Не вірно задано число"
        // перевірка змінних на NaN
    }
    else if (typeof a !== "number" || typeof b !== "number") {
        return "Не число";
        // перевірка чи змінна по типу є числом так як "455" перевірка на NaN переведе у число
    }
    else if (isNaN(divide)) {
        return "Результат NaN";
        // перевірка чи результат обчислення NaN
    }
    else if (divide === Infinity || divide === -Infinity) {
        return "Ділення на 0 - заборонено";
        // перевірка чи результат обчислення 0
    }
    else {
        return divide;
    }
}
let result = calcDivision(7, 4);
console.log("Результат ділення: " + result);

/*Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль*/

const myArray = [30, 100, "tree", 10, "10"];
for (let i = 0; i < myArray.length; ++i) {
    if (myArray[i] === 10) {
        // console.log("Знайдене число " + myArray[i]);
        console.log(`Знайдене число ${myArray[i]}`);
    }

}
// 2-й спосіб перебору масиву

const myArray2 = [30, 100, "tree", 10, "10"];
myArray2.forEach((data) => {
    if(data === 10){
        console.log(`Знайдене число ${data}`);
    }
})

