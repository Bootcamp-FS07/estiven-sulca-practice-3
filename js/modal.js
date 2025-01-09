const rematchButton = document.getElementById("rematch");
const homeButton = document.getElementById("homeButton");

rematchButton.onclick = () => {
  modal.style.display = "none";
  resetBoard();
};
homeButton.onclick = () => {};
function resetBoard() {
  UI.createBoard(3);
  UI.resetCurrentPlayer();
}
