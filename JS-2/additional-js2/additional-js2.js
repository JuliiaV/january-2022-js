// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     console.log('Це великий масив')
// } else {
//     console.log('Це маленький масив')
// }

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let a = +prompt('enter a number');
// let b = +prompt('enter a number');
// let c = +prompt('enter a number');
// if (a > b && a < c) {
//     console.log(a)
// } if (a < b && a > c) {
//     console.log(a)
// } else if (b > a && b < c) {
//     console.log(b)
// } if (b < a && b > c ) {
//     console.log(b)
// } else if (c > a && c < b) {
//     console.log(c)
// } if (c < a && c > b)
//     console.log(c)


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = +prompt('enter number')
// let b = +prompt('enter number')
// let result = (a + b < 4) ? 'Мало' : 'Багато';
// console.log(result)

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let num = +prompt('Введіть число від -100 до +100');
// let count = (num === 0) ? 'Це нуль' : (num >= (-100) && num < 0) ? 'Негативне' : 'Позитивне';
//     console.log(count);