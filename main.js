// ------Выбор DOM элементов------

// Выбор одного элемента DOM по селектору
// document.querySeLector('selector');

// document.querySelector('h1')
// document.querySelector('p')
// document.querySelector('.red')
// document.querySelector('.header')
// document.querySelector('#footer')
// document.querySelector('.header .nav . link a')
// document.querySelector('h2')
// document.querySelector('h1')
// document.querySelector('h1')

// const header = document.querySelector('h2');
// console.log(header);

// document.querySelector('h2').classList.add('blue');
// document.querySelector('h1').classList.add('red');

// document.querySelector('.heading-3').classList.add('green');


// ---------document.querySelectorAll-------------

// ----Выбор одного элемента DOM по селектору-----
// const heading2 = document.querySelector('h2');
// heading2.classList.add('red');

// ----Выбор коллекции элемнетов-----
// const headings = document.querySelectorAll('h2');
// console.log(headings);

// headings.classList.add('red-text'); не работает

// for (let item of headings) {
//     console.log(item);
//     item.classList.add('red-text')
// }

// const heading3 = document.querySelector('h3');
// for (let item1 of headings) {
//     item1.classList.add('red-text')
// }

// const paragraphs = document.querySelectorAll('p');
// for (let p of paragraphs) {
//     p.classList.add('green-text');
// }

// paragraphs.forEach(function (item2) {
//     item2.classList.add('green-text');
// })



document.getElementsByClassName('link'); // выбор коллекции элементов по CSS классу (без точки)
document.getElementsByTagName('h2'); // выбор коллекции элементов по Тегу
document.getElementById(header); // выбор одного элемента по ID (без #)

