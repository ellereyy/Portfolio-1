js idea - still photo for main photobackground that turns into a video during a click 

include a modal for image references 


dry code - use an index for each btn that is pressed 

current page to new page index 



JS GRAVEYARD

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