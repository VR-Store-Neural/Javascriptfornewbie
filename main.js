// -------------Data types------------

// Текст

let userName = 'Sasha'; // Строка(текст) (Одне слово, фраза, речення, абзац, дуже багато тексту)

// Число

let age = 30; // Число

// Логічне значення true/false

let isMarried = true; 

//Динамічна типізація

let someVaribale = 'Some value'; // someVariable типу String
someVariable = 40; // тепер someVariable типу number
someVariable = true; // тепер someVariable типу BooLean

// Плоганий приклад неймінга
let u = 'bobik';

// Хороший example неймінга
let userName = 'James';

// Значення - null
let height = 33;
height = null;

//undefined
// Означает, что значение не было присвоено
// Если переменная объявлена, но ей не присвоено никакого значения, то ее значение будет undefined
let userCall; 
console.log(userCall);

let someCall = 'Jimmy';
someCall = undefined; // так не делают
someCall = null; // Делают так


// Оператор typeof
const someThing = 'Nora';
console.log(typeof someThing);

// BigInt
// Встроенный объект, который позволяет создавать большие числа
console.log(Number.MAX_SAFE_INTEGER); // максимальне ціле число 9007199254740991

console.log(9007199254740991 + 9007199254740991)

console.log(3845325287358732675256926892365892) // Отобразиться 3.8453252873587325e+33

console.log(3845325287358732675256926892365892n)

console.log(3845325287358732675256926892365892n + 8941418724741) // помилка

// Symbol уникальное примитивное значение
// Позволяет добавлять уникальное свойство к объекту, с увереностью, что он не перезапишет никакое другое свойство 
