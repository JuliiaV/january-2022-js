// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Weasley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Weasley'
// let n3 = 'Hermione Granger'


//v1
let name = (string) => {
    const replaceSymbols = string.replaceAll('.', ' ').replaceAll('_', ' ').replaceAll('-', ' ').split(' ');
    let array = [];
    for (const replaceSymbol of replaceSymbols) {
        if (replaceSymbol !== '') {
            array.push(replaceSymbol);
        }
    }
    return array.join(' ');
}
name('Harry..Potter');
name('Ron---Weasley');
name('Hermione__Granger');

//v2
let n1 = 'Harry..Potter';
let n2 = 'Ron---Weasley';
let n3 = 'Hermione__Granger';

let correctName = (string, symbol) => {
    let arrays = [];
    if (string.includes(symbol)) {
        str = string.split(symbol);
        str.forEach((element) => {
            if (element) arrays.push(element)
        })
    }
    console.log(arrays.join(' '));
}
correctName(n1, '.');
correctName(n2, '-');
correctName(n3, '_');

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let newArray = (length, numb) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * numb));
    }
    return array;
};
console.log(newArray(20, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// var1
let array = [10, 1, 18, 55, 23, 14];
let sort = array.sort((numb1, numb2) => {
    return numb1 - numb2;
});
console.log(sort);

// var2
let sortArray = (length, numb) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * numb));
    }
    return array.sort((numb1, numb2) => numb1 - numb2);
};
console.log(sortArray(20, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// v1
let newArrayNumbers = (length, numb) => {
    let array = [];
    for (let i = 0; i <= length; i++) {
        array.push(Math.floor(Math.random() * numb));
    }
    return array.filter(numb => numb % 2 === 0);
};
newArrayNumbers(20, 200);

// v2
let arrayNumbers = [74, 45, 14, 17, 39, 6, 13, 66, 97, 71, 5, 57, 25, 68, 63, 77, 63];
let numbersFilter = arrayNumbers.filter((f) => f % 2 === 0);
console.log(numbersFilter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let newArrayMap = (length, numb) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * numb));
    }
    return array.map(number => number.toString());
};
newArrayMap(20, 100);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

//v1
let arraySortNumbers = [74, 45, 14, 17, 39, 6, 13, 66, 97, 71, 5, 57, 25, 68, 63, 77, 63];
let sortNumbers = arraySortNumbers.sort((n1, n2) => n1 - n2);
console.log(sortNumbers);
let sortNums = arraySortNumbers.sort((n1, n2) => n2 - n1);
console.log(sortNums);

// v2
let sortNumbersArray = (array, direction) => {
    if  (direction === 'ascending') {
        return array.sort((n1, n2) => n1 - n2);
    } else if (direction === 'descending') {
        return array.sort((n1, n2) => n2 - n1);
    }
};
sortNumbersArray([74, 45, 14, 17, 39, 6, 13, 66, 97, 71, 5, 57, 25, 68, 63, 77, 63], 'ascending');
sortNumbersArray([74, 45, 14, 17, 39, 6, 13, 66, 97, 71, 5, 57, 25, 68, 63, 77, 63], 'descending');

// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortDuration = coursesAndDurationArray.sort((val1, val2) => val2.monthDuration - val1.monthDuration);
console.log(sortDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(filter);