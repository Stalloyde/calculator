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
 }

function resetDisplay () {
    display.textContent = "";
}

function reset () {
    display.textContent = "";
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    operatorButtonClicked = false;
}

digitButtons.forEach(item => item.addEventListener("click", function () {
    display.textContent += this.textContent;
    (operatorButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);

    if (equalsButtonClicked === true && operatorButtonClicked === false) {
        reset();
        display.textContent += this.textContent;
        equalsButtonClicked = false;
        (operatorButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);
    }
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    console.log(operatorButtonClicked)
}))   

divideButton.addEventListener("click", function () {
    operatorButtonClicked = true;
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("divide");
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    console.log(operatorButtonClicked)
})

multiplyButton.addEventListener("click", function () {
    operatorButtonClicked = true;
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("multiply");
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    console.log(operatorButtonClicked)
})

sumButton.addEventListener("click", function () {
    operatorButtonClicked = true;
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("sum");
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    console.log(operatorButtonClicked)
})

subtractButton.addEventListener("click", function () {
    operatorButtonClicked = true;
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("subtract");
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    console.log(operatorButtonClicked)
}) 

equalsButton.addEventListener("click", function () {
    operatorButtonClicked = false;
    equalsButtonClicked = true;
    resetDisplay();
    getSolution();
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
    console.log(operatorButtonClicked)
});


// second condition: equals button not clicked. operator button clicked -> solution displayed on screen -> carry over solution number to dV1 
// -> when clicking next number, empty display screen, display screen show next number, push next number clicked to dV2 