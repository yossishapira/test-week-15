let score;
startGame();

function startGame() {
    // secretNumber = Math.floor(Math.random() * 6) + 1;
    // console.log(secretNumber);

    // score = 0;
    // document.getElementById("score").textContent = score;
    // document.getElementById("message").textContent = "";
    // document.getElementById("message").className = "";
    // document.getElementById("playAgain").style.display = "none";
}

function diceRolling(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1);
    console.log(dice2);
    if (dice1 === dice2){
     return false
    } 
    let sumDice = dice1+dice2
    console.log(sumDice);
    
    return sumDice
}
diceRolling()