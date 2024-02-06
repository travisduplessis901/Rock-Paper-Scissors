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

/*
  function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");


    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper") {
      return playerChoice;
    } else {
      alert("Please enter only Rock, Paper or Scissors");
    }
  }
  */


//Event listener for buttons
  const btnRock = document.querySelector('#btnR');
  const btnScissors = document.querySelector("#btnS");
  const btnPaper = document.querySelector("#btnP");


  btnRock.addEventListener('click' , () => {playRound(btnRock.textContent)});
  btnScissors.addEventListener('click' , () => {playRound(btnScissors.textContent)});
  btnPaper.addEventListener('click' , () => {playRound(btnPaper.textContent)});

  const container = document.querySelector("#container");
  const p = document.createElement('p');
  const p1 = document.createElement('p');
  const score = document.createElement('p');
  container.appendChild(p1);
  container.appendChild(p);
  container.appendChild(score);
  
  

  

  function game(pChoice, cChoice) {
    
    let player = pChoice.toLowerCase();
    let CPU = cChoice;
    

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


  function roundResult(pChoice, cChoice) {
    let result = "";
    let gameResult = game(pChoice, cChoice);

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
  
  

  function playRound(pChoice){
    let cChoice = getComputerChoice();

    let round = roundResult(pChoice, cChoice);

    

    if (round == "player") {
      playerWins = playerWins + 1;
      p1.textContent = "The CPU chose: " + cChoice;
      p.textContent = "You Win!";
      score.textContent = "Player" + playerWins;
    } else if (round == "CPU") {
      cpuWins = cpuWins + 1;
      p1.textContent = "The CPU chose: " + cChoice;
      p.textContent = "The CPU Wins :(";
    } else {
      p1.textContent = "The CPU chose: " + cChoice;
      p.textContent = "It's a tie! Play Again!";
    }
  }

    if(playerWins >= 5){
      alert("You Win");
      const resetB = document.createElement('button');
      resetB.textContent = "Play Again!";
      container.appendChild(resetB);
      resetB.addEventListener('click', () => {resetEverything()});
    }else{
      alert("The CPU Wins!");
      const resetB = document.createElement('button');
      resetB.textContent = "Play Again!";
      container.appendChild(resetB);
      resetB.addEventListener('click', () => {resetEverything()});
    }

    function resetEverything(){
      playerWins = 0;
      cpuWins = 0;
      score.textContent = "";

      p.textContent = "";
      p1.textContent = "";
    }

  //}
  
  
    /*
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
    }*/
  