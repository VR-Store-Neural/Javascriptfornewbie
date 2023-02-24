// ------Работа с CSS классами------

/*
element.classList.add()
.add()      добавляет CSS класс
.remove()   удаляет CSS класс
.toggle()   переключает CSS класс, то есть добавляет, если класс отсутствует и удаляет, если есть
.contains() возвращает true/false, в зависимости есть такой класс или нет
*/

// const heading = document.querySelector('h2');
// console.log(heading);

// heading.classList.add('red-text');
// heading.classList.remove('red-text');

// heading.classList.toggle('green-text');
// heading.classList.toggle('green');

const heading = document.querySelector('h2');

const result = heading.classList.contains('green');   // результат contains записываем в переменную, и на основании этого выполняем то или иное условие
if (result) {
    
}
