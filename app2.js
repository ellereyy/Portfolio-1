//HAMBURGER MENU- APPLIES TO ALL PAGES
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('#logo');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

//clicking outside of menu will close it 
document.addEventListener('click', (event) => {
  if (navLinks.classList.contains('show') && !event.target.classList.contains('nav-links') && !event.target.classList.contains('hamburger') && !event.target.classList.contains('nav-btn')) {
    navLinks.classList.remove('show');
  }
});

//FADE OUT ON PAGE EXIT - APPLIES TO ALL PAGES
let mainContent = document.querySelector('.box-layout');
let navBtns = document.getElementsByClassName('nav-btn');

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

//double check looping necessity 

//DISPLAY/HIDE MODALS - APPLIES TO ALL PAGES (source -modal lesson)
const openBtn = document.getElementById('open-modal-contact')
const modal = document.querySelector('.modal')
const closeBtn = document.getElementById('close-btn')

const openModal = () => {
  modal.style.display = 'flex';
}
const closeModal = () => {
  modal.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


//"COMING SOON" CONTENT - PROJECT PAGE ONLY 
if (window.location.href === 'https://ellereyy.github.io/Portfolio-1/projects.html') {
const boxes = document.querySelectorAll('.b2, .c1, .d2');

  boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      const span = document.createElement('span');
      span.className = 'coming-soon';
      span.innerHTML = 'Coming Soon';
      box.appendChild(span);
    });

    box.addEventListener('mouseout', () => {
      const span = box.querySelector('.coming-soon');
      box.removeChild(span);
    });
  });
}

// PLAY FLIGHT VIDEO - ABOUT PAGE ONLY 

console.log(window.location.href)

if (window.location.href === 'https://ellereyy.github.io/Portfolio-1/about.html') {
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
}

//IMAGE CAROUSEL (source: corgi carousel) - ABOUT PAGE ONLY 

if (window.location.href === 'https://ellereyy.github.io/Portfolio-1/about.html') {
  let currentImgIndex = 0;
  let previousImgIndex = 0; 
  const images = document.getElementsByClassName('photo');

  function cycle(nextToPrevious) {
    previousImgIndex = currentImgIndex
    currentImgIndex = currentImgIndex + nextToPrevious
    images[previousImgIndex].style.display = 'none';
    if (currentImgIndex >= images.length) {
      currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
      currentImgIndex = images.length + nextToPrevious;
    }
    images[currentImgIndex].style.display = 'block'
  }
  const prev = document.querySelector('#prev-btn')
  prev.addEventListener('click', () => cycle(-1))

  const next = document.querySelector('#next-btn')
  next.addEventListener('click', () => cycle(1))
}