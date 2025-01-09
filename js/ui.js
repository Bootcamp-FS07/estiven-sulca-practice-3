let signs = {
  x: "../assets/icons/x-sign.svg",
  o: "../assets/icons/circle-sign.svg",
};
class UI {
  static #currentPlayer = "x";
  static #boardSize = 0;
  static #gameOver = false;

  static createBoard(size) {
    this.#boardSize = size;
    const boardElement = document.querySelector("#board");
    boardElement.innerHTML = "";
    this.#gameOver = false;

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

  static resetCurrentPlayer() {
    UI.#currentPlayer = "x";
  }

  static #drawSign = (e) => {
    if (UI.#gameOver) return;
    const cell = e.target;

    const img = document.createElement("img");
    img.src = signs[UI.#currentPlayer];
    img.alt = UI.#currentPlayer.toUpperCase();
    cell.setAttribute("cell", UI.#currentPlayer);
    cell.appendChild(img);

    let winner = Game.checkScore(UI.#boardSize);

    if (winner) {
      UI.#gameOver = true;
      let text = this.#currentPlayer === "x" ? "Player 1" : "Player 2";
      setTimeout(() => {
        UI.#showModal(text, "Wins!!!");
      }, 2000);
      return;
    }
    let tie = Game.checkDraw();
    if (tie) {
      UI.#gameOver = true;

      setTimeout(() => {
        UI.#showModal("Tie", "No ones wins");
      }, 2000);
      return;
    }
    UI.#currentPlayer = UI.#currentPlayer === "x" ? "o" : "x";
    e.target.removeEventListener("click", UI.#drawSign);
  };

  static #showModal(text, description) {
    const modal = document.querySelector("#modal");
    const winnerText = document.getElementById("winnerPlayer");
    const modalDescription = document.getElementById("modalDescription");
    winnerText.textContent = text;
    modalDescription.textContent = description;

    modal.style.display = "block";
  }

}
