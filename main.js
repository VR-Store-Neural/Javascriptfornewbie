// -------------Стрелочные функции-----------------

// function sayHi(name) {
//     console.log(`Hi, ${name}! How are you?`); // decloratin
// }
// sayHi('Marge');


// стрелочный вариант
// const SayHi2 = (name) => {
//     console.log(`Hi, ${name}! How are you?`); 
// }
// SayHi2('Marchello');

// стрелочный вариант, укороченный
// const sayHi3 = (name) => console.log(`Hello, ${name}! What do you need?`);
// sayHi3('Bobby');


// function summ(a, b) {
//     const result = a + b;
// }

// // стрелочный вариант
// const summ = (a, b) => {
//     const result = a + b;
//     return result;
// }

// стрелочный вариант, укороченный
// const summ = (a, b) => a + b;

// const res = summ(10, 30);
// console.log(res);

// ------------------Массивы------------------

// const autoBrands = ['Audi', 5, 'BMW', true, 'Mazda', 'Toyota', ['Vera', 'Nadejda', 'Halo'], 101];

// console.log(autoBrands);

// console.log(autoBrands[0]);

// console.log(autoBrands.length); // возвращает длину массива, кол-во элементов


// -------------Методы массивов---------------

/*
.push() - Додати елемент в кінець масиву(array)
.pop() - Видалити елемент з кінця array
.shift - Видалити елемент з початку array
.unshift - Додати елемент з початку array
.splice([start], [deleteCount, newElemets]) - 
*/

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands);

// autoBrands.push('Nissan');
// console.log(autoBrands);

// autoBrands = [1, 2, 45]; // --error

// let array2 = autoBrands; //array2 == autoBrands - true
// let array3 = ['Audi', 'BMW', 'Mazda', 'Toyota']; //array3 == autoBrands - false

// autoBrands.splice(2, 1);
// console.log(autoBrands);

// ---------------------Циклы-----------------

// console.log('Start');

// for (let i = 0; i < 10; i++) {  // "i++" - увеличение на 1
//     console.log(i);
// }

// console.log('Finish');

// console.log('Start');

// for (let i = 0; true; i++) {  // бесконечный цикл
//     console.log(i);
// }

// console.log('Finish');

// console.log('Start');

// for (let i = 0; i < 10; i = i + 2) { 
//     console.log(i); 
// }

// console.log('Finish');

// --------------Обход массива циклом for-----------------

// const autoBrands = ['Audi','BMW','Mazda','Toyota'];

// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands[4]);
// console.log(autoBrands[5]);

// for (m = 0; m < 5; m++) {
//     console.log(autoBrands[m])
//     console.log(m);
// }

// for (m = 0; m < autoBrands.length; m++) {
//     console.log(autoBrands[m])
//     console.log(m);
// }

// --------------Обход массива циклом for (of)-----------

// const girls = ['masha', 'dasha', 'kasha', 'vasha', 'lasha'];

// for (let girl of girls) {
//     console.log(girl);
// }

// ------Обход массива методом forEach()------------

const flowers = ['Rose', 'Dandelion', 'Sunflower', 'Chamomile'];

flowers.forEach(function (flower, index) {
    console.log(`${flower} => ${index}`);
})

console.log(`----------------`);

flowers.forEach(printFlower);

function printFlower (flower, i) {
    console.log(`${flower} => ${i}`);
}

// flowers.forEach(printFlower());

// function printFlower (flower, i) {
//     console.log(`${flower} => ${i}`);
// }

console.log(`----------------`);

flowers.forEach((flower, i) => console.log(`${flower} => ${i}`));
