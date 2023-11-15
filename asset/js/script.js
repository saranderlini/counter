//Declaring variables


var title = document.getElementById('title');
let homeDiv = document.querySelector('.home-div');
let btnInstruction = document.getElementById('btn-instruction');
var instructionDiv = document.getElementById('instruction-div');


var btnEx = document.getElementById('btnEx');
var btnStart = document.getElementById('btn-start');
var btnDiv = document.getElementById('btn-div');
var resultDiv = document.getElementById('resultDiv');
var btnPlus = document.getElementById('btnPlus');
var btnMinus = document.getElementById('btnMinus');
var btnReset = document.getElementById('btnReset');
var countCont = document.getElementsByClassName('countCont');
var pointZero = 0;
var output;


// Function for adding one
function addOne() {
    output = pointZero += 1;
    resultDiv.innerHTML = output;
    return output;
}

//Function for subtracting
function minusOne() {
    output = pointZero -= 1;
    resultDiv.innerHTML = output;
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
    resultDiv.innerHTML = pointZero;
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
    resultDiv.innerHTML = pointZero;
    return pointZero;
}

btnEx.addEventListener('click', mathEx);