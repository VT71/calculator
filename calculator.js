let operand1 = false;
let operand2 = false;
let lastOperation = false;
let numberInput;

document.addEventListener("DOMContentLoaded", function () {
    startCalculator();
});

function startCalculator() {
    const rowDivs = document.querySelectorAll(".row");
    rowDivs.forEach((element) => {
        element.addEventListener("click", buttonClick);
    });
}

function buttonClick(event) {
    numberInput = document.querySelector(".number-input");
    const buttonInput = event.target.innerText;
    if (!isNaN(buttonInput)) {
        if (parseInt(numberInput.value) === 0) {
            numberInput.value = parseInt(buttonInput);
        } else {
            numberInput.value += parseInt(buttonInput);
        }
    } else if (buttonInput === "C") {
        lastOperation = false;
        operand1 = 0;
        operand2 = 0;
        numberInput.value = "0";
    } else if (buttonInput === "←") {
        if (numberInput.value.length === 1) {
            numberInput.value = "0";
        } else {
            numberInput.value = numberInput.value.substring(
                0,
                numberInput.value.length - 1
            );
        }
    } else if (buttonInput === "÷") {
        operation("÷");
    } else if (buttonInput === "x") {
        operation("x");
    } else if (buttonInput === "-") {
        operation("-");
    } else if (buttonInput === "+") {
        operation("+");
    } else if (buttonInput === "=") {
        if (lastOperation != false) {
            operand2 = numberInput.value;
            numberInput.value = calculate(lastOperation);
            operand1 = 0;
            operand2 = 0;
            lastOperation = false;
        }
    }
}

function calculate(lastOperation) {
    if (lastOperation === "÷") {
        return parseInt(operand1) / parseInt(operand2);
    } else if (lastOperation === "x") {
        return parseInt(operand1) * parseInt(operand2);
    } else if (lastOperation === "-") {
        return parseInt(operand1) - parseInt(operand2);
    } else if (lastOperation === "+") {
        return parseInt(operand1) + parseInt(operand2);
    } else {
        return 0;
    }
}

function operation(operation) {
    if (lastOperation != false) {
        operand2 = numberInput.value;
        operand1 = calculate(lastOperation);
        operand2 = 0;
        lastOperation = operation;
    } else {
        operand1 = numberInput.value;
        lastOperation = operation;
    }
    numberInput.value = "0";
}
