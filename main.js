// -------------Операторы сравнения и условия------------

// > - більше
// < - менше
// >= - більше чи дорівнює
// <= - менше чи дорівнює
// == - несуворе порівняння
// === - суворе порівняння
// != - несувора нерівність
// !== - сувора нерівність

console.log(10 > 5) // true - спочатку виконалось порівняння, а потім у консоль вивелось значення
console.log(20 > 80) // false

let result = 10 < 5 
console.log(result); // false
// Спочатку порівнюється, потім записується у result, потім виводиться у консоль
 
// -------Порівняння( comparison )------------
console.log('5' == 5); // true

console.log('5' === 5); // false

// ------------Операция присвоения ( равно(=) )------------
console.log('10' = 10); 

let number = 5;
console.log(number = 10); // нужно юзать 2равно(==) и 3равно(===)
console.log(number == 10);

let number = 5
if (number = 10) {
    console.log(111)
    console.log(number)
}

// -----------Умови ( if )-----------
/*
if ( condition ) {
    Код, который будет выполнен, если условие верно
} else {
    Код, который будет выполнен, если условие НЕ верно
}
*/

// ---------Example #1------------
const time = 12;

if (time < 12) {
    console.log('Good morning');
}   else {
    console.log('Good afternoon');
}

// --------------Example #2---------------
const time = 21;

if (time < 12) {
    console.log('Good morning');
}   else if (time >= 12 && time < 18) {
    console.log('Good afternoon');
}   else {
    console.log('Good evening');
}

// ----------Логические операторы---------
/*
&& - логическое И (AND) 
|| - логическое ИЛИ (OR)
!true - логическое НЕ (NOT)
*/