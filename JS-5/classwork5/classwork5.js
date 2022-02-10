// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (arg, arg1, arg2) => {
    if (arg < arg1 && arg < arg2) {
        console.log(arg);
    } else if (arg1 < arg && arg1 < arg2) {
        console.log(arg1);
    } else {
        console.log(arg2);
    }
};
minNumber(18,15,55);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (arg, arg1, arg2) => {
    if (arg > arg1 && arg > arg2) {
        console.log(arg);
    } else if (arg1 > arg && arg1 > arg2) {
        console.log(arg1);
    } else {
        console.log(arg2);
    }
};
maxNumber(18,15,55);

// - створити функцію яка повертає найбільше число з масиву

let arrayMax = [55, 94, 11, 4, 7, 130, 554, 81, 7];

let returnArrayMaxNumber = (arrayNumb) => {
    let maxNum = arrayNumb[0];
    for (const number of arrayNumb) {
        if (number > maxNum) {
            maxNum = number;
        }
    }
    return maxNum;
};
returnArrayMaxNumber(arrayMax);

// - створити функцію яка повертає найменьше число з масиву

let arrayMin = [55, 94, 11, 4, 7, 130, 554, 81, 7];

let returnArrayMinNumber = (arrayNumb) =>  {
    let minNum = arrayNumb[0];
    for (const number of arrayNumb) {
        if (number < minNum) {
            minNum = number;
        }
    }
    return minNum;
};
returnArrayMinNumber(arrayMin);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arrayNumber = [15, 25, 64, 3, 8, 17]; //132

let summary = (limit) => {
    let sum = 0;
    for (const limitElement of limit) {
        sum = limitElement + sum;
    }
    return sum;
};
summary(arrayNumber);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrayNumbers = [15, 25, 64, 3, 8, 17];

let arithmeticMean = (limit) => {
    let sum = 0;
    for (const limitElement of limit) {
        sum = limitElement + sum;
    }
    return sum / limit.length;
};
arithmeticMean(arrayNumbers);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (...arguments) => {
    let min = arguments[0];
    let max = arguments[0];
    for (const num of arguments) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }

    }
    console.log(max);
    return min;
};
minMax(100, 20, 3, 100, 2021);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomizer = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
};
console.log(randomizer(25));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let limitRandomizer = (size, limit) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.round(Math.random() * limit));
    }
    return array;
};
limitRandomizer(25, 150);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array = [1,2,3,12,22];
let reverse = (arr) => {
    let reverseArr = [];
    for (let i = array.length - 1, ri = 0; i >= 0; i--, ri++) {
        reverseArr[ri] = arr[i];
    }
    return reverseArr;
};
console.log(reverse(array));
