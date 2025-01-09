class UI {
  static createBoard(size) {
    const boardElement = document.querySelector("#board");
    boardElement.innerHTML = "";

    for (let row = 0; row < size; row++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      for (let col = 0; col < size; col++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.id = `cell-${row * size + col}`;
        cellElement.setAttribute("data-row", row);
        cellElement.setAttribute("data-col", col);
        rowElement.appendChild(cellElement);
      }
      boardElement.appendChild(rowElement);
    }
  }
}
