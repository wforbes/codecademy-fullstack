/*
	Rock paper scissors is a classic two player game. 
	Each player chooses either rock, paper, or scissors. 
	The items are compared, and whichever player chooses 
	the more powerful item wins.
	The possible outcomes are:
		Rock destroys scissors.
		Scissors cut paper.
		Paper covers rock.
		If there’s a tie, then the game ends in a draw.
	Our code will break the game into four parts:
		Get the user’s choice.
		Get the computer’s choice.
		Compare the two choices and determine a winner.
		Start the program and display the results.
	
	*NOTE: This project didn't work with arrays :( *
*/
const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (
	  userInput === 'rock' || 
	  userInput === 'paper' || 
	  userInput === 'scissors' ||
	  userInput === 'bomb'
	) {
	  return userInput;
	} else {
	  console.log('Please enter either rock, paper, or scissors');
	}
  };
  
  const getComputerChoice = () => {
	const choice = Math.floor(Math.random() * 3);
	switch(choice) {
	  case 0:
		return 'rock';
		break;
	  case 1:
		return 'scissors';
		break;
	  case 2:
		return 'paper';
		break;
	  default:
		return 'We dun goofed, try again.';
		break;
	}
  };
  
  const determineWinner = (userChoice, computerChoice) => {
	if(userChoice === 'bomb') {
	  return 'The user won!';
	}
	
	if (userChoice === computerChoice) {
	  return 'The game was a tie!';
	}
	
	if (userChoice === 'rock') {
	  if (computerChoice === 'paper') {
		return 'The computer won!';
	  } else {
		return 'The user won!';
	  }
	}
	if (userChoice === 'paper') {
	  if(computerChoice === 'rock') {
		return 'The user won!';
	  } else {
		return 'The computer won!';
	  }
	}
	if (userChoice === 'scissors') {
	  if(computerChoice === 'paper') {
		return 'The user won!';
	  } else {
		return 'The computer won!';
	  }
	}
  };
  
  const playGame = () => {
	let userChoice = getUserChoice("bomb");
	let computerChoice = getComputerChoice("scissors");
	console.log(determineWinner(userChoice, computerChoice));
  };
  console.log(playGame());