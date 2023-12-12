// reusable function for creating and appending elements
// it takes 4 parameters
function createAndAppend(tagName, parentElement, className, textContent){
    const element = document.createElement(tagName);

    if(className) {
        const classes = className.split(' ');
        element.classList.add(...classes);
    }

    if(textContent){
        element.textContent = textContent;
    }

    if(parentElement) {
        parentElement.appendChild(element);
    }
    return element;
}

//creating elements, passing tagName, parentElement, classes and textContent
const sections = document.querySelectorAll('section');
const counterSec = sections[2];

const divCounter = createAndAppend('div', counterSec);
const resultPar = createAndAppend('p', divCounter, null, '0');

const countWrapOne = createAndAppend('div', divCounter);
const btnPiu = createAndAppend('button', countWrapOne, 'btn btn-default col-3', '+');
const btnMeno = createAndAppend('button', countWrapOne, 'btn btn-default col-3', '-');
const btnNull = createAndAppend('button', countWrapOne, 'btn btn-default col-3', 'Reset');

const countWrapTwo = createAndAppend('div', divCounter);
const btnExample = createAndAppend('button', countWrapTwo, 'btn btn-default d-inline-block text-center mx-auto mt-2 border-light', 'Take me to 4623874692');
const btnBackHome = createAndAppend('button', countWrapTwo, 'btn btn-default d-inline-block text-center mx-auto mt-2 border-light btnNext', 'Back home');

//styling the result paragraph
resultPar.setAttribute('id', 'result');
resultPar.style.color = '#8c84e1';
resultPar.style.fontSize = '2rem';

//buttons
const counterBtns = divCounter.querySelectorAll('button');
counterBtns.forEach((button) => {
    button.setAttribute('type', 'button');
});

//styling div-elements, making them flex and justified centrally
divCounter.childNodes.forEach((item) => {
    item.classList.add('col-12', 'm-auto', 'text-center');
});

countWrapOne.childNodes.forEach((item) => {
    item.classList.add('d-inline-flex', 'justify-content-center', 'col-3');
});

countWrapTwo.childNodes.forEach((item) => {
    item.classList.add('btn', 'btn-default', 'd-inline-block', 'text-center', 'd-flex', 'mx-auto', 'mt-2', 'border-light');
});