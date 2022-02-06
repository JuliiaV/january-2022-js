// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }

//     2. перебрати його циклом for

// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// document.write('<ul>');
// for (let i = 0; i < array.length; i++) {
//     document.write(`<li> ${array[i]}</li>`);
// }
// document.write('</ul>');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 1;
// while (i < arrays.length) {
//     let array = arrays[i];
//     console.log(array);
//     i+=2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 1; i < arrays.length; i+=2) {
//     console.log(arrays[i])
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arrays.length) {
//     let array = arrays[i];
//     if (array % 2 === 0) {
//         console.log(array);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arrays.length; i++) {
//     let array = arrays[i];
//     if (array % 2 === 0) {
//     console.log(array)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arrays.length) {
//     let array = arrays[i];
//     if (array % 3 === 0) {
//         document.write(`<div>okten</div>`)
//     } else {
//         document.write(`<div>`)
//         document.write(arrays[i])
//         document.write(`</div>`)
//     }
//     i++;
// }

// 8. вивести масив в зворотньому порядку.

// 8. вивести масив в зворотньому порядку.
// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arrays.length - 1; i >= 0; i--) {
//     let array = arrays[i];
//     console.log(array)
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1.
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i])
//     i--;
// }

// 2. цей варіант (або як я виводила без ul/li через console.log у 8 завданні)
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// document.write('<ul>');
// for (let i = array.length - 1; i >= 0; i--) {
//     document.write(`<li> ${array[i]}</li>`);
// }
// document.write('</ul>');

// 3.
// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arrays.length - 1;
// while (i >= 1) {
//     let array = arrays[i];
//     console.log(array);
//     i-=2;
// }

// 4.
// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arrays.length - 1; i >= 1; i-=2) {
//     console.log(arrays[i])
// }

// 5.
// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arrays.length - 1;
// while (i >= 0) {
//     let array = arrays[i];
//     if (array % 2 === 0) {
//         console.log(array);
//     }
//     i--;
// }

// // 6.
// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arrays.length - 1; i >= 0; i--) {
//     let array = arrays[i];
//     if (array % 2 === 0) {
//     console.log(array)
//     }
// }

// 7.

// let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arrays.length - 1;
// while (i >= 0) {
//     let array = arrays[i];
//     if (array % 3 === 0) {
//         document.write(`<div>okten</div>`)
//     } else {
//         document.write(`<div>`)
//         document.write(arrays[i])
//         document.write(`</div>`)
//     }
//     i--;
// }
/*
			Використовуючи данні з масиву, за допомоги document.write та циклу
			побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
			Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
		    Шаблон застосувати до кожного об'єкта в масиві
			*/
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 8,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

<!--template 2.1-->
// <div>
//     NAME- SURNAME- AGE- INFO- <img src="PHOTO" alt="">
// </div>


// document.write(`<div class="card">`)
// for (let i = 0; i < simpsons.length; i++) {
//     let simpson = simpsons[i];
//     document.write(`<div class="name_surname"><h2>${simpsons[i].name} ${simpsons[i].surname} ${simpsons[i].age}</h2> ${simpsons[i].info}
// <div class="photo"><image><img src="${simpsons[i].photo}" alt="photo"></image></div> </div>`)
// }
// document.write(`</div>`);

// <!--template 2.2-->
// <div>
//     <h2>NAME SURNAME. age is - AGE</h2>
//     <p>INFO</p>
//     <img src="PHOTO" alt="">
// </div>

// document.write(`<div class="card">`)
// for (let i = 0; i < simpsons.length; i++) {
//     let simpson = simpsons[i]
//     document.write(`<div class="name_surname"> <h2>${simpson.name} ${simpson.surname}</h2></div>`);
//     {
//         if (simpson.age < 2) {
//             document.write(`<div class="age"> <h2>${simpson.age} year</h2></div>`)
//         } else {
//             document.write(`<div class="age"> <h2>${simpson.age} years</h2></div>`)
//         }
//     }
//     document.write(`<div class="info"> <p>${simpson.info}</p></div>`);
//     document.write(`<div class="photo"> <image><img src="${simpson.photo}" alt="photo"></image></div>`)
//
// }
// document.write(`</div>`);


/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
    */
// let products = [
//     {
//         title: 'Milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'Juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'Tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'Tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
<!--        template 3.1-->
// <div>
//     <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="" alt="" class="product-image">
//     </div>

// document.write(`<div class="product_card">`)
// for (let i = 0; i < 1; i++) {
//     let product = products[i]
//     document.write(`<div class="product_title"> ${products[0].title} <div>Price - ${products[0].price}</div></div>`)
//     document.write(`<div class="product_image milk"><img src="${products[0].image}" alt="product"></div>`)
//     document.write(`<div class="product_title"> ${products[1].title} <div>Price - ${products[1].price}</div></div>`)
//     document.write(`<div class="product_image juice"><img src="${products[1].image}" alt="product"></div>`)
//     document.write(`<div class="product_title"> ${products[2].title} <div>Price - ${products[2].price}</div></div>`)
//     document.write(`<div class="product_image tomato"><img src="${products[2].image}" alt="product"></div>`)
//     document.write(`<div class="product_title"> ${products[3].title} <div>Price - ${products[3].price}</div></div>`)
//     document.write(`<div class="product_image tea"><img src="${products[3].image}" alt="product"></div>`)
// }
// document.write(`</div>`)