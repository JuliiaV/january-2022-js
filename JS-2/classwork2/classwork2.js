// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let one = +prompt('enter first number');
// let two = +prompt('enter second number');
// if (one > two) {
//     console.log(one)
// } else if (one === two) {
//     console.log('equal numbers')
// } else {
//     console.log(two)
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let entrance = +prompt('Fill in your number');
// if (entrance > 0 && entrance <= 20) {
//     document.write('<h2>First entrance</h2>')
// } else if (entrance > 21 && entrance <= 48) {
//     document.write('<h2>Second entrance</h2>')
// } else if (entrance >=49 && entrance <= 90) {
//     document.write('<h2>Third entrance</h2>')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let numb = 5;
// if (numb === 10) {
//     console.log('RIGHT')
// } else {
//     console.log('WRONG')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('Enter temperature.');
// if (temp >= 10 && temp <=22) {
//     document.write('<h2>Lets go to the office</h2>')
//     console.log('Lets go to the office')
// } else {
//     document.write('<h2>ONLINE Practice</h2>')
//     console.log('ONLINE Practice')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let key = +prompt('Please enter your number and get back a prize.');
// switch (key) {
//     case 1:
//         alert('Congratulation! You win!!!')
//         document.write('<h2>Car - Volvo XC90</h2>')
//         break;
//     case 2:
//         alert('Congratulation! You win!!!')
//         document.write('<h2>Phone - iPhone 13</h2>')
//         break;
//     case 3:
//         alert('Congratulation! You win!!!')
//         document.write('<h2>Bike - Harley Davidson</h2>')
//         break;
//     case  4:
//         alert('Congratulation! You win!!!')
//         document.write('<h2>Weekend - Tour for 2 to Maldives</h2>')
//         break;
//     case 5:
//         alert('Congratulation! You win!!!')
//         document.write('<h2>Grill - Tefal OptiGrill</h2>')
//         break;
//
//     default:
//         alert('Oooops. Something went wrong.')
//         document.write('Unknown number')
// }