// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
//1 var (виводжу)
// function argumentsNumbers () {
//     let concat = '';
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments.length === 1) {
//             console.log(`${arguments[0]}`);
//          } else if (arguments.length > 1) {
//             console.log(`${arguments[0]} ${concat} ${arguments[1]}`);
//         }
//     }
// }
//
// argumentsNumbers('Hello');
// argumentsNumbers('Hello', 'World');
//
// 2 var (повертаю)
// function argumentsNumbers () {
//     let concat = ' ';
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments.length === 1) {
//             return arguments[0];
//          } else if (arguments.length > 1) {
//             return arguments[0] + concat + arguments[1];
//         }
//     }
// }
//
// argumentsNumbers('Hello');
// argumentsNumbers('Hello', 'World');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// var 1
// function iteratorOfArray() {
//     let array1 = [1, 2, 3, 4];
//     let array2 = [2, 3, 4, 5];
//     let sum = [];
//
//     for (let i = 0; i < array1.length; i++) {
//         sum[i] = array1[i] + array2[i];
//     }
//     return sum;
// }
//
// console.log(iteratorOfArray());
//var 2
// let array1 = [1, 2, 3, 4];
// let array2 = [2, 3, 4, 5];
// let count = [];
//
// function iteratorOfArray(firstArray, secondArray, arr) {
//
//     let summary;
//
//     for (const firstArrayKey in firstArray) {
//         for (const secondArrayKey in secondArray) {
//             if (firstArrayKey === secondArrayKey) {
//                 summary = firstArray[firstArrayKey] + secondArray[secondArrayKey];
//                 arr.push(summary);
//             }
//         }
//     }
//     return arr;
// }
//
// console.log(iteratorOfArray(array1, array2, count));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let arrays = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]
//
// let key = [];
//
// function arraysKey(arr, newArr) {
//
//     newArr = [];
//
//     for (const arrElement of arr) {
//         for (const arrElementKey in arrElement) {
//             newArr.push(arrElementKey);
//         }
//     }
//     return newArr;
// }
//
// arraysKey(arrays, key);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let arrays = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]
// let value = [];
//
// function arraysKey(arr, newArr) {
//
//     newArr = [];
//
//     for (const arrElement of arr) {
//         for (const arrElementKey in arrElement) {
//             newArr.push(arrElement[arrElementKey]);
//         }
//     }
//     return newArr;
// }
// arraysKey(arrays, value);