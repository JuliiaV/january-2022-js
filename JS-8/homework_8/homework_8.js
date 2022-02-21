// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
// -- замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById('content');
content.innerHTML = '<b>Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.</b>';

// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'rules' на будь-який інший

let rules = document.getElementById('rules');
rules.innerHTML = '<b>Второе правило Бойцовского клуба: никогда никому не рассказывать о Бойцовском клубе.</b>'

// -- змініть кожному елементу колір фону на червоний

let back = document.body.children;
for (const backE of back) {
    backE.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій

let textColour = document.body.children;
for (const textColourElement of textColour) {
    textColourElement.style.color = 'darkblue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesId = document.getElementById('rules');
console.log(rulesId.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'darkred';
}