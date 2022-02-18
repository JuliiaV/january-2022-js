// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, factory, yearofmanufacture, maxSpeed, engineVolume) {
    this.model = model;
    this.factory = factory;
    this.yearofmanufacture = yearofmanufacture;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.yearofmanufacture = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let newCar = new Cars('Volvo XC90', 'Sweden', 2015, 220, 2.4);
console.log(newCar);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(30);
newCar.drive();
newCar.changeYear(2018);
newCar.info();
newCar.addDriver('Julia');
console.log(newCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, factory, yearofmanufacture, maxSpeed, engineVolume) {
        this.model = model;
        this.factory = factory;
        this.yearofmanufacture = yearofmanufacture;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.yearofmanufacture = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    }
}

let car = new Car('Volvo XC90', 'Sweden', 2015, 220, 2.4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(30);
car.drive();
car.changeYear(2018);
car.info();
car.addDriver('Julia');
console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let cinderellaArr = [
    new Cinderella('Galya', 27, 39),
    new Cinderella('Anna', 18, 35),
    new Cinderella('Nadia', 45, 42),
    new Cinderella('Anastasia', 23, 32),
    new Cinderella('Julia', 26, 38),
    new Cinderella('Olga', 30, 40),
    new Cinderella('Diana', 28, 37),
    new Cinderella('Mariia', 31, 41),
    new Cinderella('Jessica', 29, 34),
    new Cinderella('Maryna', 25, 46)
];
console.log(cinderellaArr);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoesize) {
        this.name = name;
        this.age = age;
        this.shoesize = shoesize;
    }
}

const prince = new Prince('David', 30, 38);
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let royal = (cinderellaArr, prince) => {
    for (const element of cinderellaArr) {
        if (element.footsize === prince.shoesize) {
            return `You find her. It's - ${element.name}!`
        }
    }
};
console.log(royal(cinderellaArr,prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella = cinderellaArr.find((element) => element.footsize === prince.shoesize);
console.log(findCinderella);