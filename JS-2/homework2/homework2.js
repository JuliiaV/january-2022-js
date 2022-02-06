// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('To check a part, please enter a number.')
// if (time <= 15) {
//     document.write('<h3>Part 1</h3>')
// } else if (time <= 30) {
//     document.write("<h3>Part 2</h3>")
// } else if (time <= 45) {
//     document.write('<h3>Part 3</h3>')
// } else if (time <= 59) {
//     document.write('<h3>Part 4</h3>')
// } else {
//     document.write('')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// варіант 1, якщо половина місяця ~ по 15 днів
// let day = +prompt('Please enter any day of the month.');
// if (day <= 15) {
//     console.log('The first part of the month');
// } else if (day <= 31) {
//     console.log('The second part of the month');
// } else if (day > 31) {
//     console.log('Unknown')
// }

//варіант 2, якщо декада там по 10 днів +-
// let day = +prompt('Please enter any day of the month.');
// if (day <= 10) {
//     console.log('The first part of the month');
// } else if (day <= 20) {
//     console.log('The second part of the month');
// } else if (day <= 31) {
//     console.log('The third part of the month');
// } else  {
//     console.log('Unknown')
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = "";
// if (test === true) {
//     console.log('ВІРНО');
// } else {
//     console.log('НЕВІРНО');
// }
// console.log(!!"right")
// console.log(!!"")

// let a = test === true ? 'Вірно' : 'НЕВІРНО';
// console.log(!!10)
// console.log(!!0)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Введіть число 1, 0, -3');
// (a !== 0) ?  console.log('ВІРНО') : console.log('НЕВІРНО')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let week = +prompt("Ввведіть день тижня. (Тільки цифра)");
// switch (week) {
//     case 1:
//         document.write('<h2>Понеділок</h2></br>' + '1) 09:00-14:00 - робота;</br>' + '2) 15:00-17:00 - йога;</br>' + '3) 17:30 - відпочинок з книгами;');
//         break;
//     case 2:
//         document.write('<h2>Вівторок</h2></br>' + '1) 07:00 - пробіжка;</br>' + '2) 09:00-14:00 - робота;</br>' + '3) 14:30-17:00 - похід по магазинах;');
//         break;
//     case 3:
//         document.write('<h2>Середа</h2></br>' + '1) 07:30 - спа;</br>' + '2) 09:00-14:00 - робота;</br>' + '3) 14:50-18:00 - домашні справи;');
//         break;
//     case 4:
//         document.write('<h2>Четвер</h2></br>' + '1) 07:00 - пробіжка;</br>' + '2) 09:00-14:00 - робота;</br>' + '3) 14:50-16:00 - додаткові заняття;');
//         break;
//     case 5:
//         document.write('<h2>П`ятниця</h2></br>' + '1) 07:00 - зал;</br>' + '2) 09:00-13:00 - робота;</br>' + '3) 13:30 - поїздка в гори;');
//         break;
//     case 6:
//         document.write('<h2>Субота</h2></br>' + 'Весь день лише для відпочинку в горах!')
//         break;
//     case 7:
//         document.write('<h2>Неділя</h2></br>' + '1) 13:00 - повернення додому;</br>' + '2) Підготовка до робочого тижня;')
//         break;
//     default:
//         document.write('unknown')
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Введіть рік');
// (year % 4 === 0) ? console.log('Високосний') : console.log('Не високосний');
// або
// if (year % 4 === 0) {
//     console.log('Високосний')
// } else {
//     console.log('Не високосний')
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let answer = prompt('What is the "official" name of the JavaScript?');
// if (answer === 'ECMAScript') {
//     alert("Wooow")
//     document.write('RIGHT ANSWER!')
// } else {
//     alert("Looooser")
//     document.write('Don`t know? ECMAScript!')
// }