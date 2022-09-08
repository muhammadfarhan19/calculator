const buttonNumber = document.querySelectorAll('.btn-num');
const buttonOperator = document.querySelectorAll('.btn-op');
const display = document.querySelector('.display');
const tempDisplay = document.querySelector('.temp-display');
const resultDisplay = document.querySelector('.result-display');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.clear-all');


clearAll.addEventListener('click', () => {
    display.innerHTML = ''
});

buttonNumber.forEach(el => {
    el.addEventListener('click', function(e) {
        tempDisplay.innerHTML += e.target.textContent;
    })
})

buttonOperator.forEach(el => {
    el.addEventListener('click', function(e) {
        tempDisplay.innerHTML += e.target.textContent;
    })
})

equal.addEventListener('click', function(e) {
    resultDisplay.innerHTML = eval(tempDisplay.value)
})

function sum(v) {
    buttonNumber.value+=v;
}

function result() {
    buttonNumber.value = eval(buttonNumber)
}