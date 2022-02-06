// 1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write

// let greeting;
// greeting = 'hello';
// console.log(greeting)
// alert(greeting)
// document.write(greeting)

// let site
// site = 'owu';
// console.log(site)
// alert(site)
// document.write(site)

// let cat;
// cat = 'com'
// console.log(cat)
// alert(cat)
// document.write(cat)

// let country;
// country = 'ua'
// console.log(country)
// alert(country)
// document.write(country)

// let a;
// a = 1
// console.log(a)
// alert(a)
// document.write(a)

// let b;
// b = 10;
// console.log(b)
// alert(b)
// document.write(b)

// let c;
// c = -999;
// console.log(c)
// alert(c)
// document.write(c)

// let d;
// d = 123;
// console.log(d)
// alert(d)
// document.write(d)

// let e;
// e = 3.14;
// console.log(e)
// alert(e)
// document.write(e)

// let f;
// f = 2.7;
// console.log(f)
// alert(f)
// document.write(f)

// let g;
// g = 16;
// console.log(g)
// alert(g)
// document.write(g)

// let h;
// h = 3<6;
// console.log(h)
// alert(h)
// document.write(h)

// let i;
// i = 9>12;
// console.log(i)
// alert(i)
// document.write(i)

// 2 Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let greeting;
// greeting = 'hello'
// greeting = 'hi'
// console.log(greeting)
// alert(greeting)
// document.write(greeting)
//
// let site;
// site = 'owu'
// site = 'owl'
// console.log(site)
// alert(site)
// document.write(site)
//
// let cat;
// cat = 'com'
// cat = 'net'
// console.log(cat)
// alert(cat)
// document.write(cat)
//
// let country;
// country = 'ua'
// country = 'ukraine'
// console.log(country)
// alert(country)
// document.write(country)
//
// let a;
// a = 1;
// a = 4;
// console.log(a)
// alert(a)
// document.write(a)
//
// let b;
// b = 10;
// b = 12;
// console.log(b)
// alert(b)
// document.write(b)
//
// let c;
// c = -999;
// c = -40;
// console.log(c)
// alert(c)
// document.write(c)
//
// let d;
// d = 123;
// d = 111;
// console.log(d)
// alert(d)
// document.write(d)
//
// let e;
// e = 3.14;
// e = 2.56;
// console.log(e)
// alert(e)
// document.write(e)
//
// let f;
// f = 2.7;
// f = 2.5;
// console.log(f)
// alert(f)
// document.write(f)
//
// let g;
// g = 16;
// g = 14;
// console.log(g)
// alert(g)
// document.write(g)
//
// let h;
// h = 3<6;
// h = 4<6;
// console.log(h)
// alert(h)
// document.write(h)
//
// let i;
// i = 9>12;
// i = 13>18
// console.log(i)
// alert(i)
// document.write(i)

// 3 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Yuliia';
// let middleName = 'Igorivna';
// let lastName = 'Voloshchuk';
// let person = (`${firstName} ${middleName} ${lastName}`);
// console.log(person);

// 4 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('Імя', 'Юлія');
// let middleName = prompt('По батькові','Ігорівна');
// let age = prompt('Вік', 26);
// console.log(`Вітаю ${name} ${middleName}. Тобі ${age} років.`);
// або
// console.log("Вітаю"+" "+name+" "+middleName+"."+" "+"Тобі"+" "+age+" "+"років.")
// document.write(middleName + age)


// 5 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// // console.log(typeof a) // number
// console.log(a)
//
// let b = '100'
// // console.log(typeof b) // string
// console.log(b)
//
// let c = true;
// // console.log(typeof true) // boolean
// console.log(c)


// 6 Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!

// 5 ? 6 -> true
// 5<6; - 5 менше 6

// 5 ? 6 -> false
// 5>6; - 5 більше 6

// 5 ? 6 -> false
// 5>=6; - 5 більше дорівнює 6

// 5 ? 6 -> false
// 5===6; - 5 квівалентно 6

// 10 ? 10 -> true
// 10===10; - 10 еквівалентно 10

// 10 ? 10 -> true
// 10>=10; - 10 більше дорівнює 10


// 10 ? 10 -> false
// 10<10; - 10 менше 10

// 10 ? 10 -> false
// 10!==10; - 10 не еквівалентно 10

// 10 ? 10 -> false
// 10>10; - 10 більше 10

// 123 ? '123' -> false
// 123!==123; - 123 не еквівалентно 123

// 123 ? '123' -> true
// 123===123; - 123  еквівалентно 123


// 7 Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let a = 5;

// <br/> тег, який просто переносить елементи на нову лінійку.

document.write(str + a + "<br/>");
// = 205, тут просто додаємо 2 змінні і вони злиються в 1 (str зі значенням 20 і a зі значенням 5 = злитне 205)

document.write(str - a + "<br/>");
// = 15, змінну str зі значенням 20 віднімаємо від змінної a зі значенням 5 = 15;

document.write(str * "2" + "<br/>");
// = 40, змінну str зі знач. 20 множимо на 2 = 40;

document.write(str / 2 + "<br/>");
// = 10, змінну str зі знач. 20 ділимо на 2 = 10;