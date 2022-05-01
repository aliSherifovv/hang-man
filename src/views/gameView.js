import { API, CHANGABLE, WORD_CONTAINER } from "../config";

export async function renderWord() {
  try {
    loader();
    const data = await fetch(`${API}all`);
    const response = await data.json();
    CHANGABLE.randomWord =
      response[Math.floor(Math.random() * response.length)].split("");

    WORD_CONTAINER.innerHTML = "";
    CHANGABLE.randomWord.forEach((w) => {
      const html = `<div class="hidden">${w}</div>`;
      WORD_CONTAINER.insertAdjacentHTML("beforeend", html);
    });
  } catch (err) {
    throw err;
  }
}

function loader() {
  WORD_CONTAINER.innerHTML = `
  <div class="spinner">
    <i
      class="fa-solid fa-spinner fa-3x fa-spin-pulse"
      style="color: white"
    ></i>
  </div>
`;
}
