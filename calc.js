function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    const display = document.getElementById('display');
    const number = parseFloat(display.value);
    if (!isNaN(number)) {
        display.value = number * number;
    } else {
        display.value = 'Error';
    }
}
