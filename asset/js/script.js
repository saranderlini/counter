var btnStart = document.querySelector('button#btn-start');
var btnDiv = document.querySelector('button#btn-div');
var resultDiv = document.querySelector('div#resultDiv');
var btnPlus = document.querySelector('button#btnPlus');
var btnMinus = document.querySelector('button#btnMinus');
var btnReset = document.querySelector('button#btnReset');

//Declaring var for collapsing and functions
var leadCap = document.querySelector('p#lead');
function collapseFunc() {
    resultDiv.style.visibility = 'visible';
    resultDiv.style.height = 'fit-content';
    btnMinus.style.height = 'fit-content';
    btnMinus.style.visibility = 'visible';
    btnReset.style.height = 'fit-content';
    btnReset.style.visibility = 'visible';
    btnPlus.style.height = 'fit-content';
    btnPlus.style.visibility = 'visible';
    leadCap.style.display = 'none';
    btnStart.style.display = 'none';
}
btnStart.addEventListener('click', collapseFunc);



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
btnReset.addEventListener('click', () => {
    pointZero = 0;
    resultDiv.innerHTML = pointZero;
    return pointZero;
})

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
    }
}