// Task 1 
let a = -3;
let b = 0;
let c = 1 ;

a < b < c //false
a < b > c //true


// Task 2 
let x = 1;
let y = 2;

let res1 = x + String (y);
console.log(res1); 
console.log(typeof res1); 

let res2 = Boolean(x) + String (y);
console.log(res2); 
console.log(typeof res2); 

let res3 = Boolean(x + y);
console.log(res3); 
console.log(typeof res3); 

let res4 = String (x) * y;
console.log(res4); 
console.log(typeof res4); 

// Task 3 
let isAdult = prompt("Are you reach a legal age?");
let result = (isAdult >= 18) ? "You are a legal age" : "You are too young";
alert(result);

// Task 4 
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    obj[num] = obj[num]? obj[num] + 1 : 1; 

}
console.log(obj);

let data = 0;
for (let num in obj) {
    if (obj[num] > data){
        data = num;
    }
}
console.log (data);
console.log (typeof data);

let newArr = arr.filter(function (item){
    return item === Number(data);
});
console.log(newArr);

for (let i = 0; i < arr.length; i++){
    if (arr[i] == Number(data)) {
        arr.splice(i, 1)
    };
};
console.log(arr);

// Task 5 
let sideA = Number(prompt("Please enter first side of tringle"));
let sideB = Number(prompt("Please enter second side of tringle"));
let sideC = Number(prompt("Please enter third side of tringle"));
let p = ( sideA + sideB + sideC)/2;
let areaOfTringle = (p * (p - sideA) * (p - sideB) * (p - sideC)) ** (1/2);
let areaOfTringleFixed = areaOfTringle.toFixed(3);
if (isNaN(areaOfTringleFixed)) {
    console.log("Plese enter correct data")
} else { 
    if ( sideA ** 2 == (sideB ** 2) + (sideC ** 2)||
        sideB ** 2 == (sideA ** 2) + (sideC ** 2)||
        sideC ** 2 == (sideB ** 2) + (sideA ** 2)){
        console.log("Congrat your tringle is rectangular!")
        console.log(areaOfTringleFixed);
    } else {
        console.log(areaOfTringleFixed);  
    } 
}

// Task 6
let time = new Date().getHours();
if (time > 23 && time <= 5) {
    alert ("Good night");
} else if (time > 5 && time <= 11) {
    alert ("Good morning");
} else if (time > 11 && time <= 17) {
    alert ("Good day");
} else  {
    alert ("Good evening");
}

let greatings = (time > 23 && time <= 5) ?  alert ("Good night") : (time > 5 && time <= 11) 
? alert ("Good morning") : (time > 11 && time <= 17) ? ("Good day") : ("Good evening");
console.log (greatings);

// Task 7

function calculatinOfsellery (linesOfCode){
    let sellery = 0;
    if (linesOfCode <= 99) {
        sellery = 0;
    } else if (linesOfCode > 100 && linesOfCode <= 200) {
        sellery = 50;
    } else if (linesOfCode > 200 && linesOfCode <= 300) {
        sellery = 100;
    }  else if (linesOfCode > 300 && linesOfCode <= 400) {
        sellery = 150;
    } else if (linesOfCode > 400 && linesOfCode <= 500) {
        sellery = 200;
    } else if (linesOfCode > 500) {
        sellery = 250;
    };
    return sellery;
}

function calculatinOflinesOfCode (sellery){
    let linesOfCode = 0;
    if (sellery > 0 && sellery < 50) {
        linesOfCode = 0;
    } else if (sellery >= 50 && sellery < 100) {
        linesOfCode = 100;
    } else if (sellery >= 100 && sellery < 150) {
        linesOfCode = 200;
    }  else if (sellery >= 150 && sellery < 200) {
        linesOfCode = 300;
    } else if (sellery >= 200 && sellery < 250) {
        linesOfCode = 400;
    } else if (sellery >= 250) {
        linesOfCode = 500;
    };
    return linesOfCode;
}


function calculatinOfFine (timesOfLate) {
    let fineForLate = 0;
    if (timesOfLate >= 3 && timesOfLate < 6) {
        fineForLate = 20;
    } else if (timesOfLate >= 6 && timesOfLate < 9) {
        fineForLate = 40;
    } else if (timesOfLate >= 9 && timesOfLate < 12) {
        fineForLate = 60;
    } else if (timesOfLate >= 12 && timesOfLate < 15) {
        fineForLate = 80;
    } else if (timesOfLate >= 15) {
        fineForLate = 100;
    }
    return fineForLate;
};

// Case 1
// - користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків 
// коду йому треба написати

function  linesOfCode (payment, timesOfLate){
    let sellery = payment - calculatinOfFine (timesOfLate);
    return calculatinOflinesOfCode (sellery);

};

console.log (linesOfCode (200, 3));

// Case 2
// - користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг Порахувати, скільки 
// разів Вася може запізнитися.

function timesOfLate (linesOfCode){
    let posibleTimesOfLate = (calculatinOfsellery (linesOfCode) / 20) * 3;
    return posibleTimesOfLate;
}

console.log (timesOfLate (300));

// Case 3
// - користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей 
// заплатять Васі і чи заплатять взагалі.

function payment (linesOfCode, timesOfLate) {
    let paymentWithOutFine = calculatinOfsellery (linesOfCode) - calculatinOfFine (timesOfLate);
    if (paymentWithOutFine > 0) {
        return paymentWithOutFine;
    } else {
        return "Soory, but you will not get any payment";
    }
    
}

console.log (payment (300, 15));