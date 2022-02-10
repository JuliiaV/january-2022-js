// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника

let area = (a, b) => a * b;
area(5, 20);

// - створити функцію яка обчислює та повертає площу кола

let circle = (PI, radius) => PI * (radius ** 2);
circle(3.14, 4);

// якщо потрібна перевірка
let circleArea = (PI, radius, area) => {
    if (area === '*') {
        return PI * (radius ** 2);
    } else {
        return 0;
    }
};
circleArea(3.14, 4, '*');

// - створити функцію яка обчислює та повертає площу циліндру

let areaCylinder = (h, r) => 2 * 3.14 * h * r;
areaCylinder(15, 10);

// - створити функцію яка приймає масив та виводить кожен його елемент

let newArray = ['New', 'Year', 2022];
let anArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array}`)
        document.write(`${array[i]} `)
    }
};
anArray(newArray);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

const paragraph = (text) => {
    for (let i = 1; i <= 1; i++) {
        document.write(`<p>${i}. ${text}</p>`)
    }
};
paragraph('Hi. My name is Yulia!');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let textElementsLi = (argument) => {
    document.write(`<ul>`)
    document.write(`<li>${argument}</li>`)
    document.write(`<li>${argument}</li>`)
    document.write(`<li>${argument}</li>`)
    document.write(`</ul>`)
};
textElementsLi('Here you can practise your skills.');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let text = (argument, arg) => {
    document.write(`<ul>`);
    for (let i = 0; i < arg; i++) {
        document.write(`<li>${argument}</li>`);
    }
    document.write(`<ul>`);
};
text('hummingbirds', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitivesArray = [22, 'UA', 985, true];

let primitive = (list) => {
    document.write(`<ol>`);
    for (let i = 0; i < list.length; i++) {
        document.write(`<li>${list[i]}</li>`);
    }
    document.write(`</ol>`);
};
primitive(primitivesArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objectList = [
    {id: 1, name: 'Yulia', age: 26,},
    {id: 2, name: 'Nadia', age: 28,},
    {id: 3, name: 'Oleg', age: 35,},
    {id: 4, name: 'Galya', age: 18,},
];

const objects = (array) => {
    for (const arrElement of array) {
        document.write(`<h3>${arrElement.id}. ${arrElement.name} - ${arrElement.age} years.</h3>`);
    }
};
objects(objectList);