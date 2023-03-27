// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES 
// 1. 
// Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує 
// об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт 
// кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
    constructor(radius, position) {
        this.radius = radius;
        this.position = position;
        this.perimetr = 2 * Math.PI * this.radius;
        this.toString = function () {
            return `Circle: radius = ${this.radius}, perimetr = ${this.perimetr},
            position = ${this.position}`;
        }
        this.copie = function () { 
            return new Circle(this.radius, this.position);
        }
        this.isDotFellIntoTheCirc = function (dot) {
            if (position + dot < position + radius || position + dot < position - radius){
                return true;
            } else {
                return false;
            }
        }
    }
    static calcPerimetr (radius) {
        return 2 * Math.PI * radius;
    }
    static createObjOfCircle (radius, position){
        return new Circle(radius, position);
    } 
}

let a = new Circle(50, 10)

console.log(a.copie())

// 2. 
// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
//  let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// propsCount(mentor);  // 3

let mentor = { 
                course: "JS fundamental", 
                duration: 3,
                direction: "web-development" 
            };
   function propsCount(mentor) {
    let count = 0;
    for (let key in mentor) {
        count++;
    }
    return count;
   };
   console.log(propsCount(mentor)); 
// 3. 
// -  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься
// метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
// - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає 
// параметр year (рік вступу до університету). 
// - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише
// ім’я, прізвище, але і по-батькові (midleName) студента. 
// - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний
// курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити 
// самостійно) і року вступу до ВНЗ.
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4

class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
        this.showFullName = function () {
            return this.name + " " + this.surname;
        }
    }
};

class Student extends Person {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
        this.showFullName = function (midleName) {
            return this.name + " " + this.surname + " " + midleName;
        };
        this.showCourse = function (){
            let currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
        
    };

}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

// 4. 
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% 
// чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера 
// і додавши метод для заправки маркера. Продемонструвати роботу написаних методів

class Marker {
    
    constructor(color, valueOfInk){
        this.color = color;
        this.valueOfInk = valueOfInk;
        this.valuePerSymbol = 0.5;
        if (this.valueOfInk > 100){
            this.valueOfInk = 100;
        }
    }

    printText(someText){
        let printingText = "";
        for (let i = 0; i < someText.length; i++) {
            if (someText[i] !== "" && this.valueOfInk > this.valuePerSymbol){
                printingText += someText[i];
                this.valueOfInk -= this.valuePerSymbol;
            };
        };
        if (this.valueOfInk < this.valuePerSymbol){
            console.log(`Please fill your marker`);
        }
        console.log(`You print: ${printingText} by color: ${this.color}`);
    };
};

class FillingMarkers extends Marker {
    fillMarker (value){
        this.valueOfInk += value;
        console.log (`You fill your marker for ${value}`)
    }
}

let marker1 = new FillingMarkers("red", 3);
marker1.printText("Andriy");
marker1.fillMarker(4);
marker1.printText("Andriy Kachor");
let marker2 = new FillingMarkers("blue", 200)
console.log(marker2.valueOfInk)



// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: 
// fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays 
// (кількість відпрацьованих днів). 
//  1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - 
// це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//  2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як
// додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience().
// Вивести значення зарплати з цим коефіцієнтом.
//  3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5
//  і вивести його на екран.
//  4) Вивести значення зарплати з новим experience.
//  5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в 
// прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню 
// і вивести результат в форматі:   worker_fullName: salary_value 
//  6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584


class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    };
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
    };
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this._experience;
      console.log(`${this.fullName} salary: ${salary}`);
    };
    get showExp() {
      return this._experience;
    };
    set setExp(value) {
      this._experience = value;
    };
  };
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
  
  let workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23),
    ];

for (let i = 0; i < workers.length; i++) {
    workers[i]._expirience = 1.5
}

  const sortedWorkers = [...workers].sort((a, b) => {
    const salaryA = a.dayRate * a.workingDays * a.experience;
    const salaryB = b.dayRate * b.workingDays * b.experience;
    return salaryA - salaryB;
  });
  
  console.log(sortedWorkers);