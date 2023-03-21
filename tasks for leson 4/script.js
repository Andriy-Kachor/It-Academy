// 1.
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа 
// (first и second) – порядкові номери елементів масиву, які необхідно скласти. 
// Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна 
// генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва 
// більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, 
// передбачте обробку можливих винятків.

function sumSliceArray (arr, first, second) {
    try {
        if (typeof first !== "number" || typeof second !== "number"){
        throw new TypeError("Please, enter numbers");
    }
    if (first > arr.length || second > arr.length){
        throw new RangeError("Number are out of the array range!");
    }
    return arr[first] + arr[second];
    } catch (error) {
        console.log(`${error.name} ${error.message}`);
    }
}

console.log (sumSliceArray([1 ,2 ,3 ,4 ,5 ,6 ,7 ,8], " ", 9))



// 2.
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус 
// (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:
// вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty!
// Please enter your age з типом помилки Error). У полі статус введено неправильне слово 
// (тип помилки EvalError).в полі вік введено нечислове значення. 
// У всіх інших випадках користувач отримає доступ до перегляду фільму. 
// У блоці catch передбачена можливість виведення назви та опису помилки.
function checkAge (){
    let userName = prompt("Please enter your username");
    let userAge = Number(prompt("Please enter your age"));
    let roles = ["user", "moderator", "administrator"];
    let userRole = prompt("Please enter your username");

    try {
        if (!userName|| !userAge|| !userRole){
            throw new Error ("The field is empty!")
        }
        if (!roles.includes(userRole)){
            throw new EvalError("Invalid role!");
        }
        if (typeof userAge !== "number"){
            throw new TypeError ("Invalid age!");
        }
        if (userAge < 18 || userAge > 70){
            throw new RangeError("Invalid age!");
        }
    }catch (error){
        return alert (`${error.name}: ${error.message}`)
    }
    return alert(`Welcome ${userName}!`);
};

checkAge ();
// 3.
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина 
//прямокутника width і висота прямокутника height і обраховує його площу. 
// Передбачити припинення виконання програми і генерацію винятку у випадку, 
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

const calcRectangleArea = (width, height) => {
    try {
      const squareOfRectangle = width * height;
      if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Invalid enter!');
      }
      return squareOfRectangle;
    } catch(error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }
  
  console.log(calcRectangleArea(3, " "));

// 4.
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле 
// name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця 
// в році. Функція повертає назву місяця відповідно до введеного номера місяця.
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException 
// з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException{
    constructor(message){
        this.message = message;
        this.name = "MonthException";
    }
};

function showMonthName (month){
    try {
        if (typeof month != "number" || month < 1 || month > 12){
            throw new MonthException("Incorrect month number");
        }
        let monthNames = ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"];
         return monthNames[month - 1];
    } catch (exception) {
        console.log(`${exception.name}: ${exception.message}`);

    }
}

console.log(showMonthName(13));

// 5. 
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, 
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено 
// від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
// в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids)
// повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]



function showUser(id) {
    try {
      if (typeof id !== 'number') {
        throw new Error("Your id must be only a number!");
      }
      if (id < 0) {
        throw new Error("Your id must be more or equal 0");
      }
      let objOfId = {id};
      return objOfId;
      
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }
  
  console.log(showUser("12"))


  function showUsers(ids) {
    let arrOfUsersIds = [];
    for (let i = 0; i < ids.length; i++) {
      try {
        if (ids[i] < 0) {
            throw new Error("id must not be negative");
        }
        let user = showUser(ids[i]);
        arrOfUsersIds.push(user);
      } catch (error) {
        console.log(`${error.name}: ${error.message}`);
      }
    }
    return arrOfUsersIds;
  }

  console.log(showUsers([7, -12, 44, 22]));