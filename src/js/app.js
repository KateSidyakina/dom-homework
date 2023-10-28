import gnomePNG from "../img/goblin.png";

const board = document.querySelector(".game-container");
const gnome = document.createElement("img");
gnome.id = "gnome";
gnome.src = gnomePNG;

export function getRandomPosition() {
  const row = Math.floor(Math.random() * 4);
  const col = Math.floor(Math.random() * 4);
  return { row, col };
}

export function moveGnome() {
  const currentPosition = getRandomPosition();
  const tile = document.querySelector(
    `[data-row="${currentPosition.row}"][data-col="${currentPosition.col}"]`
  );

  tile.appendChild(gnome);
}

document.addEventListener("DOMContentLoaded", function () {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.dataset.row = row;
      tile.dataset.col = col;
      board.appendChild(tile);
    }
  }
  moveGnome();
  setInterval(moveGnome, 1000);
});
