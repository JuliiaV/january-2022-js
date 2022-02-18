// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArray = [
    new User(1, 'Nazar', 'Soshak', 'nazar@email.com', +380984524445),
    new User(2, 'Stepan', 'Slhf', 'stpan@email.com', +380985813456),
    new User(3, 'Semen', 'Dfgzfdb', 'semen@email.com', +380506489245),
    new User(4, 'Oleg', 'Sfbxvbc', 'oleg@email.com', +380650231245),
    new User(5, 'Katya', 'Smcjs', 'katya@email.com', +380985625004),
    new User(6, 'Olga', 'Kdkjg', 'olga@email.com', +380988715236),
    new User(7, 'Kolya', 'Bdhnajncynd', 'kolya@email.com', +380971265455),
    new User(8, 'Iryna', 'Tbfmcj', 'iryna@email.com', +380984524544),
    new User(9, 'Ignat', 'Pfcncn', 'ignat@email.com', +380954568974),
    new User(10, 'Mark', 'Admvndhjfu', 'mark@email.com', +380964525545),

]
console.log(userArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = userArray.filter((obj) => {
    if (obj.id % 2 === 0) {
        return obj;
    }
});
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let users = userArray.sort((incr, decr) => decr.id - incr.id);
console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let addClient = [
    new Client(1, 'Nazar', 'Soshak', 'nazar@email.com', +380984524445, ['book', 'video games', 'ps', 'ball']),
    new Client(2, 'Stepan', 'Slhf', 'stpan@email.com', +380985813456, ['mango', 'pineapple', 'banana', 'coconut', 'guava']),
    new Client(3, 'Semen', 'Dfgzfdb', 'semen@email.com', +380506489245, ['doll', 'pineapple', 'banana', 'coconut', 'video games', 'book']),
    new Client(4, 'Oleg', 'Sfbxvbc', 'oleg@email.com', +380650231245, ['pineapple']),
    new Client(5, 'Katya', 'Smcjs', 'katya@email.com', +380985625004, ['pineapple', 'ps']),
    new Client(6, 'Olga', 'Kdkjg', 'olga@email.com', +380988715236, ['doll', 'pineapple', 'banana', 'coconut', 'video games', 'book', 'pineapple', 'ps']),
    new Client(7, 'Kolya', 'Bdhnajncynd', 'kolya@email.com', +380971265455, ['doll', 'pineapple', 'banana']),
    new Client(8, 'Iryna', 'Tbfmcj', 'iryna@email.com', +380984524544, ['banana', 'coconut', 'guava', 'video games', 'book']),
    new Client(9, 'Ignat', 'Pfcncn', 'ignat@email.com', +380954568974, ['mango', 'coconut', 'guava', 'pineapple', 'banana', 'coconut', 'guava']),
    new Client(10, 'Mark', 'Admvndhjfu', 'mark@email.com', +380964525545, ['doll', 'pineapple', 'banana', 'coconut', 'video games']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = addClient.sort((incr, decr) => incr.order.length - decr.order.length);
console.log(sortClients);