// - Дано натуральное число n. Выведите все числа от 1 до n.

let commonNumber = (n) => {
    const numbersToN = [];
    for (let i = 1; i <= n; i++) {
        console.log(numbersToN.push(i));
    }
    return numbersToN;
}
commonNumber(9);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


let commonNumbers = (increase, decrease) => {
    let numbers = increase;
    if (increase > decrease)  {
        increase = decrease;
        decrease = numbers;
    }
    for (; increase <= decrease ; increase++) {
        console.log(increase)
    }
}
commonNumbers(-10, 10)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let changeObjectIndexToI = (arguments, i) => {
    let change = arguments[i];
    arguments[i] = arguments[i + 1];
    arguments[i + 1] = change;
    return arguments;
}
changeObjectIndexToI([9, 8, 0, 4], 0);
changeObjectIndexToI([9, 8, 0, 4], 1);
changeObjectIndexToI([9, 8, 0, 4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function reverseZero(array) {
    array.reverse();
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            newArray.push(array[i]);
        } else {
            newArray.unshift(array[i]);
        }
    }
    return newArray;
}
reverseZero([1, 0, 6, 0, 3, 22, 11, 0, 8]);