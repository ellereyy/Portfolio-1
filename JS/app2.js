

//SLIDE OUT ON PAGE EXIT
let navBtns = document.getElementsByClassName('nav-btn');
let mainContent = document.querySelector('.box-layout');


for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.href !== window.location.href) {
      mainContent.classList.add('slide-out');
      setTimeout(() => {
        window.location.href = event.target.href;
      }, 1200);
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

  flyVid.addEventListener('mouseover', () => {
      flyVid.play();
  });
  flyVid.addEventListener('mouseout', () => {
      flyVid.pause();
    });
  flyVid.addEventListener('ended', () => {
      flyVid.load();
  });