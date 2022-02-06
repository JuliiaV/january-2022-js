// 1 Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let numb = [25, 33, 48, 22, 11, 31, 54, 6, 18, 33];
let result = (25 + 33 + 48 + 22 + 11 + 31 + 54 + 6 + 18 + 33);
numb = result;
console.log(numb);

// 2 Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Harry Potter 1',
    pages: 319,
    genre: "fantasy"
}

// 3 Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
    name: 'Harry Potter 1',
    pages: 319,
    genre: 'fantasy',
    author: 'Joanne Rowling'
}

// 4 Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book3 = [
    {name: 'Harry Potter and the Chamber of Secrets', pages: 252, genre: 'fantasy', author: 'Joanne Rowling'},
    {name: 'The Surgeon', pages: 352, genre: 'detective', author: 'Tess Gerritsen'},
    {name: 'The Last Camellia', pages: 320, genre: 'novel', author: 'Sarah Jio'}
]
console.log(book3[0]);
console.log(book3[1]);
console.log(book3[2]);

// // 5 Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let area = (height * width);
console.log(area)

// 6 Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC, diameterC, PI, radius, volume;
heightC = 10;
diameterC = 4;
PI = 3.14;
radius = 4 / 2;
volume = PI * (radius ** 2) * heightC;
console.log(volume)

// // 7 У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// 1 variant
let leg_n, leg_m, hypot;
leg_n = 3 ** 2;
leg_m = 4 ** 2;

hypot = Math.sqrt(leg_n + leg_m)
console.log(hypot)