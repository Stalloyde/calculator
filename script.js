//wire up all digits + AC and DEL buttons to display
const buttonItems = document.querySelectorAll(".button-digits");
const display = document.querySelector(".display");
buttonItems.forEach(item => item.addEventListener("click", function () {display.appendChild(this.textContent)}));   
//how to stack the digits instead of replace on each click?
    //change displays text to button text

function sum (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (operator) {
   console.log(operator);
}
operate(subtract(6,1))