// ------Работа с атрибутами------

/*
getAttribute(attrName) - повертає значення вказаного атрибуту
setAttribute(name, value) - додає вказані атрибути та їх значення до елементу
hasAttribute(attrName) повертає true, якщо елемент має вказаний атрибут
removeAttribute(name, force) - видаляє вказаний атрибут

toggleAttribute(name, force) - додає новий атрибут при відсутності чи видаляє існуючий атрибут
hasAttribute() - повертає true, якщо елемент має які-небудь атрибут
getAttributesNames() - повертає назви атрибутів елемента
*/

// const img = document.querySelector('#logo');
// const srcValue = img.getAttribute('src');
// console.log(srcValue);

// img.setAttribute('src', './img/php.png'); // change малюнок на інший з папки
// img.setAttribute('width', '200'); // змінити розмір малюнку

// img.src = './img/js.png'; // зміна малюнку(назад) на js.png
// img.setAttribute('width', '50');

// const button = document.querySelector('#button');
// button.setAttribute('value', 'Slava Ukraine!')
// button.value = "Text for button" // краще так - бо коротше

// ----------Working with event listening---------
// -------- Робота з прослуховуванням подій--------- 

// Будь-яка дія користувача є подією

const button = document.querySelector('#button'); // знаходимо кнопку по id кнопки
const img = document.querySelector('#logo'); // знаходимо малюнок по id лого

button.value = 'delete';
// button.addEventListener('click', function (){
//     console.log('Click');                      // відловлюємо клік

//     img.remove();                              // видаляє малюнок
// })

// button.onclick = function () {
//     console.log('Click!');
//     img.remove();
// }


// button.addEventListener('click', function (){
//     console.log('Click');                     

//     img.setAttribute('width', '50');               // зміна розміру малюнку по кліку              
// })

// addEventListener дозволяє додати декілька обробників для однієї події(event)
// button.addEventListener('click', function (){
//     console.log('Click-1');  
// })     
// button.addEventListener('click', function (){
//     console.log('Click-3'); 
// })
// button.addEventListener('click', function (){
//     console.log('Click-2');   
// })             
           
// onclick - перезаписує значення (в данному випадку)методу

// -----Відслідковування введення тексту у форму-----

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// 1example
// inputText.addEventListener('input', function () {
//     // console.log('Input');
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// })

// 2example
// inputText.addEventListener('input', () => {
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// })

// 3example
// inputText.addEventListener('input', inputHandler);  // Якщо вставити скобки inputText.addEventListener('input', inputHandler());, працювать не буде, бо скобки одразу запустять цю функцію

// function inputHandler () {
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// }


// --------------Об'єкт event---------------

const list = document.querySelector('#list');

// list.addEventListener('click', function () {
//     console.log(this);
// });

// Дізнатись по якому саме об'єкту було здійснено клік
list.addEventListener('click', function (event) {
    console.log(this);
    console.log(event);
    console.log(event.target);
})
