import Quill from 'quill';

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


const quill = new Quill('#editor', {
  theme: 'bubble',
  placeholder: 'Start writing... I\'m sure it\'ll be great!',
});


body.classList.add('light-mode');



function switch_color() {
    const body = document.body;
    
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'light';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'dark';
    }
}

toggleButton.addEventListener('click', switch_color);

document.getElementById('action')?.addEventListener('click', setMode('action'))


function setMode(mode) {
  console.log('lkj');
  console.log(mode);
}
  

