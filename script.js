const digitButtons = document.querySelectorAll(".digit-buttons");
const functionButtons = document.querySelectorAll(".function-Buttons")
const display = document.querySelector(".display");
const displayValue1 = [];
const displayValue2 = [];

digitButtons.forEach(item => item.addEventListener("click", function () {
    display.textContent += this.textContent;
    displayValue1.push(display.textContent);
}));   


function sum (displayValue1, displayValue2) {
    return displayValue1 + displayValue2;
}

function subtract (displayValue1, displayValue2) {
    return displayValue1 - displayValue2;
}

function multiply (displayValue1, displayValue2) {
    return displayValue1 * displayValue2;
}

function divide (displayValue1, displayValue2) {
    return displayValue1 / displayValue2;
}

function operate (operator) {
   return operator;
}