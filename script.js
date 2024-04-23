let num1;
let num2;
let operation;
let display = document.querySelector('.display');
let btnNumber = document.querySelectorAll('.number');

let changeNumber = true;

// Нажатие на число
for (let el of btnNumber) {
    el.addEventListener('click', () => {
        if (changeNumber == true) {
            display.innerText = el.innerText;
            changeNumber = false;
        } else {
            display.innerText += el.innerText;
        }
    });
}

//Нажатие на стирание последнего символа
document.querySelector('.delete').addEventListener('click', () => {
    let currentValue = display.innerText;
    // Удаляем последний символ, если текущее значение не пустое
    if (currentValue.length > 0) {
        display.innerText = currentValue.slice(0, -1);
    }
    // Если текущее значение стало пустым, устанавливаем его равным "0"
    if (display.innerText === '') {
        display.innerText = '0';
        changeNumber = true;
    }
});

//Нажатие на кнопку точки
document.querySelector('.decimal').addEventListener('click', () => {
    if (!display.innerText.includes('.')) {
        display.innerText += '.';
        changeNumber = false;
    }
});

// Нажатие на кнопку +/-
document.querySelector('.negate').addEventListener('click', () => {
    let currentValue = +display.innerText;
    // Если число отрицательное, сделать его положительным, и наоборот
    if (currentValue !== 0) {
        display.innerText = currentValue * -1;
    }
});

// Обработчик для кнопки процента
document.querySelector('.percent').addEventListener('click', () => {
    let currentValue = +display.innerText;
    // Превращаем число в процентное значение
    display.innerText = currentValue / 100;
});

//Функция для обработки математической операции
function handleOperation(op) {
    changeNumber = true;
    operation = op;
    num1 = +display.innerText;
}

// Обработчики событий для кнопок операций
document.querySelector('.addition').addEventListener('click', () => handleOperation('+'));
document.querySelector('.subtraction').addEventListener('click', () => handleOperation('-'));
document.querySelector('.division').addEventListener('click', () => handleOperation('/'));
document.querySelector('.multiplication').addEventListener('click', () => handleOperation('*'));

// Обработчик для кнопки равно
document.querySelector('.calculate').addEventListener('click', () => {
    num2 = +display.innerText;
    if (operation == '+') {
        display.innerText = num1 + num2;
    } else if (operation == '-') {
        display.innerText = num1 - num2;
    } else if (operation == '/') {
        display.innerText = num1 / num2;
    } else if (operation == '*') {
        display.innerText = num1 * num2;
    }

    num1 = num2 = operation = undefined;
});

// Нажатие на кнопку C (стирание)
document.querySelector('.clear').addEventListener('click', () => {
    num1 = num2 = operation = undefined;
    display.innerText = '0';
    changeNumber = true;
});
