class Game {
  constructor(size = 3) {
    this.size = size;
    this.board = this.createBoard();
    this.currentPlayer = "Player 1";
    this.winner = null;
  }

  createBoard() {
    return Array(this.size)
      .fill()
      .map(() => Array(this.size).fill(null));
  }

  
}
