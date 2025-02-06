let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function appendOperator(operator) {
    let lastChar = display.value[display.value.length - 1];
    if (display.value !== "" && !"+-*/".includes(lastChar)) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
