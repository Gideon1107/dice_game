function rollDice() {

    // Generate random number for each player
    var playerOneRoll = Math.ceil(Math.random()*6);
    var playerTwoRoll = Math.ceil(Math.random()*6);

    // Get player dice and set their image attr
    var playerOne = document.querySelector(".img1").setAttribute("src", "./images/dice"+playerOneRoll+".png");
    var playerTwo = document.querySelector(".img2").setAttribute("src", "./images/dice"+playerTwoRoll+".png");

    // Check highest dice roll
    if (playerOneRoll > playerTwoRoll) {
        document.querySelector("h1").textContent = "🚩 Player 1 wins!";
    }
    else if (playerOneRoll < playerTwoRoll) {
        document.querySelector("h1").textContent = "Player 2 wins! 🚩";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
    }
    
}

rollDice()
