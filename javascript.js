function getComputerChoice() {
    let num = Math.floor(Math.random() * (3) + 1);
    let choice = "";

    switch (num) {
      case 1:
        choice = "rock";
        break;
      case 2:
        choice = "paper";
        break;
      case 3:
        choice = "scissors";
        break;
      default:
        console.log("heaven help us");
    }

    return choice;

  }


  function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");


    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper") {
      return playerChoice;
    } else {
      alert("Please enter only Rock, Paper or Scissors");
    }
  }

  function game() {
    let CPU = getComputerChoice();
    let player = getPlayerChoice();


    //return 0 for CPU victories - return 1 for player victories - return 2 for ties
    if (CPU == "rock" && player == "rock") {
      return 2;
    } else if (CPU == "rock" && player == "paper") {
      return 1;
    } else if (CPU == "rock" && player == "scissors") {
      return 0;
    } else if (CPU == "paper" && player == "rock") {
      return 0;
    } else if (CPU == "paper" && player == "paper") {
      return 2;
    } else if (CPU == "paper" && player == "scissors") {
      return 1;
    } else if (CPU == "scissors" && player == "rock") {
      return 1;
    } else if (CPU == "scissors" && player == "paper") {
      return 0;
    } else if (CPU == "scissors" && player == "scissors") {
      return 2;
    }

  }


  function playRound() {
    let result = "";
    let gameResult = game();

    if (gameResult == 0) {
      result = "CPU";
    } else if (gameResult == 1) {
      result = "player";
    } else {
      result = "tie";
    }

    return result;

  }

  let cpuWins = 0;
  let playerWins = 0;
  
  for (i = 0; i < 5; i++) {

    let round = playRound();
    if (round == "player") {
      playerWins = playerWins + 1;
      console.log("The CPU chose: " + getComputerChoice());
      console.log("Round " + (i + 1) + " goes to the player!")
    } else if (round == "CPU") {
      cpuWins = cpuWins + 1;
      console.log("The CPU chose: " + getComputerChoice());
      console.log("Round " + (i + 1) + " goes to the CPU!");
    } else {
      console.log("The CPU chose: " + getComputerChoice());
      console.log("Round " + (i + 1) + " is a tie!");
    }

  }
  

    if (cpuWins > playerWins) {
      console.log("The CPU Wins! Try again!");
    } else if (playerWins > cpuWins) {
      console.log("You Win! Well done!");
    } else {
      console.log("It's a tie, play another round to determine the victor");
      while (cpuWins == playerWins) {
        
        let round = playRound();
        if (round == "player") {
          console.log("The CPU chose: " + getComputerChoice());
          console.log("You Win! Well Done!");
        } else if (round == "CPU") {
          console.log("The CPU chose: " + getComputerChoice());
          console.log("The CPU wins ! Try again!");
        }else{
          console.log("The CPU chose: " + getComputerChoice());
          console.log("Another tie! Play again!")
        }
      }
    }
  