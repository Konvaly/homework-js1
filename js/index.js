// /*Таски на переменные:
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения. */

const a = 7;
const b = 10;
console.log("a*b =", a * b);

// /* 2) Создайте две переменные c и d. Выведите в консоль результат деления. */

const c = 320;
const d = 5;
console.log("c/d =", c / d);

// /* 3) Создайте две переменные e и f. Выведите в консоль результат сложения. */

const e = 482;
const f = 86;
console.log("e+f =", e + f);

// /* 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль */

const numberValue = 11;
console.log("numberValue :>> ", numberValue);

const booleanValue = true;
console.log("booleanValue :>> ", booleanValue);

const stringValue = "java script";
console.log("stringValue :>> ", stringValue);

const stringValue2 = "100";
console.log("stringValue2 :>> ", stringValue2);

// /* 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num - 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num - 1;  */

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// /* Таски на prompt:
//    1) Запросить число у пользователя, возвести его в квадрат и вывести */

const numberValue1 = Number(prompt("Input your number: "));
const numberSquare = numberValue1 ** 2;
alert("The square of your number is " + numberSquare);

// /* 2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя. */

const userNumber1 = Number(prompt("Input first number: "));
const userNumber2 = Number(prompt("Input second number: "));
const numberAverage = (userNumber1 * userNumber2) / 2;
alert("The arithmetic mean of your numbers is " + numberAverage);

// /* 3) Перевести число минут в секунды. Число спрашивать у пользователя. */

const numberMinute = Number(prompt("Input the number of minutes: "));
const numberSecond = numberMinute * 60;
alert("The number of seconds is: " + numberSecond);

// /* 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'. */

const greeting = "Hello, ";
const userName = prompt("Input your name: ");
alert(greeting + userName + "!");

// /* Таски на условия:
//    1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'. */

const valueCheck = prompt("Введите переменную: ");
if (valueCheck === "10") {
  alert("Верно");
} else {
  alert("Неверно");
}

// /* 2) Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false. */

const test = true;
if (test) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

const test1 = true;
if (!test1) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// /* 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер. */

const sumPurchase = Number(prompt("Input sum of your purchase: "));
if (sumPurchase > 800) {
  alert("Your discount is 5%! It's  " + sumPurchase * 0.95);
} else if (sumPurchase > 500 && sumPurchase < 800) {
  alert("Your discount is 3%! It's  " + sumPurchase * 0.97);
} else {
  alert("You are inputting not a number. Please input a number");
}

/* Таски на циклы. Каждую задачу решить всеми тремя циклами!
   1) Вывод чисел от 25 до 0 (порядок уменьшения) */

// Цикл "while"
const value = 0;
let valueNumber = 25;
while (valueNumber >= value) {
  console.log(valueNumber);
  valueNumber--;
}

// Цикл "for'
for (let i = 25; i >= 0; i--) {
  console.log("i :>> ", i);
}

// Цикл "do while"
let serialNumber = 25;
do {
  console.log("serialNumber :>> ", serialNumber);
  serialNumber--;
} while (serialNumber >= 0);

// /* 2) Вывод чисел от 10 до 50, которые кратны 5 */

// Цикл "while"
const value1 = 50;
let valueNumber1 = 10;
while (valueNumber1 <= value1) {
  console.log(valueNumber1);
  valueNumber1 = valueNumber1 + 5;
}

// Цикл "for"
for (let i = 10; i <= 50; i = i + 5) {
  console.log("i :>> ", i);
}

// Цикл "do while"
let serialNumber1 = 10;
do {
  console.log("serialNumber1 :>> ", serialNumber1);
  serialNumber1 = serialNumber1 + 5;
} while (serialNumber1 <= 50);

// /* 3) Найти сумму чисел в пределах от 1 до 100. */

// Цикл "while"
let k = 1;
let result = 0;
while (k <= 100) {
  result = result + k;
  k++;
}
console.log("result :>> ", result);

// Цикл "for'
let result1 = 0;
for (let i = 1; i <= 100; i++) {
  result1 = result1 + i;
}
console.log("result1 :>> ", result1);

// Цикл "do while"
let k1 = 1;
let result2 = 0;
do {
  result2 = result2 + k1;
  k1++;
} while (k1 <= 100);
console.log("result2 :>> ", result2);

// /* 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит */

// Цикл "while"
const wantedValue = 6;
let exampleSolution;
while (wantedValue !== exampleSolution) {
  exampleSolution = Number(prompt("Please solve an example (2 + 2 * 2): "));
}
alert("This is the correct answer!");

// Цикл "for"

for (let i = 0; i !== 6; ) {
  i = Number(prompt("Please solve an example (2 + 2 * 2): "));
}
alert("This is the correct answer!");

// Цикл "do while"
const wantedValue2 = 6;
let exampleSolution2;
do {
  exampleSolution2 = Number(prompt("Please solve an example (2 + 2 * 2): "));
} while (exampleSolution2 !== wantedValue2);
alert("This is the correct answer!");
