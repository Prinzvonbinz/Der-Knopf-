let score = 0;
let chance = 0;
let highscore = localStorage.getItem("highscore") || 0;

const button = document.getElementById("mainButton");
const highscoreDisplay = document.getElementById("highscore");

highscoreDisplay.textContent = highscore;

button.addEventListener("click", () => {
  const random = Math.random() * 100;

  if (random < chance) {
    alert("Game Over!");
    score = 0;
    chance = 0;
    button.textContent = score;
  } else {
    score++;
    chance++;
    button.textContent = score;

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      highscoreDisplay.textContent = highscore;
    }
  }
});
