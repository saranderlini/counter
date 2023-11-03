var btnStart = document.querySelector('button#btn-start');
var btnDiv = document.querySelector('button#btn-div');
var resultDiv = document.querySelector('div#resultDiv');
var btnPlus = document.querySelector('button#btnPlus');
var btnMinus = document.querySelector('button#btnMinus');
var btnReset = document.querySelector('button#btnReset');

var countCont = document.getElementsByClassName('countCont');

//Declaring var for collapsing and functions
var leadCap = document.querySelector('p#lead');
function collapseFunc() {
    btnStart.style.height = '0';
    btnStart.style.visibility = 'collapse';
    
    leadCap.style.display = 'none';
    if(countCont) {
        for(var i = 0; i<= countCont.length; i++) {
            countCont[i].style.visibility = 'visible';
            countCont[i].style.height = 'fit-content';            
        }
    }
//    btnStart.style.visibility = 'collapse';
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