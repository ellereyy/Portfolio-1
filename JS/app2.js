//HAMBURGER MENU

const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('#logo');

hamburger.addEventListener('click', () => {
  logo.classList.add('hide');
  hamburger.classList.add('hide');
  navLinks.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (navLinks.classList.contains('show') && !event.target.classList.contains('nav-links') && !event.target.classList.contains('hamburger') && !event.target.classList.contains('nav-btn')) {
    navLinks.classList.remove('show');
  }
});

let navBtns = document.getElementsByClassName('nav-btn');

navBtns.addEventListener('click', () =>{
  navLinks.classList.add('hide');
});




//SLIDE OUT ON PAGE EXIT

let mainContent = document.querySelector('.box-layout');
// let navBtns = document.getElementsByClassName('nav-btn');
// variable commented out because it's listed above, keeping it here for my own mental sanity on the next function

for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.href !== window.location.href) {
      mainContent.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = event.target.href;
      }, 800);
    }
  });
};


//DISPLAY/HIDE MODALS - DONE, just need to clean up CSS + js display setting maybe  
const openBtn = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')

const openModal = () => {
  modal.style.display = 'block';
}
const closeModal = () => {
  modal.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


// PLAY FLIGHT VIDEO: DONE
const flyVid = document.getElementById('fly-vid')

if (window.location.href.includes("about.html")) {
  flyVid.addEventListener('mouseover', () => {
      flyVid.play();
  });
  flyVid.addEventListener('mouseout', () => {
      flyVid.pause();
    });
  flyVid.addEventListener('ended', () => {
      flyVid.load();
  });
}