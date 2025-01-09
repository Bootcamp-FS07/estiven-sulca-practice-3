# practice-3

Create a tic tac toe game


### Requirements

1. Display a 3x3 grid UI by default.
2. Allow players to input "Player 1" and "Player 2" names.
3. Provide the option to start a new game.
4. Enable players to make moves and alternate turns.
5. When the game ends, display a message indicating the winner's name or if it is a tie.
6. The application must be responssive for mobile and tablet devices.

### Desirable
7. Add the ability to select the table dimensions, such as 3x3, 4x4, 5x5, etc.
8. Display the players' scores. Each time a player wins, 1 point will be added to their score. The total score for each player should be shown until the game is reset, at which point the scores will return to 0 for both players.
9. Host the project in Firebase, GitHub pages, or another tool.


Update the README file to include detailed instructions for running the project and a complete list of the tools used.

**Deadline: Thursday, January 9th 2024.**

### Project Composition
The project is composed of the following:

#### 1. HTML
index.html: The homepage where players input their names and select the grid size for the game.
pages/player.html: View to set up the player names and size of the grid.
pages/board.html: The game board page where the game is played.
#### 2. CSS
The project includes styling for different elements such as the game board, buttons, modals, and the input form.
####  3. JavaScript
- Main (main.js): Initialize the game, drawing the components.
- Game Logic (game.js): Handles the core functionality of the game. This includes creating the board, checking scores, and handling tie situations.
- UI (ui.js): Manages the user interface. It handles creating the game board, displaying player names, updating the score, and showing the winner/tie modal.
- Local Storage (storage.js): Stores player names, grid size, and game scores persistently in the browser.
- Modal (modal.js): Handles all the logic to show the modal.
#### 4. Assets
Icons and images are used for the signs ('X' and 'O'), and buttons within the app.

### Features
Player Name Input: Players can input their names before starting the game.
Grid Size: Players can select the grid size for the game (minimum grid size is 3).
Score Tracking: Tracks the score of Player 1, Player 2, and the number of ties.
Winner and Tie Detection: After each round, the game will display a modal with the winner or a tie message.
Game Reset: Players can reset the game for a rematch.
Home Button: Players can return to the homepage from the modal.
### How to Run Locally
To run this project locally, follow the steps below:

#### Prerequisites
Make sure you have a web browser installed (Google Chrome, Firefox, Safari, etc.)..

#### Steps
Clone the repository (or download the files):

```bash
git clone https://github.com/Bootcamp-FS07/estiven-sulca-practice-3
```
Navigate to the project directory:

```bash
cd estiven-sulca-practice-3
```
Open the index.html file in your browser:

Double-click the index.html file, or right-click and open with your browser.
Play the Game.

