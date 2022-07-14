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

function reset () {
    display.textContent = "";
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    operatorButtonClicked = false;
}

digitButtons.forEach(item => item.addEventListener("click", function () {
    //initial round of operations
    display.textContent += this.textContent; 
    (operatorButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);
    
    if //subsequent rounds of operations via equals button
    (equalsButtonClicked === true && operatorButtonClicked === false) { 
        equalsButtonClicked = false;
        solutionValueCheck = false;
        reset();
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
    operatorValue.push("divide");
})

multiplyButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("multiply");
})

sumButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("sum");
})

subtractButton.addEventListener("click", function () {
    display.textContent = "";
    operatorButtonClicked = true;
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("subtract");
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
    }
    console.log(displayValue1)
    console.log(displayValue2)
})

clearButton.addEventListener("click", reset);

//deactivate operatorButtons after click
//add function to delete button. -> detect most recent array element. remove it.
//deactivate decimal point after click
//limit solution value decimal points