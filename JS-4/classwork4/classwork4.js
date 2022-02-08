// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(arg, arg1, arg2) {
//     if (arg < arg1 && arg < arg2) {
//         document.write(arg);
//     } else if (arg1 < arg && arg1 < arg2) {
//         document.write(arg1);
//     } else {
//         document.write(arg2);
//     }
// }
//
// numbers(18, 15, 55);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//
// function numbers(arg, arg1, arg2) {
//     if (arg > arg1 && arg > arg2) {
//         document.write(arg);
//         console.log(arg);
//     } else if (arg1 > arg && arg1 > arg2) {
//         document.write(arg1);
//         console.log(arg1);
//     } else {
//         document.write(arg2);
//         console.log(arg2);
//     }
// }
// numbers(100,95,36);

// - створити функцію яка повертає найбільше число з масиву
//
// let arrayNumb = [55, 94, 11, 4, 7, 130, 554, 81, 7];
//
// function arrayMaxNumber(array) {
//     let maxNum = array[0];
//     for (const number of array) {
//         if (number > maxNum) {
//             maxNum = number;
//         }
//     }
//     return maxNum;
// }
//
// arrayMaxNumber(arrayNumb);


// - створити функцію яка повертає найменьше число з масиву
//
// let arrayNumb = [55, 94, 11, 4, 7, 130, 554, 81, 7];
//
// function arrayMinNumber(array) {
//     let minNum = array[0];
//     for (const number of array) {
//         if (number < minNum) {
//             minNum = number;
//         }
//     }
//     return minNum;
// }
// arrayMinNumber(arrayNumb);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayNumb = [15, 25, 64, 3, 8, 17]; //132
//
// function arrNumbs(limit) {
//     let sum = 0;
//     for (const limitElement of limit) {
//         sum = limitElement + sum;
//     }
//     return sum;
// }
// arrNumbs(arrayNumb);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayNumb = [15, 25, 64, 3, 8, 17]; //22
//
// function arrNumbs(limit) {
//     let sum = 0;
//     for (const limitElement of limit) {
//         sum = limitElement + sum;
//     }
//     return sum / limit.length;
// }
// arrNumbs(arrayNumb);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const num of arguments) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//
//     }
//     console.log(max);
//     return min;
// }
//
// minMax(100, 20, 3, 564, 28);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomizer(size) {
//     let array = [];
//     for (let i = 0; i < size; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     return array;
// }
// console.log(randomizer(25));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomizer(size, limit) {
//     let array = [];
//     for (let i = 0; i < size; i++) {
//         array[i] = Math.round(Math.random() * limit);
//     }
//     return array;
// }
// console.log(randomizer(25, 150));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function array() {
//     let array = [1,2,3,12,22];
//     let arr = [];
//     for (let i = array.length-1, ri = 0; i >= 0; i--, ri++) {
//         arr[ri] = array[i];
//     }
//     return arr;
// }
//
// console.log(array());
