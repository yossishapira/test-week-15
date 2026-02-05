let scores = [0, 0];
let currentPlayer = 1

startGame();

document.getElementById("dice-1").textContent = "dice 1: ";
document.getElementById("dice-2").textContent = "dice 2: ";
const hold = document.querySelector('#hold');
const rolling = document.querySelector('#rollDice');
let  score = 0
function startGame() {
    document.getElementById(`scorePlayer${currentPlayer}`).textContent =
        scores[currentPlayer - 1];

    document.getElementById("message-end").textContent = "";
}

hold.addEventListener('click', (event) => {
    if (event.target) {

        scores[currentPlayer - 1] += score;

        document.getElementById(`scorePlayer${currentPlayer}`).textContent =
            scores[currentPlayer - 1];

        if (scores[currentPlayer - 1] >= 100) {
            document.getElementById("message-end").textContent =
                `Player ${currentPlayer} Won!`;
            return;
        }

        score = 0;

        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    }
});

rolling.addEventListener('click', (event) => {
    if (event.target) {

        const dice_1 = document.getElementById("dice-1");
        const dice_2 = document.getElementById("dice-2");

        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        dice_1.textContent = "dice 1: " + dice1;
        dice_2.textContent = "dice 2: " + dice2;

        if (dice1 === dice2) {
            score = 0;
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            return;
        }

        let sumDice = dice1 + dice2;
        score += sumDice;
    }
});





