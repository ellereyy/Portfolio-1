//HANGMAN JAVASCRIPT 

//------------DEFINE THE WORDS
const wordBank = ['SKIING', 'SKYDIVE', 'RAFTING', 'KAYAKING', 'CLIMBING', 'HIKING', 'BIKING', 'CAMPING', 'GLIDING', 'SURFING', 'SAILING', 'FISHING', 'RUNNING', 'JUMPING', 'DIVING', 'GOLFING'];
let randomWord = Math.floor(Math.random() * wordBank.length);
let wordAnswer = wordBank[randomWord]
let charactersAnswer = wordAnswer.split('');
const buttons = document.querySelectorAll('.letter-button');
console.log(charactersAnswer); 

const hangFiles = ['images/iterations/hangman0.png', 'images/iterations/hangman1.png', 'images/iterations/hangman2.png', 'images/iterations/hangman3.png', 'images/iterations/hangman4.png', 'images/iterations/hangman5.png', 'images/iterations/hangman6.png', 'images/iterations/hangman7.png']

//------------DISPLAY THE BLANK SPACE FOR THE WORD 
const wordDisplay = document.getElementById('correct-word');

charactersAnswer.forEach(() => {
  wordDisplay.innerHTML += `<span> _ </span>`;
});

//------------DETERMINE LETTER LOCATION 
function getAllIndexes(arr, val) {
  let indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
  }
  return indexes;
}

//------------ADD LETTER BUTTON FUNCTIONALITY 
let score = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
    button.disabled = true;
    //display/determine correct letters
    if (charactersAnswer.includes(button.innerHTML) === true){

      let indices = getAllIndexes(charactersAnswer, button.innerHTML); 
      let correctWord = document.getElementById('correct-word').children;

      for (i = 0; i < indices.length; i++){
        correctWord[indices[i]].innerHTML = button.innerHTML;
      }

      //update photo for wrong answer 
    } else {
      score += 1;
      let hangPic = document.getElementById('hang-pic');
      hangPic.src = hangFiles[score];

    } if (!wordDisplay.innerHTML.includes('_')) {
      setTimeout(() => {
        alert(`You won! \nRefresh page to play again.`);
      }, 500)
    }

      //display game over message
    if (score === 7) {
      alert(`GAME OVER. The answer was ${wordAnswer} \nClick OK to play again.`)
      location.reload();
    }

  });
});