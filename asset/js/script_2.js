const btnNext = document.querySelectorAll('.btnNext');
let currentSectionIndex = 0;

//create the function to show the current section, while hiding the others

function showCurrentSection() {
    for(let i = 0; i < sections.length; i++) {
        if(i === currentSectionIndex) {
            sections[i].style.display = 'block';
        } else {
            sections[i].style.display = 'none';
        }
    }
}

showCurrentSection();

//adding the event to the buttons, at the end of each section
btnNext.forEach((btnNext) => {
    btnNext.addEventListener('click', () => {
        //when I click, the current sectiond disappears
        sections[currentSectionIndex].style.display = 'none';

        //the next section appears, and if it is the last one, then it goes back to the first one
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;

        //show the current section
        showCurrentSection();
    })
})