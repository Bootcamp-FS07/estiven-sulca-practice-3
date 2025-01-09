class Game {
  constructor(size = 3) {
    this.size = size;
    this.board = this.createBoard();
  }

  createBoard() {
    return Array(this.size)
      .fill()
      .map(() => Array(this.size).fill(null));
  }

  static checkScore(size) {
    let winLength = 3;
    if (size >= 5 && size <= 7) {
      winLength = 4;
    } else if (size > 7) {
      winLength = 5;
    }
    const board = Array.from(document.querySelectorAll(".cell")).map((cell) => {
      return cell.getAttribute("cell");
    });

    return (
      Game.#checkRows(board, size, winLength) ||
      Game.#checkColumns(board, size, winLength) ||
      Game.#checkDiagonals(board, size, winLength)
    );
  }

  static checkDraw() {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const allFilled = cells.every((cell) => cell.getAttribute("cell") !== null);

    return allFilled;
  }

  static #checkRows(board, size, winLength) {
    for (let row = 0; row < size; row++) {
      let count = 1;
      for (let col = 1; col < size; col++) {
        if (
          board[row * size + col] === board[row * size + col - 1] &&
          board[row * size + col] !== null
        ) {
          count++;
        } else {
          count = 1;
        }
        if (count >= winLength) {
          return true;
        }
      }
    }
    return false;
  }

  static #checkColumns(board, size, winLength) {
    for (let col = 0; col < size; col++) {
      let count = 1;
      for (let row = 1; row < size; row++) {
        if (
          board[row * size + col] === board[(row - 1) * size + col] &&
          board[row * size + col] !== null
        ) {
          count++;
        } else {
          count = 1;
        }
        if (count >= winLength) {
          return true;
        }
      }
    }
    return false;
  }

  static #checkDiagonals(board, size, winLength) {
    for (let row = 0; row <= size - winLength; row++) {
      for (let col = 0; col <= size - winLength; col++) {
        let count = 1;
        for (let i = 1; i < winLength; i++) {
          if (
            board[(row + i) * size + (col + i)] ===
              board[(row + i - 1) * size + (col + i - 1)] &&
            board[(row + i) * size + (col + i)] !== null
          ) {
            count++;
          } else {
            break;
          }
        }
        if (count === winLength) {
          return true;
        }
      }
    }
    for (let row = 0; row <= size - winLength; row++) {
      for (let col = winLength - 1; col < size; col++) {
        let count = 1;
        for (let i = 1; i < winLength; i++) {
          if (
            board[(row + i) * size + (col - i)] ===
              board[(row + i - 1) * size + (col - i + 1)] &&
            board[(row + i) * size + (col - i)] !== null
          ) {
            count++;
          } else {
            break;
          }
        }
        if (count === winLength) {
          return true;
        }
      }
    }
    return false;
  }
}
