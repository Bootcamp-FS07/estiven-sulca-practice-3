document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(3);
  UI.createBoard(game.size);
});
