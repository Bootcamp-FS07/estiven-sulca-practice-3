let signs = {
  x: "../assets/icons/x-sign.svg",
  o: "../assets/icons/circle-sign.svg",
};
class UI {
  static #currentPlayer = "x";
  static #boardSize;
  static #gameOver = false;

  static #player1Score = parseInt(localStorage.getItem("player1Score")) || 0;
  static #player2Score = parseInt(localStorage.getItem("player2Score")) || 0;
  static #tieScore = parseInt(localStorage.getItem("tieScore")) || 0;

  static createBoard(size) {
    this.#boardSize = size;
    const boardElement = document.querySelector("#board");

    document.getElementById("player1").textContent =
      localStorage.getItem("player1");
    document.getElementById("player2").textContent =
      localStorage.getItem("player2");
    boardElement.innerHTML = "";

    UI.#updateScoreboard();
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

      if (this.#currentPlayer === "x") {
        UI.#player1Score++;
      } else {
        UI.#player2Score++;
      }
      setTimeout(() => {
        UI.#updateScoreboard();
        UI.#showModal(text, "Wins!!!");
      }, 2000);
      return;
    }
    let tie = Game.checkDraw();
    if (tie) {
      UI.#gameOver = true;

      UI.#tieScore++;
      setTimeout(() => {
        UI.#updateScoreboard();
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

  static #updateScoreboard() {
    document.getElementById("player1Score").textContent = UI.#player1Score;
    document.getElementById("player2Score").textContent = UI.#player2Score;
    document.getElementById("playerTie").textContent = UI.#tieScore;

    localStorage.setItem("player1Score", UI.#player1Score);
    localStorage.setItem("player2Score", UI.#player2Score);
    localStorage.setItem("tieScore", UI.#tieScore);
  }
}
