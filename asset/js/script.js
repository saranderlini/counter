//Declaring variables


var title = document.getElementById('title');
//var leadCap = document.getElementById('lead');

let lead = document.querySelector('.lead');
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



//Declaring for showing of instruction div
/*
function showInstruction() {
//    leadCap.style.display = 'none';
    btnInstruction.style.height = '0';
    btnInstruction.style.visibility = 'collapse';
    btnInstruction.style.padding = '0';

    instructionDiv.style.height = 'fit-content';
    instructionDiv.style.visibility = 'visible';
    instructionDiv.style.display = 'block';
    instructionDiv.style.color = 'rgba(255,255,255,.5)';


    btnStart.style.visibility = 'visible';
    btnStart.style.height = 'fit-content';
    btnStart.style.marginTop = '0.5rem';

}


btnInstruction.addEventListener('click', showInstruction);
*/



//Declaring var for collapsing and functions

/*
function collapseFunc() {
    
    instructionDiv.style.display = 'none';
    btnStart.style.height = '0';
    btnStart.style.visibility = 'collapse';
    btnStart.style.padding = '0';

    title.style.fontSize = '1.75rem';
    btnDiv.style.height = 'fit-content';
    resultDiv.style.fontSize = '6rem'; 
    resultDiv.style.padding = '1rem';
    btnEx.style.fontSize = '1.1rem';
    btnEx.style.marginBottom = '0.2rem';

    if(countCont) {
        for(var i = 0; i<= countCont.length; i++) {
            countCont[i].style.visibility = 'visible';
            countCont[i].style.height = 'fit-content';
        }
    }
}

btnStart.addEventListener('click', collapseFunc);
*/

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