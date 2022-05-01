export const LETTERS_CONTAINER = document.querySelector(".letters");
export const WRONG_LETTERS_CONTAINER = document.querySelector(".wrong-letters");
export const GAME_IMG = document.querySelector(".game img");
export const BLACK_BG = document.querySelector(".black-bg");
export const WORD_CONTAINER = document.querySelector(".word");
export const POINTS = document.querySelector(".points");
export const SVG_PARTS = document.querySelectorAll(".figure-part");
export const API = "https://random-word-api.herokuapp.com/";
export const CHANGABLE = {
  randomWord: [],
  mistakes: 0,
  hiddenLetters: "",
  points: 0,
};