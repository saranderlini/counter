var btnStart = document.querySelector('button#btn-start');
var btnDiv = document.querySelector('button#btn-div');
var resultDiv = document.querySelector('div#resultDiv');
var btnPlus = document.querySelector('button#btnPlus');
var btnMinus = document.querySelector('button#btnMinus');
var btnReset = document.querySelector('button#btnReset');

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
//Associating the subtraction to the - button
btnMinus.addEventListener('click', () => {
    minusOne();
})

//Resetting the counter
btnReset.addEventListener('click', () => {
    pointZero = 0;
    resultDiv.innerHTML = pointZero;
    return pointZero;
})

//Associating the sum to the + button
btnPlus.addEventListener('click', () => {
    addOne();
})
