// Сучасний (Строгий) режим
"use strict"


/*
Впродовж тривалого часу JavaScript розвивався без проблем із сумісністю.
До мови додавалися нові функції, а стара функціональність залишалася
незмінною.

Перевагою цього було те, що чинний код не ламався. Проте,
будь-яка помилка або неідеальне рішення всередені мови назавжди
ставали частиною JavaScript, бо цей код не змінювався.

Так було до 2009 року, коли з’явився стандарт ECMAScript 5 (ES5).
Він додав до мови новий функціонал та змінив деякі чинні правила.
Щоб старий код лишався робочим, більшість таких модифікацій типово
було вимкнено. Тому щоб увімкнути цей функціонал, потрібно прописати
спеціальну директиву: "use strict".

Директива виглядає як рядок: "use strict" чи 'use strict' і дослівно
перекладається як “використовувати суворий (режим)”. Якщо вона прописана
на початку скрипту, він буде виконуватися у “сучасному” режимі.
*/

// ЩО ТАКЄ JS

/*
Що такє JS - мультипарадигмена,
динамічно типізована, мова програмування.

Будь-яка программа це певна
послідовність інструкцій (команд)

Інструкції можуть містити:
Значення
Оператори
Ключові слова
Вирази
Коментарі
*/

// СИНТАКСИС

// Коментар
/*
	Коментар
	Коментар
	Коментар
*/


/*
причиною ДУЖЕ (98%)
багатьох невдач
є - ВАША неуважність
Перевіряйте код та помилки в консолі
*/

// ПРАВИЛО СИНТАКСИСУ №0
/*
ВСЕ що відкрито має бути закрито
ВСЕ що закрито має бути відкрито
*/
/*
{}
()
[]
""
''
``
*/

// ПРАВИЛО СИНТАКСИСУ №1
/*
пишемо кожну інструкцію з нового рядку
*/
// Приклад
// Помилка
// console.log('') console.log('')
// Вірно
/*
console.log('')
console.log('')
*/

// ПРАВИЛО СИНТАКСИСУ №2
/*
	мова JS чутлива до регістру!
*/
// Приклад
// Помилка
// Console.log('123')
// Вірно
// console.log('')

// Команда виводу даних в консоль
// console.log(дані)

// console.log("Привіт JS")

// ЗМІННІ ТА КОНСТАНТИ

/*
Змінна - це певний контейнер,
який може зберігати якісь дані.
let - об'являє змінну.
Потрібне тільки в момент об'яви змінної
*/
// Анатомія:
// let і'мя_змінної

// І'мя змінної
/*
	0) має відповідати данним які містить змінна,
	або буде містити
	1) латиниця (врай рекомндовано)
	2) букви, цифри, символи $ та _
	3) не може починатись з цифри
	4) не може дорівнювати одному з ключових
	(зарезервованих) слів
	(список - https://fls.guru/js-reservedkeywords.html)
	5) Стиль - lowerCamelCase
*/

// Об'ява (cтворення, оголошення) змінної
// let user
// let userAge
// !!! Не може бути 2х однакових
// змінних в одній області видимості

// Привласнення значення

// Відразу, в момент об'яви

// let userAge = 41
// console.log(userAge)

// Потім, в процесі ходу програми

// let userAge
// console.log(userAge)
// // ...код...
// userAge = 41 // let вже не потрібен
// console.log(userAge)


// Зміна значення
// let userAge = 41
// console.log(userAge)
// ...код...
// ...або роки...
// userAge = 42
// console.log(userAge)
// ...код...
// Динамічна типизація в дії...
// userAge = "Жека"
// console.log(userAge)


// Копіювання значення

// let newUserAge
// let userAge = 41
// console.log(newUserAge)

// newUserAge = userAge
// console.log(userAge)
// console.log(newUserAge)


// Область видимості
/*
	1) Не можна використовувати змінну (let)
		до її об'яви
	2) Змінну "видно" в межах JS-блоку де вона
		об'явлена та в усіх дочірніх
*/

// Помилка

// console.log(userAge)
// let userAge = 41

// Тут ми за межами блоку
// let userAge = 41

// function someFunction() { // Це функція, яка є JS-блоком
// 	//Тут ми всередені блоку
// 	let userAge = 21
// 	console.log(userAge)
// 	if (userAge < 50) {
// 		//Тут ми всередені блоку в блоці
// 		let userAge = 16
// 		console.log(userAge)
// 		// ....
// 	}
// 	// ....
// }
// someFunction()

// // Тут ми за межами блоку
// console.log(userAge)

