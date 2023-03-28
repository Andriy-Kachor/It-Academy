//6. Реалізувати логіку підрахунку ціни товару по його варіаціях(
// шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

let colorBtnConteiner = document.querySelector(".colors");
let price = document.getElementById("outprice");
colorBtnConteiner.addEventListener("click", (event) => {changeColor(event); findPrice ()});
let sizeBtnConteiner = document.querySelector(".sizes");
sizeBtnConteiner.addEventListener("click", (event) => {changeSize(event); findPrice ()});


function changeColor (event) {
    if (event.target.classList.contains("color")){
        // change active button
        let activeColor = document.querySelector(".colors .active");
        activeColor.classList.remove("active");
        event.target.classList.add("active");

        // change gradient color
        let activeGradient = document.querySelector(".gradients .second");
        activeGradient.classList.remove("second");
        let gradients = document.querySelectorAll(".gradient");
        for (let i = 0; i < gradients.length; i++){
            if (event.target.getAttribute("color") === gradients[i].getAttribute("color")){
                gradients[i].classList.add("second")
            }       
        }
        // change shoes color
        let activeShoes = document.querySelector(".shoeConteiner .show");
        activeShoes.classList.remove("show");
        let allShoes = document.querySelectorAll(".shoe");
        for (let i = 0; i < allShoes.length; i++){
            if (event.target.getAttribute("color") === allShoes[i].getAttribute("color")){
                allShoes[i].classList.add("show")
            }       
        }
        
    } 
}

function changeSize(event) {
    if (event.target.classList.contains("size-shoe")){
        let activeSize = document.querySelector(".sizes .active");
        activeSize.classList.remove("active");
        event.target.classList.add("active");
    }

}

function findPrice (){
    let activeColor = document.querySelector(".colors .active")
    let priceForColor = activeColor.getAttribute("data-price");
    let activeSize = document.querySelector(".sizes .active");
    let priceForSize = activeSize.getAttribute("data-price");
    price.innerText = (Number(priceForColor) + Number(priceForSize)) + "$";
    
}
