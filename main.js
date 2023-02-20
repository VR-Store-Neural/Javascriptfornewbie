// Variables - змінні

// let userName = "Саша";

// console.log(userName);

// Types of variables

// Новий стандарт ES6:

// Let - available

// const - constanta

// Старий стандарт ES5:

// var - variable

// Let - може змінювати значення під час роботи програми

let userName = 'Sasha';

console.log(userName);

userName = 'Mark';

console.log(userName);

// const - не може змінювати значення

const yearOfBirth = 1990;

yearOfBirth = 2000; //(error)

//--------------------------------------

let name, age; //можна об'явити змінну, але не вказувати її значення 
name = 'Yurij';

const professor; // error - треба одразу вказани значення змінної
professor = 'lapux';

// var ------------
// в отличие от Let and const имеет функциональную область видимостиб а не блочную
// не рекомендується для використання
// Може змінювати значення протягом роботи програми

var city = 'Kyiv';
city = 'Lviv'
city = 'Donetsk';

console.log(city);
