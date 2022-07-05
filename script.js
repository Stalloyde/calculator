//wire up all digits + AC and DEL buttons to display
const buttonItems = document.querySelectorAll(".button-digits");
const display = document.querySelector(".display");
buttonItems.forEach(item => item.addEventListener("click", function () {display.appendChild(this.textContent)}));   
//how to stack the digits instead of replace on each click?
    //change displays text to button text

//add
function add (a,b) {
    return a + b;
}
add(3,4);

//subtract
function subtract (a,b) {
    return a - b;
}
subtract(9,2);

//multiply
function multiply (a,b) {
    return a * b;
}
multiply(3,4);

//divide
function divide (a,b) {
    return a / b;
}
divide(4,2);

function operate (operator,a,b) {
   return operator;
}
operate(subtract(5,4));