// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     return a * b;
// }
// console.log(area(5,20));
// document.write('Площа прямокутника: ' + area(5, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// variant 1
// function circle(PI, r){
//     let radius = r ** 2;
//     area = PI * radius;
//     return area;
// }
// console.log(circle(3.14, 4))

// variant 2
// function circleArea(r) {
//     let radius = r ** 2;
//     let aCircle = 3.14 * radius;
//     return aCircle;
// }
// console.log(circleArea(4))

// variant 3
// function circle(PI, radius){
//     let circleArea = PI * (radius ** 2);
//     return circleArea;
// }
// console.log(circle(3.14, 4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder(h, r) {
//     let areaResult = 2 * 3.14 * h * r;
//     return areaResult;
// }
//
// areaCylinder(15,10);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = ['New', 'Year', 2022]
// function anArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${array}`)
//         document.write(array[i])
//     }
// }
// anArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     for (let i = 1; i <= 5; i++) {
//         document.write(`<p>${i}. ${text}</p>`)
//     }
// }
// paragraph('Hi. My name is Yulia!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function text (argument) {
//     document.write(`<ul>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`<li>${argument}</li>`)
//     document.write(`</ul>`)
// }
// text('Here you can practise your skills.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function text(argument, arg) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arg; i++) {
//         document.write(`<li>${argument}</li>`)
//     }
//     document.write(`<ul>`)
// }
//
// text('Holla.', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [22, 'UA', 985, true]
//
// function primitive(list) {
//     document.write(`<ol>`);
//     for (let i = 0; i < list.length; i++) {
//         document.write(`<li>${list[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
// primitive(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let anArray = [
//     {id: 1, name: 'Yulia', age: 26,},
//     {id: 2, name: 'Nadia', age: 28,},
//     {id: 3, name: 'Oleg', age: 35,},
//     {id: 4, name: 'Galya', age: 18,},
// ]
//
// function objects(array) {
//     for (const arrays of array) {
//         document.write(`<h2>${arrays.id}. ${arrays.name} - ${arrays.age} years.</h2>`)
//     }
// }
// objects(anArray);