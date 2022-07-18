//queryselectors
const buttons = document.querySelectorAll(".button-items");
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
display.textContent = "";
let operatorButtonClicked = false;
let equalsButtonClicked = false;
let solutionValueCheck = false;
let digitButtonCheck = false;

//declaring functions
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
    if (operator === "divide" || operator === "/") {
        return divide(num1, num2);
    } else if 
        (operator === "multiply" || operator === "*") {
        return multiply(num1, num2);
    } else if 
        (operator === "sum" || operator === "+") {
        return sum(num1, num2);
    } else if 
        (operator === "subtract" || operator === "-") {
        return subtract(num1, num2);
    };
}

function getSolution () {
    if (displayValue1.length > 0 && displayValue2.length > 0) {
        const solutionValue = operator(operatorValue.toString(), Number(displayValue1.slice(-1)), Number(displayValue2.slice(-1)));
        display.textContent += solutionValue;
        displayValue1.length = 0;
        displayValue2.length = 0;
        operatorValue.length =  0;
        displayValue1.push(solutionValue);
        solutionValueCheck = true;
        console.log(solutionValue)
    };
 }

function fullReset () {
    display.textContent = "";
    displayValue1.length = 0;
    displayValue2.length = 0;
    operatorValue.length = 0;
    operatorButtonClicked = false;
    equalsButtonClicked = false;
    solutionValueCheck = false;
    digitButtonCheck = false;
}

function inputOperatorValue (operator) {
    if (operatorValue.length === 0) {operatorValue.push(operator)};
}

function getOperatorValue(operator) {
    if (digitButtonCheck === true) {
        display.textContent = "";
        operatorButtonClicked = true;
        getSolution();
        inputOperatorValue(operator);
        digitButtonCheck = false;
    };
}

function getDisplayValue () {
    (operatorButtonClicked === true) ? displayValue2.push(display.textContent) : displayValue1.push(display.textContent);   
}

function limitDisplay () {
    if (display.textContent.length > 12) {
        display.textContent = display.textContent.substring(0,12);
    }
} 

function updateDisplay (content) {
    //initial round of operations
    limitDisplay();
    display.textContent += content;
    getDisplayValue();
    digitButtonCheck = true;

    if //subsequent rounds of operations via equals button
    (equalsButtonClicked === true && operatorButtonClicked === false) { 
        fullReset();
        display.textContent += content;
        getDisplayValue();
        equalsButtonClicked = false;
        solutionValueCheck = false;
        digitButtonCheck = true;

    } else if //subsequent rounds of operations via operator buttons
    (solutionValueCheck === true) { 
        display.textContent = "";
        display.textContent += content;
        getDisplayValue();
        solutionValueCheck = false;
        digitButtonCheck = true;
    };
}

//start of eventlisteners
buttons.forEach(item => item.addEventListener("click", function () {
    item.classList.add("clicked");
    item.addEventListener("transitionend", function () {item.classList.remove("clicked")});
}))

digitButtons.forEach(item => item.addEventListener("click", function () {
    updateDisplay(this.textContent);
}))

divideButton.addEventListener("click", function () {
    getOperatorValue("divide");
})

multiplyButton.addEventListener("click", function () {
    getOperatorValue("multiply");
})

sumButton.addEventListener("click", function () {
    getOperatorValue("sum");
})

subtractButton.addEventListener("click", function () {
    getOperatorValue("subtract");
}) 

equalsButton.addEventListener("click", function () {
    display.textContent = "";
    getSolution();
    equalsButtonClicked = true;
    operatorButtonClicked = false;

    if (solutionValueCheck === false) {
    display.textContent = "ERROR";
    }
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

clearButton.addEventListener("click", fullReset);

//keyboard support
document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            updateDisplay(e.key);
            break;
        case "/":
        case "*":
        case "+":
        case "-":
            getOperatorValue(e.key);
            break;
        case "=":
        case "Enter":
            display.textContent = "";
            getSolution(); 
            equalsButtonClicked = true;
            operatorButtonClicked = false;

            if (solutionValueCheck === false) {
            display.textContent = "ERROR";
            }
            break;
        case "Delete":
        case "Backspace":     
            if (displayValue2.length > 0) {
                displayValue2.pop();
                display.textContent = displayValue2.slice(-1);
            } else {
                displayValue1.pop();
                display.textContent = displayValue1.slice(-1);
            }
            break;
        case "Escape":
            fullReset();
            break;
    };
})