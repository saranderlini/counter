//Script for mathematical operations

//get all the btns other than the last one
const allButLastBtns = Array.from(counterBtns).slice(0, -1);
let pointZero = 0;

allButLastBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent == 'Reset') {
            pointZero = 0;
        } 
        else if (button.textContent == '+') {
            pointZero += 1;
        }
        else if (button.textContent == '-') {
            pointZero -= 1;
        } 
        else if (button.textContent == 'Take me to 4623874692') {
            pointZero = 4623874692;
        }
        updateResult(); 
    })
})

//Associating the maths to arrow keys
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 38:
        case 39:
            pointZero += 1;
            break;
        case 37:
        case 40:
            pointZero -= 1;
            break;
        case 82:
            pointZero = 0;
            break;
        }
    updateResult();
}

function updateResult(){
    resultPar.textContent = pointZero;
    return pointZero;
}
