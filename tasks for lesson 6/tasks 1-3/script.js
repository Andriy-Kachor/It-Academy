// 6. DOCUMENT OBJECT MODEL (DOM)
// 1. 
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
//  У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const list = document.getElementById('list');
const firstItem = list.children[0].textContent; 
const lastItem = list.children[4].textContent;
const secondItem = list.children[1].textContent;
const fourthItem = list.children[3].textContent;
const thirdItem = list.children[2].textContent;
console.log(`${firstItem}, ${lastItem}, ${secondItem}, ${fourthItem}, ${thirdItem}`);

// 2. 
// Для сторінки
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
let header1 = document.body.children[1];
header1.style.backgroundColor = "green";
let firstParagraph = document.getElementById("myDiv").children[0];
firstParagraph.style = "font-weight: bold";
let secondParagraph = document.getElementById("myDiv").children[1];
secondParagraph.style = "color:red";
let thirdParagraph = document.getElementById("myDiv").children[2];
thirdParagraph.style = "text-decoration: underline; color: black";
let fourthParagraph = document.getElementById("myDiv").children[3];
fourthParagraph.style = "font-style: italic";
let myList = document.getElementById("myList");
myList.style = "list-style-type: none";
myList.children[1].style = "display: block; float: left";
myList.children[0].style = "display: block; float: left";
let span = document.getElementsByTagName("span")[0];
span.style = "display: none;";

// 3. 
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку 
// структуру з тегів і їх атрибутів.
// <body>
//   <main class="mainClass"> 
//   check item         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body>

let main = document.createElement ("main");
main.setAttribute("class","mainClass");
main.innerText = "check item";
document.body.appendChild(main);

let myDiv = document.createElement("div");
myDiv.setAttribute("id","myDiv"); 
myDiv.innerText = "check div";
main.appendChild(myDiv);

let myParagraph = document.createElement ("p");
myParagraph.innerText = "First paragraph";
myDiv.appendChild(myParagraph);

