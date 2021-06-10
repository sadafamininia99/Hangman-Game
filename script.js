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
const correctLetters = ["w", "i", "z" ,"a", "r", "d"];
const wrongLetters = [];

//fun(show hidden word)
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
		finalMessage.innerText = 'Congratulations! You won! 😃';
		finalMessageRevealWord.innerText = '';
		popup.style.display = 'flex';
}
}


displayWord();
