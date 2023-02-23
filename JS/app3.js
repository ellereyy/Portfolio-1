// PAGE CHANGE ANIMATIONS 
// IDEAS 
//     define the function separately vs definining it as it's being passed 
//     change the links to #s and update JS functions to open the page, 
//         include animation to every CSS body, but only add exit styling via JS 
//         make sure exit styling is removed after the click 


let pages = ['home-page', 'about-page', 'project-page', 'resume-page'];

let navBtns = document.getElementsByClassName('nav-btn');
let mainContent = document.querySelector('.box-layout');

const homeTestPage = document.querySelector('test-home');
const abtTestPage = document.querySelector('test-about');

const abtPage = document.querySelector('#about-page');
const homePage = document.querySelector('#home-page');
const resPage = document.querySelector('#resume-page');
const projPage = document.querySelector('#project-page');
console.log()

for (let i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.classList.add('slide-out');
      setTimeout(() => {
        window.location.href = event.target.href;
      }, 1000);
    });
  };
  
document.addEventListener('DOMContentLoaded', () => {
    abtPage.classList.add('slide-in');
});
  


// PLAY FLIGHT VIDEO  
const flyVid = document.getElementById('fly-vid')

flyVid.addEventListener('mouseover', () => {
    flyVid.play();
});

flyVid.addEventListener('mouseout', () => {
    flyVid.pause();
  });

flyVid.addEventListener('ended', () => {
    flyVid.load();
});


//DISPLAY/HIDE MODALS 
const openBtn = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')

// console.log(openBtn)
// console.log(modal)
// console.log(closeBtn)

const openModal = () => {
  modal.style.display = 'flex';
}
const closeModal = () => {
  modal.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);