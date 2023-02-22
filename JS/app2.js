// PLAY FLIGHT VIDEO  
const flyVid = document.getElementById('fly-vid')

flyVid.addEventListener('mouseover', () => {
    flyVid.play();
})

flyVid.addEventListener('mouseout', () => {
    flyVid.pause();
  });

flyVid.addEventListener('ended', () => {
    flyVid.load();
})


//DISPLAY/HIDE MODALS 
const openBtn = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')

console.log(openBtn)
console.log(modal)
console.log(closeBtn)

const openModal = () => {
  modal.style.display = 'flex';
}
const closeModal = () => {
  modal.style.display = 'none';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);