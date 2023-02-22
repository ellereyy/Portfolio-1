// PAGE CHANGE ANIMATIONS 
// IDEAS 
//     define the function separately vs definining it as it's being passed 
//     change the links to #s and update JS functions to open the page, 
//         include animation to every CSS body, but only add exit styling via JS 
//         make sure exit styling is removed after the click 


const test = document.getElementById('test');

const homePage = document.getElementById('home-page');
const abtPage = document.getElementById('about-page');
console.log(abtPage)
console.log(homePage)

const homeBtn = document.getElementById('home-btn');
const abtBtn = document.getElementById('abt-btn');

abtBtn.addEventListener('click', () => {
    homePage.classList.add('slide-out');
    setTimeout(() => {
        window.location.href = 'about-page.html';
    }, 4000);
})

//DISPLAY/HIDE MODALS 
const openBtn = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')

console.log(openBtn)
console.log(modal)
console.log(closeBtn)

const openModal = () => {
  modal.style.display = 'flex';
}
const closeModal = () => {
  modal.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);