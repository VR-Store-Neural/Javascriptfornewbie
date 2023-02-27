// ---------------Створення та копіювання елементів------------

/*
-- Створити елемент
document.createElement('tag-name')

-- Змінити HTML вміст в середині елементу
element.innerHTML = ''

-- Змінити текстовий вміст в середині елементу
node.innerText = ''

-- Клонування елементу
node.cloneNode() // true з внутрішнім вмістом (текст та теги), false - без внутрішнього вмісту

-- Вставити елемент в середину іншого елемента
element.append(nodesOrDOMStrings)

-- Видалити елемент
element.remove()
*/

// Вибір контейнеру
const container = document.querySelector('#elementsContainer');

// // Створення заголовку
// const newHeader = document.createElement('h1');
// newHeader.textContent = 'New header';
// container.append(newHeader);

// // Клонування шапки без вмісту
// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode()
// container.append(headerCopy);

// // Клонування шапки з вмістом
// const mainHeader1 = document.querySelector('header');
// const headerCopy1 = mainHeader.cloneNode(true)
// container.append(headerCopy1);

// Вставка розмітки через рядки
// const htmlExample = '<h2>One more header</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);
// .insertAdjacentElement - для елементів, створених за допомогою .documentCreateElement
// .insertAdjacentText - для того, щоб додати текст

// Додавання розмітки через шаблонні рядки
const title = 'Header text';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample)