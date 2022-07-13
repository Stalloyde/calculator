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
    functionButtonClicked = true;
    display.textContent = "";
}

function reset () {
    display.textContent = "";
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    functionButtonClicked = false;
}

//why arent my numbers concatenating on each other??
digitButtons.forEach(item => item.addEventListener("click", function () {
    display.textContent += this.textContent;
    (functionButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);

    if (equalsButtonClicked === true) {
        reset();
        display.textContent += this.textContent;
        equalsButtonClicked = false;
        (functionButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);
    }
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
}))   

divideButton.addEventListener("click", function () {
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("divide");
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
})

multiplyButton.addEventListener("click", function () {
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("multiply");
})

sumButton.addEventListener("click", function () {
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("sum");
})

subtractButton.addEventListener("click", function () {
    resetDisplay();
    if (displayValue1.length > 0 && displayValue2.length > 0) {getSolution()};
    operatorValue.push("subtract");
}) 

equalsButton.addEventListener("click", function () {
    functionButtonClicked = false;
    equalsButtonClicked = true;
    resetDisplay();
    getSolution();
    console.log(displayValue1)
    console.log(displayValue2)
    console.log(operatorValue)
});

// first condition: equals button clicked -> if click on digit, to start new calculation... empty all arrays and reset all functions.
    // input the new digit clicked into dv1

    //  equals button clicked -> if click on operator, chain operation

// second condition: equals button not clicked. operator button clicked -> solution displayed on screen -> carry over solution number to dV1 
// -> when clicking next number, empty display screen, display screen show next number, push next number clicked to dV2 