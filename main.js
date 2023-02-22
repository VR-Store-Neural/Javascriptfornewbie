// // ---------------Конкатенация(склеивание) строк и шаблонные строки------------------

// let greeting = 'Hello!';
// let howAreYou = '_How are you?';

// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// // конкатенация 'строка' + 'строка'

// const userName = 'Peter';
// console.log('Hello, ' + userName + '! How are you');

// // конкатенация строки

// const userName2 = 'Vasya';
// console.log(`Hello, ${userName2}! How are you?`);


// // -----------------Functions------------------

// console.log('Hi, dear user!');

// // DRY - don't repeat yourself

// function sayHallo() {
//     console.log('Hi, respected user!');
// }

// sayHallo();
//     sayHallo();
//         sayHallo();
//             sayHallo();

// // fuction decloration (функция может быть вызвана до ее объявления)

//     sayHello(){
//         alert('Bonjour');
//     };

// // fuction expression (функция вызывается только после ее объявления)

//     const sayHello = function() {
//         alert('Bonjour');
//     }

// ---------------Parametrs and arguments for functions---------------

// function sayHi(userName) {
//     console.log(`Hello, ${userName}! How are you? `);
// }

// sayHi('Sasha');
// sayHi('James');
// sayHi('Lotus');


// --------------------return-----------------

// function summ(a,b) {
//     const result = a + b;
//     console.log(result);
// }
// summ(10, 15);

// -------------------------------------------

function summ(a, b) {
    console.log('Start'); // увидим єту строку в консоле
    const result = a + b;
    return result;
    console.log('Finish'); // не увидим єту строку в консоле, так как return заканчивает функцию
}

let res = summ(10, 15);
console.log(res);