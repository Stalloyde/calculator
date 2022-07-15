const digitButtons = document.querySelectorAll(".digit-buttons");
const functionButtons = document.querySelectorAll(".function-buttons")
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const percentButton = document.getElementById("percent");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const sumButton = document.getElementById("sum");
const subtractButton = document.getElementById("subtract");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");
const display = document.querySelector(".display");
const displayValue1 = [];
const displayValue2 = [];
const operatorValue = [];
let operatorButtonClicked = false;
let equalsButtonClicked = false;
let solutionValueCheck = false;


function divide (finalValue1, finalValue2) {
    return finalValue1 / finalValue2;
}

function multiply (finalValue1, finalValue2) {
    return finalValue1 * finalValue2;
}
    
function sum (finalValue1, finalValue2) {
    return finalValue1 + finalValue2;
}

function subtract (finalValue1, finalValue2) {
    return finalValue1 - finalValue2;
}    

function operator (operator, num1, num2) {
    if (operator === "divide") {
        return divide(num1, num2);
    } else if 
        (operator === "multiply") {
        return multiply(num1, num2);
    } else if 
        (operator === "sum") {
        return sum(num1, num2);
    } else if 
        (operator === "subtract") {
        return subtract(num1, num2);
    };
}

function getSolution () {
    const solutionValue = operator(operatorValue.toString(), Number(displayValue1.slice(-1)), Number(displayValue2.slice(-1)));
    display.textContent += solutionValue;
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    displayValue1.push(solutionValue);
    solutionValueCheck = true;
 }

function fullReset () {
    display.textContent = "";
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    operatorButtonClicked = false;
}

function inputOperatorValue(operator) {
    if (operatorValue.length === 0) {operatorValue.push(operator)};
}

digitButtons.forEach(item => item.addEventListener("click", function () {
    //initial round of operations
    display.textContent += this.textContent; 
    (operatorButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);

    if //subsequent rounds of operations via equals button
    (equalsButtonClicked === true && operatorButtonClicked === false) { 
        equalsButtonClicked = false;
        solutionValueCheck = false;
        fullReset();
        display.textContent += this.textContent;
        (operatorButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);
    
    } else if //subsequent rounds of operations via operator buttons
    (solutionValueCheck === true) { 
        display.textContent = "";
        display.textContent += this.textContent;
        displayValue2.push(display.textContent)
        solutionValueCheck = false;
    };
}))   

divideButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    inputOperatorValue("divide")
})

multiplyButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    inputOperatorValue("multiply")
})

sumButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    inputOperatorValue("sum")
})

subtractButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    inputOperatorValue("subtract")
}) 

equalsButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = false;
    equalsButtonClicked = true;
    getSolution();
})

deleteButton.addEventListener("click", function () {
    if (displayValue2.length > 0) {
        displayValue2.pop();
        display.textContent = displayValue2.slice(-1);
    } else {
        displayValue1.pop();
        display.textContent = displayValue1.slice(-1);
    };
})

clearButton.addEventListener("click", reset);
decimalButton.addEventListener("click", function () {
    if (!display.textContent.includes(".")) {    
        display.textContent += this.textContent;
    };
})

function disableOperatorButtons (operator) {
    if (operatorValue === operator) {
  
        display.textContent += this.textContent;
    };
    }

//deactivate operatorButtons after click
//limit solution value decimal points