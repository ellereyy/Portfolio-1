// PLAY FLIGHT VIDEO
const homeImg = document.getElementById("fly-pic");
const homeVid = document.getElementById("fly-vid");
const homePage = document.getElementById('home-page');
const homeBtn = document.getElementById('home-btn');
const abtBtn = document.getElementById('abt-btn');
const test = document.getElementById('test');

test.addEventListener('click', () => {
    homePage.classList.add('slide-out');
});

homeImg.addEventListener("mouseover", () => {
    homeImg.style.display = "none";
    homeVid.play();
});

homeVid.addEventListener('ended', () => {
    homeImg.style.display = 'block';
});
