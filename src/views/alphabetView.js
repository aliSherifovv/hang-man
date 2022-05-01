import {
  CHANGABLE,
  LETTERS_CONTAINER,
  WRONG_LETTERS_CONTAINER,
  SVG_PARTS,
  BLACK_BG,
  POINTS,
} from "../config.js";

class AlphabetView {
  result = document.querySelector(".result");
  hiddenWord = document.querySelector(".hidden-word");
  alphabet = "abcdefghijklmnopqrstuvwxyz";

  renderAlphabet() {
    this.alphabet.split("").forEach((a) => {
      const html = `<div class="letter">${a}</div>`;
      LETTERS_CONTAINER.insertAdjacentHTML("beforeend", html);
    });
  }

  addEventHadlersLetters() {
    CHANGABLE.hiddenLetters = document.querySelectorAll(".hidden");

    LETTERS_CONTAINER.querySelectorAll(".letter").forEach((letter) => {
      letter.addEventListener("click", () => {
        if (CHANGABLE.randomWord.length > 0) {
          const check = CHANGABLE.randomWord.some(
            (l) => letter.textContent === l
          );
          if (check) {
            letter.style.backgroundColor = "green";
            letter.style.color = "white";
            CHANGABLE.hiddenLetters.forEach((hl) => {
              if (hl.textContent === letter.textContent)
                hl.style.color = "white";
            });
            this.winCheck(
              Array.from(CHANGABLE.hiddenLetters),
              CHANGABLE.randomWord
            );
          } else {
            const html = `<div class="wrong-letter">${letter.textContent}</div>`;
            WRONG_LETTERS_CONTAINER.insertAdjacentHTML("beforeend", html);
            letter.remove();
            CHANGABLE.mistakes++;
            SVG_PARTS[CHANGABLE.mistakes - 1].style.display = "block";
            this.loseCheck(
              Array.from(CHANGABLE.hiddenLetters),
              CHANGABLE.randomWord,
              CHANGABLE.mistakes
            );
          }
        }
      });
    });
  }

  winCheck(hls, rW) {
    const gameWon = hls.every((hl) => hl.style.color === "white");

    if (gameWon) {
      console.log(CHANGABLE.points);
      this.gameEnds(hls, rW);
      this.result.textContent = "You win!";
      CHANGABLE.points += hls.length;
      POINTS.textContent = CHANGABLE.points;
      localStorage.setItem("savedPoints", CHANGABLE.points);
    }
  }

  loseCheck(hls, rW, m) {
    if (m > 5) {
      this.gameEnds(hls, rW);
      this.result.textContent = "You lose!";
      CHANGABLE.points = 0;
      POINTS.textContent = CHANGABLE.points;
      localStorage.clear("savedPoints");
    }
  }

  gameEnds(hls, rW) {
    this.hiddenWord.textContent = rW.join("");
    BLACK_BG.style.display = "flex";
    hls.forEach((hl) => (hl.style.color = "transparent"));
  }
}

export default new AlphabetView();
