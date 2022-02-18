// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

class Person {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

let address = new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496'));

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let company = new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

let person = new Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', address, '1-770-736-8031 x56442', 'hildegard.org', company);
console.log(person);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(titleOfTag, action, ...attributes) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attributes = [];

        for (let i = 0; i < attributes.length; i++) {
            this.attributes.push({titleOfAttr: attributes[i][0], actionOfAttr: attributes[i][1]});
        }
    }
}

const tagA = new Tag ('a',
    `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
    ['accesskey', 'Активация ссылки с помощью комбинации клавиш.'],
    ['title', 'Добавляет всплывающую подсказку к тексту ссылки.']
);

const tagDiv = new Tag ('div',
    `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
    ['align', `Задает выравнивание содержимого тега <div>.`],
    ['title', 'Добавляет всплывающую подсказку к содержимому.']);

const tagH1 = new Tag ('h1',
    `Тег <h1> представляет собой наиболее важный заголовок первого уровня отображается самым крупным шрифтом жирного начертания.`,
    ['align', 'Определяет выравнивание заголовка.']);

const tagSpan = new Tag ('span',
    `Тег <span> предназначен для определения строчных элементов документа.`,
    ['class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'],
    ['style', 'Применяется для определения стиля элемента с помощью правил CSS.']);

const tagInput = new Tag ('input',
    `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.`,
    ['align', 'Определяет выравнивание изображения.'],
    ['disabled', 'Блокирует доступ и изменение элемента.'],
    ['formmethod', 'Сообщает браузеру каким методом следует передавать данные формы на сервер.']);

const tagForm = new Tag ('form',
    `Тег <form> устанавливает форму на веб-странице.`,
    ['action', 'Адрес программы или документа, который обрабатывает данные формы.'],
    ['novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.'],
    ['target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.']);

const tagOption = new Tag ('option',
    `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.`,
    ['disabled', 'Заблокировать для доступа элемент списка.'],
    ['value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.']);

const tagSelect = new Tag ('select',
    `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.`,
    ['autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.'],
    ['size', 'Количество отображаемых строк списка.']);

console.log(tagA);
console.log(tagDiv);
console.log(tagH1);
console.log(tagSpan);
console.log(tagInput);
console.log(tagForm);
console.log(tagOption);
console.log(tagSelect);


