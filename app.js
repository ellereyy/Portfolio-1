// PLAY FLIGHT VIDEO
const homeImg = document.getElementById("fly-pic");
const homeVid = document.getElementById("fly-vid");


homeImg.addEventListener("mouseover", () => {
    homeImg.style.display = "none";
    homeVid.play();
});


homeVid.addEventListener('ended', () => {
    homeImg.style.display = 'block';
});