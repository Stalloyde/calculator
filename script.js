const digitButtons = document.querySelectorAll(".digit-buttons");
const functionButtons = document.querySelectorAll(".function-buttons")
const display = document.querySelector(".display");
const displayValue1 = [];
const displayValue2 = [];

//problem is the data storage of first and second wave of input.
digitButtons.forEach(item => item.addEventListener("click", function () {
    display.textContent += this.textContent;
    displayValue1.push(display.textContent); 
    displayValue2.push(display.textContent);
}))   

functionButtons.forEach(item => item.addEventListener("click", function () {
    display.textContent = "";
    //haven't added function sum/subract/multiple/divide
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