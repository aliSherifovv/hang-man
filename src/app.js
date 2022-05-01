import alphabetView from "./views/alphabetView.js";
import * as gameView from "./views/gameView.js";
import * as gameFinished from "./views/gameFinishedView.js";
import * as scoreView from "./views/scoreView.js";

async function display() {
  //!DISPLAY ALPHABET
  alphabetView.renderAlphabet();

  //!DISPLAY WORD
  await gameView.renderWord();

  //!LETTERS HANDLER
  alphabetView.addEventHadlersLetters();
}

export const play = async function () {
  try {
    scoreView.setPoints();

    display();

    gameFinished.addEventHadlerTryAgain(display);
  } catch (err) {
    console.error(err);
  }
};