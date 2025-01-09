document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(5);
  UI.createBoard(game.size);
});
