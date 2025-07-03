const input = document.getElementById("guessnumber");
const checkButton = document.getElementById("checkbutton");
const displayNumber = document.getElementById("number");
const displayScore = document.getElementById("score");
const displayHighScore = document.getElementById("highscore");
const resetButton = document.getElementById("reset");
const messsge = document.getElementById("message");
const section2 = document.getElementById("section2");
let score = 20;
let highScore = [];
let maxScore = 0;

checkButton.addEventListener("click", (event) => {
  const randomNumber = Number(Math.round(Math.random() * 20));
  const guessNumber = Number(input.value);
  displayNumber.innerHTML = randomNumber;

  if (score == 0) {
    messsge.innerHTML = "Loss";
    input.remove();
    checkButton.disabled = true;
    return;
  }
  if (randomNumber === guessNumber) {
    messsge.innerHTML = "Win";
    input.remove();
    checkButton.disabled = true;
    highScore.push(score);
  } else {
    score--;
    displayScore.innerHTML = score;
  }
});

resetButton.addEventListener("click", () => {
  messsge.innerHTML = "Start Guessing...";
  section2.appendChild(input);
  checkButton.disabled = false;
  highScore.push(score);
  highScore.map((num) => {
    if (num > maxScore) {
      maxScore = num;
    }
  });
  displayHighScore.innerHTML = maxScore;
  score = 20;
  displayScore.innerHTML = 20;
});
