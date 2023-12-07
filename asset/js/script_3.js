//Script for mathematical operations
var pointZero = 0;
var output;


// Function for adding one
function addOne() {
    output = pointZero += 1;
    resultPar.innerHTML = output;
    return output;
}

//Function for subtracting
function minusOne() {
    output = pointZero -= 1;
    resultPar.innerHTML = output;
    return output;
}
//Associating the sum to the + button
btnPiu.addEventListener('click', addOne);

//Associating the subtraction to the - button
btnMeno.addEventListener('click', minusOne)

//Resetting the counter
btnNull.addEventListener('click', resetFunc);

function resetFunc() {
    pointZero = 0;
    resultPar.innerHTML = pointZero;
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
    resultPar.innerHTML = pointZero;
    return pointZero;
}

btnExample.addEventListener('click', mathEx);