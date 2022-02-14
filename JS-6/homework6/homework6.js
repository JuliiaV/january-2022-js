// - Знайти та вивести довижину настипних стрінгових значень

let strLength = 'hello world';
console.log(strLength.length);

let strLength2 = 'lorem ipsum';
console.log(strLength2.length);

let strLength3 = 'javascript is cool';
console.log(strLength3.length);

// - Перевести до великого регістру наступні стрінгові значення

let str = 'hello world';
let toUpperCase = str.toUpperCase();
console.log(toUpperCase);

let str1 = 'lorem ipsum';
let toUpperCase1 = str1.toUpperCase();
console.log(toUpperCase1);

let str2 = 'javascript is cool';
let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase2);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let string = 'HELLO WORLD';
let toLowerCase = string.toLowerCase();
console.log(toLowerCase);

let string1 = 'LOREM IPSUM';
let toLowerCase1 = string1.toLowerCase();
console.log(toLowerCase1);

let string2 = 'JAVASCRIPT IS COOL';
let toLowerCase2 = string2.toLowerCase();
console.log(toLowerCase2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
let trim = strDirty.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToArray = str => str.split(' ');
let stringToArr = 'Каждый охотник желает знать';
let arr = stringToArray(stringToArr);
console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => str.slice(0, length);
let stringChar = 'Каждый охотник желает знать';
document.writeln(delete_characters(stringChar, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let dash = "HTML JavaScript PHP";
let insert_dash = string => string.split(' ').join('-').toUpperCase();
console.log(insert_dash(dash))
document.write(`<br>`)
document.write(insert_dash(dash));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let symbolUpper = (string) => {
    if (!string) return string;
    return string[0].toUpperCase() + string.slice(1)
};
document.write(symbolUpper(`<div>Life is good</div> <br>`));
console.log(symbolUpper('Life is good'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = str => str.split(' ').map(symbol => symbol.charAt(0).toUpperCase() + symbol.slice(1)).join(' ');
console.log(capitalize('Life is good'));