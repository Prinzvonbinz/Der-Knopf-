let score = 0;
let chance = 0;
let highscore = localStorage.getItem("highscore") || 0;

const button = document.getElementById("mainButton");
const highscoreDisplay = document.getElementById("highscore");
const message = document.getElementById("message");

highscoreDisplay.textContent = highscore;

button.addEventListener("click", () => {
  const random = Math.random() * 100;

  if (random < chance) {
    message.textContent = "Game Over! Punkte zurückgesetzt.";
    score = 0;
    chance = 0;
    button.textContent = score;

    setTimeout(() => {
      message.textContent = "";
    }, 2000);
  } else {
    score++;
    chance++;
    button.textContent = score;
    message.textContent = "";

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      highscoreDisplay.textContent = highscore;
    }
  }
});
