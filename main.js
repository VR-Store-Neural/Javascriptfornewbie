// -------------Objects-----------------

// let userName = 'Mark';
// let age = 33;
// let isMarried = false;

// const person = {            // объявление свойств объекта
//     userName: 'Mark',
//     age: 33,
//     isMarried: false,
//     profession: 'Designer'
// }

// console.log(person);
// console.log(person.userName);
// console.log(person['age']);

// let propertyName = 'profession';
// console.log(person[propertyName]);

// person.profession = 'JS developer'; // добавление свойств объекта
// console.log(person);

// delete person.age; // удаление свойств объекта
// console.log(person);

// ------------Методы в объектах------------

// const person = {
//     userName: 'Klara',
//     age: 33,
//     isMarried: false,
//     sayHi: function () {
//         console.log('Hello!');
//     }
// };

// person.sayHi()

// const human = {
//     userName: 'Klara',
//     age: 33,
//     isMarried: false,
//     sayHi: function () {
//         console.log('Hello!');
//     }
// };

// human.sayHi = function () {
//     console.log('Hi-hi-hi!');
// }
// human.sayHi()

// const girl = {
//     userName: 'Klara',
//     age: 33,
//     isMarried: false,
//     sayHi: function () {
//         console.log('Hello!');
//     }
// };

// girl.sayHi = function (name) {
//     console.log(`Privet, ${name}!`);
// }
// girl.sayHi('Olena');

// const people = {
//     userName: 'Kiki',
//     age: 21,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(`Hello, ${name}!`);
//     }
// }

// people.sayHi('Vasya')


// -------------Ключевое слово this-------------

const people = {
    userName: 'Kiki',
    age: 21,
    isMarried: false,
    sayHi: function (name) {
        console.log(`Hello, ${name}! My name is ${people.userName}.`);
    }
}

people.sayHi('Vasya');

const coala = {
    userName: 'Kiki',
    age: 21,
    isMarried: false,
    sayHi: function (name) {
        console.log(this);
        console.log(`Hello, ${name}! My name is ${this.userName}.`);
    }
}

coala.sayHi('Vasya')