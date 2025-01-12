// script.js
function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "0") display.value = value; // Replace 0 with the first input
    else display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Evaluate the mathematical expression
    } catch (error) {
        display.value = "Error";
    }
}
