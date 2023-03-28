let nameInput = document.querySelectorAll (".array .arr")[0];
let telInput = document.querySelectorAll (".array .arr")[1];
let birthdayInput = document.querySelectorAll (".array .arr")[2];
let emailInput = document.querySelectorAll (".array .arr")[3];
let btn = document.querySelector(".btn")
let outArray = document.querySelector(".out")
console.log(outArray.innerHTML)

btn.addEventListener("click", ()=>{
    outArray.innerHTML = 
    `your full name : ${nameInput.value},
    your phone number : ${telInput.value},
    your birthday : ${birthdayInput.value},
    your email : ${emailInput.value}`;
})