// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.background = 'silver';
div.style.color = 'black';
div.style.fontSize = '50px';
document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));

// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arrays = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const array of arrays) {
    let elementOfArray = document.createElement('li');
    elementOfArray.innerText = array;
    menu.appendChild(elementOfArray)
}

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const courses of coursesAndDurationArray) {
    let coursesElement = document.createElement('div');
    coursesElement.innerHTML = `<b>${courses.title}.</b> </br> MonthDuration - ${courses.monthDuration}. </br></br>`;

    document.body.appendChild(coursesElement);
}

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const courses of coursesAndDurationArray2) {
    let coursesElement = document.createElement('div');
    coursesElement.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = `<i>${courses.title}</i>`;
    h1.style.color = 'darkblue';

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerHTML = `<i>MonthDuration - ${courses.monthDuration}.</i>`;
    p.style.fontSize = '20px'

    coursesElement.appendChild(h1);
    coursesElement.appendChild(p);
    document.body.appendChild(coursesElement);
}