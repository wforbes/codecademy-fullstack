/*
	In this project, you’ll write JavaScript functions to power a small 
	guessing game. Your code will run in the browser instead of just the
	 terminal, but you have an output section to help you test your 
	 functions and show you if you have syntax errors.

*/
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/*
	Create a generateTarget() function. This function will be called 
	at the start of each new round in order to generate the new secret target number.
	This function should return a random integer between 0 and 9.
*/
function generateTarget(){
  return Math.floor(Math.random() * 9) + 1;
}

/*
Create a compareGuesses() function. This function will be 
called each round to determine which guess is closest to 
the target number.
This function:
	Has three parameters representing the user (human) guess, 
		a computer guess, and the secret target number to be guessed.
	Determines which player (human or computer) wins based 
		on which guess is closest to the target. If both 
		players are tied, the human user should win.
	Return true if the human player wins, and false if the
		computer player wins.
*/
function compareGuesses(user, computer, secret) {
  const userDiff = Math.abs(user-secret); 
  const compDiff = Math.abs(computer-secret);
  return (userDiff <= compDiff );
}

/*
Create an updateScore() function. This function 
will be used to correctly increase the winner’s 
score after each round.
This function:
	Has a single parameter. This parameter will be 
		a string value representing the winner.
	Increases the score variable (humanScore or 
		computerScore) by 1 depending on the winner 
		passed in to updateScore. The string passed 
		in will be either 'human' or 'computer'.
    Does not need to return any value.
*/
function updateScore(winner) {
  if(winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

/*
Create an advanceRound() function. This function 
will be used to update the round number after each round.

advanceRound() should increase the value of currentRoundNumber by 1.
*/
function advanceRound() {
  currentRoundNumber++;
}