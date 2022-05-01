import { POINTS, CHANGABLE } from "../config.js";

export function setPoints() {
  if (localStorage.getItem("savedPoints"))
    CHANGABLE.points = Number(localStorage.getItem("savedPoints"));

  POINTS.textContent = CHANGABLE.points;
}
