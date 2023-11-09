let homeDiv = document.getElementById('firstDiv');
btnFirst = document.getElementById('btnInstruction');
btnFirst.classList.toggle('d-block');
let instructionDiv = document.getElementById('instruction-div');
let btnStart = document.getElementById('btn-start');
let counterDiv = document.getElementById('counter-div');
let btnHome = document.getElementById('home');
let btnEx = document.getElementById('btnEx');
let result = document.getElementById('result');
let btnPlus = document.getElementById('btnPlus');
let btnMinus = document.getElementById('btnMinus');
let btnReset = document.getElementById('btnReset');

//Script for displaying the different sections
function hideFirst() {
    homeDiv.style.display = 'none';
    btnFirst.classList.toggle('d-block', false);
    btnFirst.classList.toggle('none', true);
    instructionDiv.style.display = 'block';
}

btnFirst.addEventListener('click', hideFirst);


function hideSecond() {
    instructionDiv.style.display= 'none';
    counterDiv.style.display = 'block';
}
btnStart.addEventListener('click', hideSecond);

function backHome() {
    counterDiv.style.display = 'none';
    homeDiv.style.display = 'block';
    btnFirst.classList.toggle('d-block', true);
}

btnHome.addEventListener('click', backHome);


//Script for mathematical operations
var pointZero = 0;
var output;


// Function for adding one
function addOne() {
    output = pointZero += 1;
    result.innerHTML = output;
    return output;
}

//Function for subtracting
function minusOne() {
    output = pointZero -= 1;
    result.innerHTML = output;
    return output;
}
//Associating the sum to the + button
btnPlus.addEventListener('click', addOne);

//Associating the subtraction to the - button
btnMinus.addEventListener('click', minusOne)

//Resetting the counter
btnReset.addEventListener('click', resetFunc);

function resetFunc() {
    pointZero = 0;
    result.innerHTML = pointZero;
    return pointZero;
}

//Associating the maths to arrow keys
document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 38:
        case 39:
            addOne();
            break;
        case 37:
        case 40:
            minusOne();
            break;
        case 82:
            resetFunc();
            break;
    }
}

function mathEx() {
    pointZero = 4623874692;
    result.innerHTML = pointZero;
    return pointZero;
}

btnEx.addEventListener('click', mathEx);