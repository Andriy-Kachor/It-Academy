// Task 2
console.log ("Kachor");

// Task 3
let dogName;
let catName;
dogName = "Rocky";
catName = "Lola";
alert(`${dogName} ${catName}`);
dogName = catName;
alert(`${dogName} ${catName}`);

// Task 4
const obj = {
    String : "Andriy Kachor",
    Number : 25,
    Boolean : true,
    undefined : undefined,
    Null : null,
};

//Task 5

let isAdult = confirm("Are you of legal age");
console.log(isAdult);

// Task 6
let myName = "Andriy";
let mySurname = "Kachor";
let studyGroup = "JS Fundamentals"
let myAge = 25;
let isMarried = false;
let isAndriyJSDeveloper;
let isAndriyFamouseActor = null;

console.log(typeof myAge);
console.log(typeof isMarried);
console.log(typeof myName);
console.log(typeof isAndriyJSDeveloper);
console.log(typeof isAndriyFamouseActor);

// Task 7
let usersLogin = prompt("Please, enter your login");
let usersEmail = prompt("Please, enter your E-mail");
let usersPassword = prompt("Please, enter your Password");

alert(`Dear User, your login is ${usersLogin}, your E-mail is 
${usersEmail}, your password is ${usersPassword}`);

// Task 8

let seconds = 60;
let secondsInHour = seconds * 60;
alert (`${secondsInHour} seconds in hour`);
let secondsInDay = secondsInHour * 24;
alert (`${secondsInDay} seconds in day`);
let secondsInMonth = secondsInDay * 30;
alert (`${secondsInMonth} seconds in month`);


// Task 9

let train = [
        {
            numberOfPlace : 1,
            numberOfStateroom: 1,
            isSidePlace : false,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 2,
            numberOfStateroom: 1,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 3,
            numberOfStateroom: 1,
            isSidePlace : false,
            isBottomPlace : true,
        },
         {
            numberOfPlace : 4,
            numberOfStateroom: 1,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 5,
            numberOfStateroom: 1,
            isSidePlace : true,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 6,
            numberOfStateroom: 1,
            isSidePlace : true,
            isBottomPlace : false,
        },
        {
            numberOfPlace : 7,
            numberOfStateroom: 2,
            isSidePlace : false,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 8,
            numberOfStateroom: 2,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 9,
            numberOfStateroom: 2,
            isSidePlace : false,
            isBottomPlace : true,
        },
         {
            numberOfPlace : 10,
            numberOfStateroom: 2,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 11,
            numberOfStateroom: 2,
            isSidePlace : true,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 12,
            numberOfStateroom: 2,
            isSidePlace : true,
            isBottomPlace : false,
        },
        {
            numberOfPlace : 13,
            numberOfStateroom: 3,
            isSidePlace : false,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 14,
            numberOfStateroom: 3,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 15,
            numberOfStateroom: 3,
            isSidePlace : false,
            isBottomPlace : true,
        },
         {
            numberOfPlace : 16,
            numberOfStateroom: 3,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 17,
            numberOfStateroom: 3,
            isSidePlace : true,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 18,
            numberOfStateroom: 3,
            isSidePlace : true,
            isBottomPlace : false,
        },
        {
            numberOfPlace : 19,
            numberOfStateroom: 4,
            isSidePlace : false,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 20,
            numberOfStateroom: 4,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 21,
            numberOfStateroom: 4,
            isSidePlace : false,
            isBottomPlace : true,
        },
         {
            numberOfPlace : 22,
            numberOfStateroom: 4,
            isSidePlace : false,
            isBottomPlace : false,
        },
         {
            numberOfPlace : 23,
            numberOfStateroom: 4,
            isSidePlace : true,
            isBottomPlace : true,
        },
        {
            numberOfPlace : 24,
            numberOfStateroom: 4,
            isSidePlace : true,
            isBottomPlace : false,
        },

]

let passengerPlace = prompt("Please, enter  number of your place");


let passengerPlaceProperties = train.filter (function (item){
    return item.numberOfPlace == passengerPlace
});

alert (`Your number of stateroom is ${passengerPlaceProperties[0].numberOfStateroom}.
 Is your place is side place: ${passengerPlaceProperties[0].isSidePlace}. 
 Is your place is bottom place: ${passengerPlaceProperties[0].isBottomPlace}. 
 Have a nice trip.`);


