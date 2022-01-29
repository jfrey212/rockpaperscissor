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
        return 0;
      } else if (computerSelection == 'paper') {
        return -1;
      } else if (computerSelection == 'scissors') {
        return 1;
      }

  } else if (playerSelection == 'paper') {

      if (computerSelection == 'rock') {
        return 1;
      } else if (computerSelection == 'paper') {
        return 0;
      } else if (computerSelection == 'scissors') {
        return -1;
      }

  } else if (playerSelection == "scissors") {

      if (computerSelection == 'rock') {
        return -1;
      } else if (computerSelection == 'paper') {
        return 1;
      } else if (computerSelection == 'scissors') {
        return 0;
      }

  } else {
    return "Not a valid choice";
  }
}

function checkScore(playerScore, computerScore) {
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  const endMessage = document.querySelector('#endMessage');

  if (playerScore == 5) {
    endMessage.textContent = "You are the winner!";
    rock.remove();
    paper.remove();
    scissors.remove();
  } else if (computerScore == 5) {
    endMessage.textContent = "The computer is the winner!";
    rock.remove();
    paper.remove();
    scissors.remove();
  }
}

// I ended up with a lot of duplicate code here. The problem is that I could
// not figure out how to loop over this game with the buttons. Every loop I
// tried would just run through, there was nothing to stop execution and wait
// for player choice. My solution was to check all the game conditions inside
// of each eventListener. I wanted to extract all that code into one locations,
// I just couldn't figure out how to do it.

function game() {
  let result;
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');
  const score = document.querySelector('#score');
  const roundMessage = document.querySelector('#roundMessage');
  const endMessage = document.querySelector('#endMessage');

    rock.addEventListener('click', () => {
      playerSelection = "rock";
      computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);
      if (result == 1) {
        playerScore += 1;
        roundMessage.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
      } else if (result == -1) {
        computerScore += 1;
        roundMessage.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
      } else if (result == 0) {
        roundMessage.textContent = `You tied, you both picked ${playerSelection}`;
      }
      score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      checkScore(playerScore, computerScore);
    })

    paper.addEventListener('click', () => {
      playerSelection = "paper";
      computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);
      if (result == 1) {
        playerScore += 1;
        roundMessage.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
      } else if (result == -1) {
        computerScore += 1;
        roundMessage.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
      } else if (result == 0) {
        roundMessage.textContent = `You tied, you both picked ${playerSelection}`;
      }
      score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      checkScore(playerScore, computerScore);
    })

    scissors.addEventListener('click', () => {
      playerSelection = "scissors";
      computerSelection = computerPlay();
      result = playRound(playerSelection, computerSelection);
      if (result == 1) {
        playerScore += 1;
        roundMessage.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
      } else if (result == -1) {
        computerScore += 1;
        roundMessage.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
      } else if (result == 0) {
        roundMessage.textContent = `You tied, you both picked ${playerSelection}`;
      }
      score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      checkScore(playerScore, computerScore);
    })
  }

game();
