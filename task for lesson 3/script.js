// 1. 
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення 
// нового масиву без повторень. приклад:
const arr = [5, 3, 4, 5, 6, 7, 3];

const compactArr = function (){
    const arr2 = [...new Set(arr)]
    return arr2
};
console.log(compactArr()) ; 

// 2.
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише 
// із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

const startArr = 2;
const endArr = 9;

function createArray(startArr, endArr) {
    let newArr = [];
    for (let i = startArr; i <= endArr; i++ ) {
            newArr.push(i);
    }
    return newArr;
}
console.log (createArray(startArr, endArr))


// 3.
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при 
// цьому a виводится 1 раз, число а+1 - два рази і т.д.

 let a = 1;
 let b = 5;
 
 for (let i = a; i <= b; i++) {
    for (let k = 0; k < i - a + 1; k++) {
      console.log(i);
    }
  }

// 4. 
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. 
// Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]

let randomNumArr = [];
function randArray(k) {
    for (i = 0; i < k; i++) {
        randomNumArr.push (Math.floor(Math.random () * 501))
    };
};

randArray (10);
console.log (randomNumArr);



// 5.
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, 
// але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
//  /* 
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ] 
//  number, string, object

let  someArr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrOfStrings = [];
let arrOfNums = [];

function arrNew (arr) {
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "string"){
            arrOfStrings.push (arr[i]);
        } else if (typeof arr[i] === "number") {
            arrOfNums.push (arr[i]);
        } else if (typeof arr[i] === "object") {
            for (let k = 0; k < arr[i].length; k++ ) {
                if (typeof arr[i][k] === "string"){
                    arrOfStrings.push (arr[i][k]);
                } else if (typeof arr[i][k] === "number") {
                    arrOfNums.push (arr[i][k]);
                };
            };
        };
    };
};
arrNew (someArr);

console.log (arrOfStrings);
console.log (arrOfNums);



// 6.
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc (a, b, op) {
    if (op == 1){
        return a - b
    } else if (op == 2){
        return a * b
    } else if (op == 3){
        return a / b
    } else {
        return a + b
    };
};

console.log (calc(6, 2, 0))

// 7. 
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function findUnique (arr){
    const arr2 = [...new Set(arr)]
    if (arr2.length === arr.length){
        return true
    } else {
        return false 
    };
};

console.log (findUnique([1, 2, 3, 5, 11]));
console.log (findUnique([1, 2, 3, 5, 3]));
 
// ⭐⭐⭐
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true 
// tom("pass_for_tom"); //повертає false
const someString = "pass_for_Tom";
const otherString = "pass_for_tom";
function create (someString) {
    return function () {return (otherString === someString)}
}

console.log (create (someString)());
console.log (create (otherString)());