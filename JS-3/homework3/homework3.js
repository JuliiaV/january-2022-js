// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numb = [5, 15, 85, -10, 1]
// let tape = ['me', 'homework', 'day', 'lesson', 'year']
// let all = [true, 'all', 40, false, 'finally']
// console.log(numb);
// console.log(tape);
// console.log(all)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'Hello'
// arr[1] = 'world'
// arr[2] = 'It`s'
// arr[3] = 'me'
// console.log(arr);
// document.write(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i=0; i<10; i++) {
//     document.write(`<div>arbitrary text</div>`)
// }

// for (let i=0; i<10; i++) {
//     document.write(`<div>arbitrary text with index ${i}</div>`)
// }

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text</h1>`);
//     i++;
// }

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text with index ${i}</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i=0; i<numb.length; i++) {
//     document.write(`<div> ${numb[i]} </div>`)
//     console.log(numb[i])
// }

// let numb = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let i=0; i<numb.length; i++) {
//     document.write(`<div> ${numb[i]} </div>`)
//     console.log(numb[i])
// }

// let numb = ['one', 2, 'three', true, 'five', 6, 'seven', false, 'nine', 'ten'];
// for (let i=0; i<numb.length; i++) {
//     console.log(numb[i])
// }

// let numb = ['one', 2, 'three', true, 'five', 6, 'seven', false, 'nine', 'ten'];
// for (let i = 0; i < numb.length; i++) {
//     if (typeof numb[i] === 'boolean') {
//         console.log(numb[i]);
//     }
// }

// let numb = ['one', 2, 'three', true, 'five', 6, 'seven', false, 'nine', 10];
// for (let i = 0; i < numb.length; i++) {
//     if (typeof numb[i] === 'number') {
//         console.log(numb[i]);
//     }
// }

// let numb = ['one', 2, 'three', true, 'five', 6, 'seven', false, 'nine', 10];
// for (let i = 0; i < numb.length; i++) {
//     if (typeof numb[i] === 'string') {
//         console.log(numb[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let all = [];
// all[0] = 10;
// all[1] = 'one';
// all[2] = false;
// all[3] = -15;
// all[4] = 'lesson';
// all[5] = true;
// all[6] = 6;
// all[7] = 'eight';
// all[8] = 88;
// all[9] = 'ten';
// for (let i = 0; i < all.length; i++) {
//     console.log(all[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('поточний номер -' + ' ' + i);
//     document.write('поточний номер -' + ' ' + i + "<br/>")
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('поточний номер -' + ' ' + i);
//     document.write('поточний номер -' + ' ' + i + "<br/>")
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log('поточний номер -' + ' ' + i);
//     document.write('поточний номер -' + ' ' + i + "<br/>")
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('поточний номер -' + ' ' + i);
//         document.write('поточний номер -' + ' ' + i + "<br/>")
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('поточний номер -' + ' ' + i);
//         document.write('поточний номер -' + ' ' + i + "<br/>")
//     }
// }