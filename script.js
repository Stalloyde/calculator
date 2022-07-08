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
let functionButtonClicked = false;

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

digitButtons.forEach(item => item.addEventListener("click", function () {
    display.textContent += this.textContent;
    (functionButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);
}))   

divideButton.addEventListener("click", function () {
    functionButtonClicked = true;
    display.textContent = "";
    operatorValue.push("divide");
})

multiplyButton.addEventListener("click", function () {
    functionButtonClicked = true;
    display.textContent = "";
    operatorValue.push("multiply");
})

sumButton.addEventListener("click", function () {
    functionButtonClicked = true;
    display.textContent = "";
    operatorValue.push("sum");
})

subtractButton.addEventListener("click", function () {
    functionButtonClicked = true;
    display.textContent = "";
    operatorValue.push("subtract");
}) 

equalsButton.addEventListener("click", function () {
    display.textContent = "";   
    const solutionValue = operator(operatorValue.toString(), Number(displayValue1.slice(-1)), Number(displayValue2.slice(-1)));
    display.textContent +=  solutionValue;
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    functionButtonClicked = false;
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    displayValue1.push(solutionValue);
})

 





    
