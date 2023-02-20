// PAGE CHANGE ANIMATIONS 
//IDEAS 
    //define the function separately vs definining it as it's being passed 
    //change the links to #s and update JS functions to open the page, 
        //include animation to every CSS body, but only add exit styling via JS 
        //make sure exit styling is removed after the click 


// const homePage = document.getElementById('home-page');
// const abtPage = document.getElementById('about-page');

// const homeBtn = document.getElementById('home-btn');
// const abtBtn = document.getElementById('abt-btn');
// const test = document.getElementById('test');

// abtBtn.addEventListener('click', () => {
//     homePage.classList.add('slide-out');
//     abtPage.classList.add('slide-in');
// });


// PLAY FLIGHT VIDEO  
const homeImg = document.getElementById("fly-pic");
const homeVid = document.getElementById("fly-vid");

homeImg.addEventListener("click", () => {
    homeImg.style.display = "none";
    homeVid.play();
});

homeVid.addEventListener('ended', () => {
    homeImg.style.display = 'block';
});

//DISPLAY/HIDE MODALS 
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')

const openModal = () => {
  modal.style.display = 'block';
}
const closeModal = () => {
  modal.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);






