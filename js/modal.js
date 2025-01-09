const rematchButton = document.getElementById("rematch");

rematchButton.onclick = () => {
  modal.style.display = "none";
  resetBoard();
};
function resetBoard() {
  UI.createBoard(localStorage.getItem("gridSize"));
  UI.resetCurrentPlayer();
}

function clearLocalStorage () {
  localStorage.clear();
};
