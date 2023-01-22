console.log("Selamat Datang di Halaman Website  Multindo Charcoal");
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};
function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}
function inputDigit(digit) {
    calculator.displayNumber += digit;
}
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        inputDigit(target.innerText);
        updateDisplay();
    });
}
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}
function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    }
    else {
        calculator.displayNumber += digit;
    }
}
const buttons = document.querySelectorAll('.button');
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }
        inputDigit(target.innerText);
        updateDisplay();
    });
}
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }
        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }
        if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }
        inputDigit(target.innerText);
        updateDisplay();
    });
}
function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}
function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
        calculator.operator = operator;
        calculator.isWaitForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    }
    else {
        alert('Operator sudah ditetapkan');
    }
}
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
    }
    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }
    else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    calculator.displayNumber = result;
}