// Приклад наповлення змінної в JS-блоці
// (при певній умові)
// let user = "admin"
// let userAge
// if (user == "admin") {
// 	/*
// 	let userAge = 41
// 	console.log(userAge)
// 	*/
// 	userAge = 41
// }
// // ...
// console.log(userAge)


// Константи
// Анатомія:
// const і'мя_константи

// Відмінності від let:
// 1) Значення константи неможна змінити*
// 2) Константа створюється відразу з даними

// const userAge = 41
// console.log(userAge)
// Помилка
// userAge = 37

// !!!
// Використовуйте саме константи
// а змінні, лише тоді, коли плануєте
// змінювати її значення
// !!!

// Якщо значення константи нам відомо заздалегідь
// const COLOR_GREY = '#424551'
// console.log(COLOR_GREY)


// const numOne = 30 + 10
// const numTwo = 20
// const startAge = 25
// const addAge = 8

// if (numOne > numTwo) {
// 	const userAge = startAge + addAge
// 	console.log(userAge)
// }


// ТИПИ ДАНИХ
/*
undefined
null
number
string
boolean
object
*/
// Оператор typeof вертає тип даних

// undefined (невизначанність)
// let userAge
// console.log(userAge) // Значення
// console.log(typeof userAge) // Тип даних


// Приклад
// let user = "admin123"
// let userAge
// if (user === "admin") {
// 	userAge = 41
// }
// // ...код...
// if (userAge === undefined) {
// 	console.log('Error')
// } else {
// 	console.log(userAge)
// }

// null (порожнеча)
// let userAge = null
// console.log(userAge)  // Значення
// console.log(typeof userAge) // Тип даних

/*
Ключове слово null явно визначене відсутність значення.
null є примітивом, хоча оператор typeof повертає,
що null є об'єктом . Це помилка, яка вийшла з першої
версії JavaScript і була намірено поставлена ​​​​без уваги,
щоб не порушити очікувану поведінку в Інтернеті.
*/


// Приклад

// const age = 10
// const userAge = age > 40 ? "old" : null
// console.log(userAge)

/*
let userAge = 41
if (1 < 2) {
	userAge = 42
} else {
	userAge = null
}
// ...код...
if (userAge) {
	// ...код...
	// спрацює, лише коли userAge НЕ дорівнює null
}
*/


// number - число (не велике) та спец.значення
// Number() - примусова зміна типу даних

// let userAge = 41
// console.log(userAge)  // Значення
// console.log(typeof userAge) // Тип даних

// Infinity - нескінченність
// let number = 1 / 0
// console.log(number) // Значення
// console.log(typeof number) // Тип даних

// if (number === Infinity) {
// 	console.log('Error на 0 ділити не мож')
// }


// NaN - обчислення не може бути виконано
// let number = 10 / "АНАСТАСІЯ"
// console.log(number) // Значення
// console.log(typeof number) // Тип даних

// // Функція перевірки isNaN(зміна)
// if (isNaN(number)) {
// 	console.log('Це NaN')
// }


// string - рядки (текст)
// String() - примусова зміна типу даних

// let userAge = "41"
// console.log(userAge) // Значення
// console.log(typeof userAge) // Тип даних


// Лапки
/*
1) Одинарні - ''
2) Подвійні - ""
3) Зворотні - `` (раджу)

Одинарні та подвійні лапки повністю ідентичні.
Але, якщо відкита одинарні лапки до
закривати треба теж одинарною
*/

// const userAge = 41
// const userName = `Жека`
// // const userInfo = "Ім'я: " + userName + ", Вік: " + userAge
// const userInfo = `Ім'я: ${userName}, Вік: ${userAge}`
// console.log(userInfo)

// let text = `
// 	Lorem ipsum dolor sit amet,
// 	consectetur adipisicing elit.
// 	Saepe accusamus corrupti placeat
// 	excepturi. Atque, nostrum debitis
// 	blanditiis amet sit accusamus cumque
// 	tempora quaerat inventore unde,
// 	nam veritatis soluta dolor! Libero?
// `
// console.log(text)


// boolean - правда або брехня (true false)
// Boolean() - примусова зміна типу даних
// false повернуть: пустий рядок, цифра нуль,
// undefined, NaN, null

// let someVar = 5 / `Жека`
// console.log(someVar)
// console.log(typeof someVar) // Тип даних
// console.log(Boolean(someVar))
// console.log(typeof Boolean(someVar)) // Тип даних

// Основні методи рядків

// Довжина рядка length

// const someString = `Привіт! Як справи?`
// const someStringLength = someString.length
// console.log(someStringLength)

// Рядок це масив []
// const someString = `Привіт! Як справи?`
// console.log(someString[0])


