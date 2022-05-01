import {
  BLACK_BG,
  LETTERS_CONTAINER,
  WRONG_LETTERS_CONTAINER,
  SVG_PARTS,
  WORD_CONTAINER,
  CHANGABLE,
} from "../config.js";

const TRY_AGAIN = document.querySelector(".try-again");

export const addEventHadlerTryAgain = function (hadler) {
  TRY_AGAIN.addEventListener("click", () => {
    LETTERS_CONTAINER.innerHTML = "";
    WRONG_LETTERS_CONTAINER.innerHTML = "";
    WORD_CONTAINER.innerHTML = "";
    SVG_PARTS.forEach((p) => {
      p.style.display = "none";
    });
    BLACK_BG.style.display = "none";
    CHANGABLE.randomWord = [];
    CHANGABLE.mistakes = 0;
    hadler();
  });
};
