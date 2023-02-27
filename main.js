// ---------------ToDo список задач------------

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', formHandler);

// function formHandler(event) {
//     event.preventDefault(); // відміна стандартної поведінки
//     // console.log('Submit!');

//     // Отримаємо назву задачі з поля вводу(input)
//     const taskText = todoInput.value
//     // console.log(taskText);

//     // Створимо тег <li> через розмітку
//     const li = `<li>${taskText}</li>`;
//     // console.log(li);

//     // Додаємо розмітку на сторінку
//     todoList.insertAdjacentHTML('beforeend', li);

//     // Очищення поля введення
//     todoInput.value = '';

//     // Перенесення focus на поле введення
//     todoInput.focus();
// }

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    const taskText = todoInput.value;
    
    // Створюємо тег li за допомогою створення елементу. Плюсом цього способу є можливість додати event для цього елементу
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    
    // Створюємо кнопку Delete
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    // Додаємо подію на сторінку
    // 1example
    deleteBtn.addEventListener('click', function () {
        this.closest('li').remove();
    });
    // 2example  
    // deleteBtn.addEventListener('click', (event) => event.target.closest('li').remove());

    // Додаємо елемент на сторінку
    todoList.append(newTask);

    todoInput.value = '';
    todoInput.focus();
}

