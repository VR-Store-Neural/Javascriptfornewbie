// ----Обход объектов циклом for in (не путать с for of)----

// const person = {
//     userName: 'Marissa',
//     age: 19,
//     isMarried: true,
//     sayHi: function (yourName) {
//         console.log(`Hello, ${yourName}! My name is ${this.userName}.`);
//         },
// };

// for (let key in person) {
//     // console.log(key);
//     console.log(key, ':', person[key]);
// } 

// ------Классы. Конструкторы объектов------------

const person1 = {
    userName: 'Marissa',
    age: 19,
    isMarried: true,
    sayHi: function (yourName) {
        console.log(`Hello, ${yourName}! My name is ${this.userName}.`);
        },
};

console.log(person1);

const person2 = {
    userName: 'Lilloo',
    age: 39,
    isMarried: false,
    sayHi: function (yourName) {
        console.log(`Hello, ${yourName}! My name is ${this.userName}.`);
        },
};

console.log(person2);


// Опишем класс, это как чертеж для всех будущих объектов person, которые будут создаваться на его основе

class Person {
    constructor(userName, age, isMarried) { // описали конструктор
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried; 
    }
    sayHi(name) {
        console.log(`Hallo, ${name}! My name is ${this.userName}.`); // когда описываем метод в классе не пишем function - "sayHi: function (yourName) {console.log(`Hello, ${yourName}! My name is ${this.userName}.`);},"
    }
}

const person3 = new Person('Bobby', 99, false); // создали объект на основе конструктора

console.log(person3);

const person4 = new Person('Milly', 32, true); 

console.log(person4);

person3.sayHi('Marchello');
person4.sayHi('Rosa')

