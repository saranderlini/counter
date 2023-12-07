const sections = document.querySelectorAll('section');
const counterSec = sections[2];

//Div countaining the whole counter
const divCounter = document.createElement('div');

// result paragraph
const resultPar = document.createElement('p');

//wrap for +, -, =, Reset and creation of buttons
const countWrapOne = document.createElement('div');
const btnPiu = document.createElement('button');
const btnMeno = document.createElement('button');
const btnNull = document.createElement('button');

//Wrap for second row, containing BackHome and Example
const countWrapTwo = document.createElement('div');
const btnExample = document.createElement('button');
const btnBackHome = document.createElement('button');

//Editing elements
resultPar.innerHTML = '0';
btnPiu.innerHTML = '+';
btnMeno.innerHTML = '-';
btnNull.innerHTML = 'Reset';
btnExample.innerHTML = 'Take me to 4623874692';
btnBackHome.innerHTML = 'Back home';

//Adding elements to document
counterSec.appendChild(divCounter);
countWrapOne.append(btnPiu, btnMeno, btnNull);
countWrapTwo.append(btnExample, btnBackHome);
divCounter.append(resultPar, countWrapOne, countWrapTwo);

//Setting attributes
resultPar.setAttribute('id', 'result');
resultPar.style.color = '#8c84e1';
resultPar.style.fontSize = '2rem';

const counterBtns = divCounter.querySelectorAll('button');

for(var i = 0; i < counterBtns.length; i++) {
    counterBtns[i].setAttribute('class', 'btn');
    counterBtns[i].classList.add('btn-default');
    counterBtns[i].setAttribute('type', 'button');
}

divCounter.childNodes.forEach((item) => {
    item.classList.add('col-12', 'm-auto', 'text-center');
})

countWrapOne.childNodes.forEach((item) => {
    item.classList.add('d-inline-flex', 'justify-content-center', 'col-3');
})

countWrapTwo.childNodes.forEach((item) => {
    item.classList.add('btn', 'btn-default', 'd-inline-block', 'text-center', 'd-flex', 'mx-auto', 'mt-2', 'border-light')
})

btnBackHome.classList.add('btnNext');