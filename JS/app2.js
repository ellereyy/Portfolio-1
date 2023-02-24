//HAMBURGER MENU- APPLIES TO ALL PAGES
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('#logo');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

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

//DISPLAY/HIDE MODALS - APPLIES TO ALL PAGES
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
if (window.location.pathname === '/HTML/projects.html') {
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

//RESUME NOTES - RESUME PAGE ONLY 
// if (window.location.pathname === '/HTML/resume.html') {
//   const resBtn = document.getElementById('pdf-btn');
//   const tooltip = document.createElement('div');

//   resBtn.addEventListener('mouseover', () => {
//     tooltip.style.display = 'block';
//     tooltip.innerHTML = '(this resume was made to get a job in the sailing industry)';
//     resBtn.parentNode.appendChild(tooltip);
//   });
  
//   resBtn.addEventListener('mouseleave', () => {
//     tooltip.style.display = 'none';
//   });
// }

// PLAY FLIGHT VIDEO - ABOUT PAGE ONLY 

if (window.location.pathname === '/HTML/about.html') {
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

if (window.location.pathname === '/HTML/about.html') {
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