let signs = {
  x: "../assets/icons/x-sign.svg",
  o: "../assets/icons/circle-sign.svg",
};
class UI {
  static #currentPlayer = "x";
  static #boardSize = 0;
  static createBoard(size) {
    this.#boardSize = size;
    const boardElement = document.querySelector("#board");
    boardElement.innerHTML = "";

    for (let row = 0; row < size; row++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      for (let col = 0; col < size; col++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell"); 
        cellElement.addEventListener("click", UI.#drawSign);
        rowElement.appendChild(cellElement);
      }
      boardElement.appendChild(rowElement);
    }
  }
  static #drawSign = (e) => {
    console.log("click");
    const cell = e.target;

    const img = document.createElement("img");
    img.src = signs[UI.#currentPlayer];
    img.alt = UI.#currentPlayer.toUpperCase();
    cell.setAttribute("cell", UI.#currentPlayer);
    cell.appendChild(img);

    if (Game.checkScore(UI.#boardSize)) {
      alert(`${UI.#currentPlayer.toUpperCase()} wins!`);
      return;
    }
    UI.#currentPlayer = UI.#currentPlayer === "x" ? "o" : "x";
    e.target.removeEventListener("click", UI.#drawSign);
  };
}
