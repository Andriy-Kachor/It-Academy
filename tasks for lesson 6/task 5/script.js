/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали 
поточний атрибут
*/

let circles = document.querySelectorAll(".circle");
console.log(circles);
let zoomInCircle = circles[0].getAttribute("data-anim");
let rotateCircle = circles[1].getAttribute("data-anim");
let translateDownCircle = circles[2].getAttribute("data-anim");
let translateLeftDownCircle = circles[3].getAttribute("data-anim");
let translateRightDownCircle = circles[4].getAttribute("data-anim");


circles[0].classList.add(zoomInCircle);
circles[1].classList.add(rotateCircle);
circles[2].classList.add(translateDownCircle);
circles[3].classList.add(translateLeftDownCircle);
circles[4].classList.add(translateRightDownCircle);
