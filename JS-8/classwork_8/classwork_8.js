// 1) Напишіть код, який :

// a) додає клас з назвою групи, елементу з ід main_header

let main_header = document.getElementById('main_header');
main_header.classList.add('group');

// b) робить ширину елементу ul 400px

let ul = document.getElementsByTagName('ul');
ul[0].style.width = '400px';

// c) робить ширину всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');
for (const li of linkList) {
    li.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2');
listElement2[0].innerHTML = '<a href="#"><strong>Content</strong>';

// e) отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.background = 'silver';
    // liElement.style.margin = '2px';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let elementA = document.getElementsByTagName('a');
for (const elementAElement of elementA) {
    elementAElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let getElementA = document.getElementsByTagName('a');
for (const elementAElement of getElementA) {
    if (elementAElement.innerText === 'link3') {
        elementAElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let allElementA = document.getElementsByTagName('a');
for (const allElementAElement of allElementA) {
    let newClass = allElementAElement.innerText;
    allElementAElement.classList.add(`element_${newClass}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let sub_header = document.getElementsByClassName('sub-header');

sub_header[0].style.background = prompt('Enter background color');
sub_header[1].style.background = prompt('Enter background color');

//or
for (const subHeaderElement of sub_header) {
    subHeaderElement.style.background = prompt('Enter background color');
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()

let sub_headerAll = document.getElementsByClassName('sub-header');
for (const subElement of sub_headerAll) {
    if (subElement.innerText === 'content 2 segment') {
        subElement.style.color = prompt('Enter text color');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let getContent_1 = document.getElementsByClassName('content_1');
getContent_1[0].innerText = prompt('Enter text');

// l) отримати елементи p та змінити їм padding на 20px

let pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Приклад sep-2021)

let text2 = document.getElementsByClassName('text2');
text2[0].innerHTML = '<b>dec-2021</b>';