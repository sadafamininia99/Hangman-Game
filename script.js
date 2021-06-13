//get elements
const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");
const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// console.log(selectedWord);
const correctLetters = [];
const wrongLetters = [];

//fun(show hidden word)
//display world
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split(``)
      .map(
        (letter) => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
        `
      )
      .join("")}
    `;
  const innerWord = wordEl.innerText.replace(/[ \n]/g, "");
  

	if (innerWord === selectedWord) {
		finalMessage.innerText = 'Congratulations! You won! 😃😌';
		finalMessageRevealWord.innerText = '';
		popup.style.display = 'flex';
}
}

//keydown letter press
 
window.addEventListener('keydown', e =>{
// console.log(e.keyCode);
if (e.keyCode >=65 && e.keyCode <=90){
  console.log(123);
}
});


displayWord();
