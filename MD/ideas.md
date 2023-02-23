// PAGE CHANGE ANIMATIONS 
// IDEAS 
//     define the function separately vs definining it as it's being passed 
//     change the links to #s and update JS functions to open the page, 
//         include animation to every CSS body, but only add exit styling via JS 
//         make sure exit styling is removed after the click 


js idea - still photo for main photobackground that turns into a video during a click 

include a modal for image references 


dry code - use an index for each btn that is pressed 

current page to new page index 

const abtPage = document.querySelector('#about-page');
const homePage = document.querySelector('#home-page');
const resPage = document.querySelector('#resume-page');
const projPage = document.querySelector('#project-page');


css graveyard

#test-body {
    margin: auto;
    background-color: var(--bg-color);
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 50px 1fr 1fr 30px;
}

#test-about {
    display: none;
}


JS GRAVEYARD

// BELOW: JS FOR SLIDIDNG PAGE EFFECRTS ON BTN CLICK - buttons are linked to #

// document.addEventListener('DOMContentLoaded', () => {
//   abtPage.classList.add('slide-in');
// });

// document.addEventListener('DOMContentLoaded', () => {
//     homePage.classList.add('slide-in');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   resPage.classList.add('slide-in');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   projPage.classList.add('slide-in');
// });

// document.addEventListener('DOMContentLoaded', () => {
//   homePage.classList.add('slide-in');
//   abtPage.classList.add('slide-in');
//   resPage.classList.add('slide-in');
//   projPage.classList.add('slide-in');
// });


let navBtns = document.getElementsByClassName('nav-btn');
let mainContent = document.querySelector('.box-layout');
const abtPage = document.querySelector('#about-page');
const homePage = document.querySelector('#home-page');
const resPage = document.querySelector('#resume-page');
const projPage = document.querySelector('#project-page');

for (let i = 0; i < navBtns.length; i++) {
  console.log(navBtns[i]);
};

function openPage {
  const navBtns = Array.from(document.getElementsByClassName('nav-btn'));
  const pageContent = Array.from(document.querySelectorAll('.box-layout'));
    while (navBtns.indexOf() === pageContent.indexOf()) {

    }
}

let navBtns = document.getElementsByClassName('nav-btn');
let navBtnArray = Array.from(navBtns); // create a new array from navBtns
for (let i = 0; i < navBtnArray.length; i++) {
  let navBtn = navBtnArray[i]; // get each navBtn from the array
  console.log(navBtnArray);
}

let pageContent = document.querySelectorAll('.box-layout')
for (let i = 0; i < pageContent.length; i++) {
  console.log(pageContent[i]);
};



for (let i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener('click', (event) => {
    mainContent.classList.add('slide-out');
    setTimeout(() => {
      window.location.href = event.target.href;
    }, 1000);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  abtPage.classList.add('slide-in');
});

// window.onload = (event) => {
//   if (window.location.href.indexOf(navBtns) > -1) {
//     mainContent.classList.add('slide-in');
//   }
// };



// const homeImg = document.getElementById("fly-pic");
// const homeVid = document.getElementById("fly-vid");

// // homeImg.addEventListener("click", () => {
// //     homeImg.style.display = "none";
// //     homeVid.play();
// // });

// // homeVid.addEventListener('ended', () => {
// //     homeImg.style.display = 'block';
// // });



navBtns.addEventListener('click', (event) => {
  mainContent.classList.add('slide-out');
  event.preventDefault();
  setTimeout(() => {
    window.location.href = event.target.href;
  }, 1000)
});

window.onload = () => {
  abtPage.classList.add('slide-in');
};

const homePage = document.getElementById('home-page');
const abtPage = document.getElementById('about-page');

const homeBtn = document.getElementById('home-btn');
const abtBtn = document.getElementById('abt-btn');


abtBtn.addEventListener('click', (event) => {
  homePage.classList.add('slide-out');
  event.preventDefault();  
  setTimeout(() => {
        window.location.href = '/HTML/about.html';
    }, 1000);
});

window.onload = () => {
  abtPage.classList.add('slide-in');
}



CSS GRAVEYARD

/* #intro {
    padding: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #41EAD4;
    border-radius: 20px;
    margin: 30px
} */

/* .intro-words {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
} */

thos
/* .page-content {
    max-width: 768px;
    margin: auto;
    box-shadow: -5px -3px 8px rgb(186, 186, 186);
} */

/* LAYOUT ATTEMPT 1 FOR IMAGE/VIDEO */
/* .img-vid-container {
    position: relative;
    height: 500px;
}

.fly-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.fly {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
  
.fly:active {
    display: block;
}

#fly-pic {
    animation: fade 1s ease-in both;
} */


HTML GRAVEYARD

<p>Hi! My name is Elle and I am an aspiring software engineer based in the beautiful mountain town of Mammoth Lakes, California. When I’m not glued to my computer, you can find me outside either skiing, skydiving, riding bikes, paragliding, sailing, or hiking on the easiest trail I can find</p>
        <p>Prior to pursuing software engineering, I worked for numerous nonprofit organizations on both the fundraising and mission side. Most recently, I worked for the non-profit branch of a ski resort, overseeing programs that generated funding for various youth education and athletic organizations. I’ve also taught at organizations that aim to make the outdoors more accessible to all youth. 
        </p>
        <p>I also love any opportunity to be creative, especially writing, welding together massive metal sculptures, or coming up with the most believable excuse as to why I have to bail on a 4AM 20 mile hike that I forgot to train for. 
        </p>