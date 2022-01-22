// The function computerPlay returns rock, paper, or scissors for the computer. Use a random number to select the computer's play

function computerPlay() {
  let randomSelect = Math.floor(Math.random() * 3);
  switch(randomSelect) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// Play one round
// Get player selection and computer selection
// convert both inputs to lowercase for comparison
// Three possible victory combinations for each player
// compare selections and return round result

function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'rock') {

      if (computerSelection == 'rock') {
        return "tie";
      } else if (computerSelection == 'paper') {
        return "lose";
      } else if (computerSelection == 'scissors') {
        return "win";
      }

  } else if (playerSelection == 'paper') {

      if (computerSelection == 'rock') {
        return "win";
      } else if (computerSelection == 'paper') {
        return "tie";
      } else if (computerSelection == 'scissors') {
        return "lose";
      }

  } else if (playerSelection == "scissors") {

      if (computerSelection == 'rock') {
        return "lose";
      } else if (computerSelection == 'paper') {
        return "win";
      } else if (computerSelection == 'scissors') {
        return "tie";
      }

  } else {
    return "Not a valid choice";
  }
}

// The player is promted for a selction, which is stored in a varable and returned

function playerPlay() {
  const selection = prompt("Rock, Paper, Scissors, Shoot!")
  return selection.toLowerCase();
}

// Keeping Score
// Pass in result of the round as parameter - win lose or tie
// Score - return 1 if 'win', return -1 if 'lose', return 0 if 'tie'

function calcScore(result) {
    switch(result) {
      case 'win':
        return 1;
        break;
      case 'lose':
        return -1;
        break;
      case 'tie':
        return 0;
        break;
    }
}

// Run a game with five rounds
// Initialize result and score variables
// Run the playRound function and store its result in result variable
// prompt for player selection and store in a variable playerSelection
// run play round function
// determine winner and increment appropriate score variable
// compare score variables
// print winner message
function game() {
  let result;
  let score = 0;

  result = playRound(playerPlay(), computerPlay())
  score = score + calcScore(result);
  console.log(result);
  console.log(score);

  result = playRound(playerPlay(), computerPlay())
  score = score + calcScore(result);
  console.log(result);
  console.log(score);

  result = playRound(playerPlay(), computerPlay())
  score = score + calcScore(result);
  console.log(result);
  console.log(score);

  result = playRound(playerPlay(), computerPlay())
  score = score + calcScore(result);
  console.log(result);
  console.log(score);

  result = playRound(playerPlay(), computerPlay())
  score = score + calcScore(result);
  console.log(result);
  console.log(score);

  if (score > 0) {
    console.log("You are the winner!");
  } else if (score < 0 ) {
    console.log("The computer is the winner!");
  } else {
    console.log("You tied the computer!");
  }
}

game();