// Регістр toUpperCase(), toLowerCase()
// let someString = `Привіт! Як справи?`
// let someNewVar = someString.toUpperCase()
// let someNewVar = someString.toLowerCase()
// console.log(someNewVar)

// Пошук - методы includes, startsWith, endsWith

// let someString = `Привіт! Як справи?`
// someString = someString.toUpperCase()
// console.log(someString)

// пошук в усьому рядку
// const searchResult = someString.includes(`ЯК`)
// console.log(searchResult)

// // Починається з
// console.log(someString.startsWith('ив'))
// // Закінчується на
// console.log(someString.endsWith('?'))

// if (someString.includes(`Як`)) {
// 	/// працюємо
// }



// Отримання частини рядка, метод slice(start, end)
// від start (включно) до end

// let someString = `Привіт! Як справи?`
// let someNewString = someString.slice(2, 6)
// console.log(someNewString)


// Пошук та заміна replace(що, на що)
// Буде опрацьована лише перша знахідка

// let someString = `#Привіт! Як справи?`
// someString = someString.replace('#', '')
// console.log(someString)

// Детальніше: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


// Основні методи чисел

// Math.floor() - Округлення в меньшу сторону

// let someNotRoundNum = 25.9
// console.log(Math.floor(someNotRoundNum))


// Math.ceil() - Округлення в більшу сторонуі
// let someNotRoundNum = 25.001
// console.log(Math.ceil(someNotRoundNum))


// Math.round - Округлення до ближнього цілого
// let someNotRoundNum = 25.5
// console.log(Math.round(someNotRoundNum))


// Math.abs - Модуль числа
// let someNotRoundNum = -25.9
// console.log(Math.abs(someNotRoundNum))


// Math.random()
// Рандом числа від 0 до 1
// console.log(Math.random())

// Math.max(a, b, c...) / Math.min(a, b, c...)
// console.log(Math.max(1, 2, -3))
// console.log(Math.min(1, 2, -3))

// let numMax = Math.max(1, 2, -3)
// console.log(numMax)


// parseInt и parseFloat
// let someVar = `35.5px`
// // let someNum = parseInt(someVar)
// let someNum = parseFloat(someVar)
// console.log(someNum)


// Основні оператори
// !!!! Майже всі оператори автоматично
// змінюють тип даних на number

// let varOne = "10"
// let varTwo = "3"

// Оператор мінус (-)
// let varRes = varOne - varTwo
// console.log(varRes)
// console.log(typeof varRes)


// Оператор ділення (/)
// let varRes = varOne / varTwo
// console.log(varRes)
// console.log(typeof varRes)


// Оператор множення (*)
// let varRes = varOne * varTwo
// console.log(varRes)
// console.log(typeof varRes)

// Взяття залишку від ділення (%)
// Приклад varOne-(varTwo*varTwo) = 1
// Приклад 10-(3*3) = 1
// let varRes = varOne % varTwo
// console.log(varRes)
// console.log(typeof varRes)

// Приклад парне / непарне
// let someNum = 6
// let someVar = someNum % 2
// if (someVar === 1) {
// 	console.log(`${someNum} непарне`)
// } else {
// 	console.log(`${someNum} парне`)
// }

// Оператор додавання  (+)
// (!!! Тільки цей оператор (бінарний) НЕ змінює тип даних)
// let varSumm = varOne + varTwo
// console.log(varSumm)
// console.log(typeof varSumm)

// :)
// console.log('2' + '2')

/*
Операнд - чувак(и) який приймає участь в обчисленні
Бінарний оператор - коли є 2 операнда
Унарний оператор - коли є 1 операнд
*/

// Унарний оператор додавання
// Використовується тільки з
// одним операндом (учасником обчислення)

// let varOne = +"10"
// console.log(varOne)
// console.log(typeof varOne)


// Інкремент ++ (збільшує на 1) / декремент -- (зменьшує на 1)
// !!! Працює лише зі змінними

// let someNumOne = 5
// let someNumTwo = 3

// ++someNumOne
// --someNumTwo

// console.log(someNumOne)
// console.log(someNumTwo)


// Існують префіксні (до) та суфіксні (після) методи
// запису Інкремент/декремент

// let someNumOne = 5
// console.log(someNumOne++)
// console.log(someNumOne)



// Комбінація операторів
// let someVar = 10
// someVar = someVar + 5
// console.log(someVar)

// АБО
// someVar += 5
// console.log(someVar)

// let someVar = `Жека`
// someVar += ` `
// if (1) {
// 	someVar += "привіт!"
// } else {
// 	someVar += "пока!"
// }
// console.log(someVar)
