// PLAY FLIGHT VIDEO
const homeImg = document.getElementById("fly-pic");
const homeVid = document.getElementById("fly-vid");


homeImg.addEventListener("click", () => {
    homeImg.style.display = "none";
    homeVid.play();
});

let hasVideoEnded = false;

homeVid.addEventListener('ended', () => {
    hasVideoEnded = true ;
    homeImg.style.display = 'block'
});