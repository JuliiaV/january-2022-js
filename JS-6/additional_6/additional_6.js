// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

//v1
let cutStringStr = (str, n) => {
    let newCutStringToArray = [];
    for (let i = 0; i < str.length; i = i + n) {
        newCutStringToArray.push(str.substr(i, n));
    }
    return newCutStringToArray;
}

console.log(cutStringStr('наслаждение', 3));

//v2
let cutString = (str, n) => {
    let newArray = [];
    while (str.length) {
        newArray.push(str.substring(0, n));
        str = str.slice(n);
    }
    return newArray;
};
console.log(cutString('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let validateEmail = (email) => {

    email = email.toLowerCase().trim();

    let addressWithSymbolAt = email.slice(email.indexOf('@'));
    let symbol = email.split('@')[0];
    let correctAddress = email.split('@')[1];

    if (!email.includes('@')) {
        return false;
    }
    if (email.split('@').length > 2) {
        return false;
    }
    if (email.startsWith('@') || email.endsWith('@')) {
        return false;
    }
    if (email.includes(' ')){
        return false;
    }
    if (!correctAddress.includes('.')) {
        return false;
    }
    if (addressWithSymbolAt.indexOf('.') - addressWithSymbolAt.indexOf('@') <= 2) {
        return false;
    } else if (!checkSymbol(symbol)) {
        return false;
    }

    return true;
}
function checkSymbol(str) {
    let specialSymbols = ['+', '–', '=', '_', '?', '""', '#', '$', '&', '.', ',', '/'];
    let counterSymbols = 0;

    specialSymbols.forEach(symbol => {
        if (str.startsWith(symbol || str.endsWith(symbol))) {
            counterSymbols++;
        }
    })

    return counterSymbols <= 0;
}
validateEmail('some email@gmail.com');
validateEmail('someemailgmailcom');
validateEmail('someemail@gmail.com');
validateEmail(' someeMAIL@gmail.com ');
validateEmail('someeMAIL@i.ua');
validateEmail('some.email@gmail.com');

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sortModules = coursesArray.sort((val1, val2) => val2.modules.length - val1.modules.length);
console.log(sortModules);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

function count(str, stringsearch) {

    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let num = str[i];
        if (num === stringsearch) {
            arr.push(num);
        }
    }
    return arr.length;
}

console.log(count("Астрономия это наука о небесных объектах", 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutStrings = (str, n) => str.split(' ').splice(0, n).join(' ');
console.log((cutStrings("Сила тяжести приложена к центру масс тела", 5)));