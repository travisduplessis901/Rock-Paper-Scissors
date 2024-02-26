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


//Event listener for buttons
const btnRock = document.querySelector('#btnR');
const btnScissors = document.querySelector("#btnS");
const btnPaper = document.querySelector("#btnP");


btnRock.addEventListener('click', () => { playRound(btnRock.textContent) });
btnScissors.addEventListener('click', () => { playRound(btnScissors.textContent) });
btnPaper.addEventListener('click', () => { playRound(btnPaper.textContent) });

btnRock.addEventListener('click' , () => {baseline()});
btnPaper.addEventListener('click', () => {baseline()});
btnScissors.addEventListener('click', () => {baseline()});

const container = document.querySelector("#container");
const p = document.createElement('p');
const p1 = document.createElement('p');
const score = document.createElement('p');
container.appendChild(p1);
container.appendChild(p);
container.appendChild(score);

const leftImage = document.querySelector('#leftHand');
const rightImage = document.querySelector("#rightHand");

const playerScore = document.createElement('span');
playerScore.setAttribute("id", "playerScore");

const cpuScore = document.createElement('span');
cpuScore.setAttribute("id", "cpuScore");

leftImage.appendChild(playerScore);
rightImage.appendChild(cpuScore);



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



function playRound(pChoice) {

  let cChoice = getComputerChoice();

  bothHands(pChoice, cChoice);

  let round = roundResult(pChoice, cChoice);



  if (round == "player") {
    playerWins = playerWins + 1;
    p1.textContent = "The CPU chose: " + cChoice;
    p.textContent = "You Win!";
    p.style.color = "white";
    p1.style.color = "white";

    playerScore.textContent = playerWins;
    cpuScore.textContent = cpuWins;

  } else if (round == "CPU") {
    cpuWins = cpuWins + 1;
    p1.textContent = "The CPU chose: " + cChoice;
    p.textContent = "The CPU Wins :(";
    p.style.color = "white";
    p1.style.color = "white";

    playerScore.textContent = playerWins;
    cpuScore.textContent = cpuWins;

  } else {
    p1.textContent = "The CPU chose: " + cChoice;
    p.textContent = "It's a tie! Play Again!";
    p.style.color = "white";
    p1.style.color = "white";

    playerScore.textContent = playerWins;
    cpuScore.textContent = cpuWins;
  }

  if (playerWins >= 5) {
    alert("You Win");
    const resetB = document.createElement('button');
    resetB.textContent = "Play Again!";
    container.appendChild(resetB);
    resetB.addEventListener('click', () => { resetEverything(resetB) });

  } else if (cpuWins >= 5) {
    alert("The CPU Wins!");
    const resetB = document.createElement('button');
    resetB.textContent = "Play Again!";
    container.appendChild(resetB);
    resetB.addEventListener('click', () => { resetEverything(resetB) });

  }


}

function resetEverything(resetB) {
  playerWins = 0;
  cpuWins = 0;
  score.textContent = "";

  p.textContent = "";
  p1.textContent = "";
  playerScore.textContent = "";
  cpuScore.textContent = "";
  baseline();
  resetB.remove();
}

function rotate() {

  return new Promise((resolve) => {
    const lHand = document.querySelector("#left");
    lHand.style.transform = "rotate(15deg)";
    setTimeout(() => { lHand.style.transform = "rotate(-5deg)" }, 400);
    setTimeout(() => { lHand.style.transform = "rotate(15deg)" }, 800);

    const rHand = document.querySelector("#right");
    rHand.style.transform = "rotate(-15deg)";
    setTimeout(() => { rHand.style.transform = "rotate(5deg)" }, 400);
    setTimeout(() => { rHand.style.transform = "rotate(-15deg)" }, 800);

    setTimeout(() => {resolve(true)}, 1000);

  })
}

function replaceHand(playerHand, cpuHand) {

  playerHand = playerHand.toLowerCase();
  cpuHand = cpuHand.toLowerCase();


  return new Promise((resolve, reject) => {
    const lefty = document.querySelector("#left");
    const righty = document.querySelector("#right");

    switch (playerHand) {

      case "rock":
        break;

      case "scissors":
        lefty.src = "/images/leftScissors.png";
        righty.style.width = "550px";
        righty.style.height = "456px";
        break;

      case "paper":
        lefty.src = "/images/leftPaper.png";
        righty.style.width = "550px";
        righty.style.height = "456px";
        break;
    }

    switch (cpuHand) {

      case "rock":
        break;

      case "scissors":
        righty.src = "/images/rightScissors.png";
        righty.style.width = "550px";
        righty.style.height = "456px";
        break;

      case "paper":
        righty.src = "/images/rightPaper.png";
        righty.style.width = "550px";
        righty.style.height = "456px";
        break;
    }

    resolve(true);

  })

}

async function bothHands(pChoice, cChoice){

  let rotateResult = await rotate()//.then (() => replaceHand("scissors", "paper"));
  console.log(rotateResult);
  let replaceHandResult = await replaceHand(pChoice, cChoice);

}

function baseline(){
  const lefty = document.querySelector("#left");
  const righty = document.querySelector("#right");

  lefty.src = "/images/leftHand.png";
  righty.src = "/images/rightHand.png";
}








