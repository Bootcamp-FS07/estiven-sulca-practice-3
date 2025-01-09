document
  .getElementById("playForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;
    const gridSize = document.getElementById("grid").value;

    if (player1 && player2 && gridSize) {
      localStorage.setItem("player1", player1);
      localStorage.setItem("player2", player2);
      localStorage.setItem("gridSize", gridSize);

      setTimeout(() => {
        window.location.href = "board.html";
      }, 1000);
    } else {
      alert("Please fill all the fields.");
    }
  });


