//1 - Introduction
/*
	Write a function, greetWorld(). Your function should have no parameters 
	and return the string 'Hello, World!'.
	Helpful Notes:
		Your function can be a function expression or a function declaration.
		Notice that the prompt requires your function to return the string—it 
			will not pass the test if the string is printed to the console 
			rather than returned.
		Your code must return 'Hello, World!' exactly. The test will not pass 
			with the following strings: 'hello, world!', 'Hello, world!', 
			'Hello World!', 'Hello World', 'Hello, World.', etc.
*/
function greetWorld() {
	return "Hello, World!";
}

//2 - canIVote()
/*
	The most common minimum age to vote is 18. Write a function canIVote() 
	that takes in a number, representing the person’s age, and returns the 
	boolean true if they are 18 years old or older, and the boolean false 
	if they are not.
*/
function canIVote(age) {
	return age >= 18;
}

//3 - agreeOrDisagree()
/*
	Write a function, agreeOrDisagree(), that takes in two strings, and 
	returns 'You agree!' if the two strings are the same and 'You disagree!'
	 if the two strings are different. 
*/
function agreeOrDisagree(a, b) {
	return a === b ? "You agree!" : "You disagree!";
}

//4 - lifePhase()
/*
	Write a function, lifePhase(), that takes in a person’s age, as a number, 
	and returns which phase of life they are in.

	Here are the classifications:
	0-3 should return 'baby'
	4-12 should return 'child'
	13-19 should return 'teen'
	20-64 should return 'adult'
	65-140 should return 'senior citizen'
	If the number is less than 0 or greater than 140, the program should 
	return 'This is not a valid age'
*/
function lifePhase(age) {
	if(age < 0 || age > 140){
		return "This is not a valid age";
	}
	let phases = [
		[0, 3, "baby"],
		[4, 12, "child"],
		[13, 19, "teen"],
		[20, 64, "adult"],
		[65, 140, "senior citizen"]
	];
	for(let i = 0; i < phases.length; i++) {
		if(age >= phases[i][0] && age <= phases[i][1]) {
			return phases[i][2];
		}
	}
}

//5 - finalGrade()
/*
	Write a function, finalGrade(). It should:
		take three arguments of type number
		find the average of those three numbers
		return the letter grade (as a string) that
			the average corresponds to
		return ‘You have entered an invalid grade.’
		if any of the three grades are less than 0 
			or greater than 100
	0-59 should return: 'F'
	60-69 should return: 'D'
	70-79 should return: 'C'
	80-89 should return: 'B'
	90-100 should return: 'A'
*/
function finalGrade(a,b,c) {
	const ins = [a,b,c];
	const avg = (a+b+c)/3;
	for(let i = 0; i < 3; i++){
		if(ins[i] < 0 || ins[i] > 100) {
			return "You have entered an invalid grade.";
		}
	}
	let grades = [
		[0, 59, "F"],
		[60, 69, "D"],
		[70, 79, "C"],
		[80, 89, "B"],
		[90, 100, "A"],
	];
	for(let i = 0; i < grades.length; i++) {
		if (avg >= grades[i][0] && avg <= grades[i][1]) {
			return grades[i][2];
		}
	}
}

//6 - reportingForDuty()
/* 
	Write a function, reportingForDuty(), 
	that has two string parameters, rank and lastName, 
	and returns a string in the following format: 
	‘rank lastName reporting for duty!’
*/
function reportingForDuty(rank, lastName) {
	return `${rank} ${lastName} reporting for duty!`;
}

//7 - Fix The Broken Code
/*
	We wrote a function, rollTheDice(), which is 
	supposed to simulate two dice being rolled and totalled.
	It’s close to doing what we want, but there’s something 
	not quite right. Can you fix our code, please? 
*/
const rollTheDice = () => {
	// Math.random() gives us a random number from 0 up to, but not including, 1
	// We multiplied that by 6 to get a number between 0 and up to, but not including, 6
	// But since we actually wanted numbers from 1 to 6, inclusive, we added 1
	let die1 = Math.floor(Math.random() * 6) + 1
	let die2 = Math.floor(Math.random() * 6) + 1
	return die1 + die2
}

//8 - calculateWeight()
/*
	Though an object’s mass remains consistent throughout the universe, 
	weight is determined by the force of gravity on an object. Since different 
	planets have different gravity, the same object would weigh different amounts 
	on each of those planets! Cool, huh?
	Write a function, calculateWeight(). It should:
		have two parameters: earthWeight and planet
		expect earthWeight to be a number
		expect planet to be a string
		return a number representing what that Earth-weight would equate to on the planet passed in.
	Handle the following cases:
	'Mercury' weight = earthWeight * 0.378
	'Venus' weight = earthWeight * 0.907
	'Mars' weight = earthWeight * 0.377
	'Jupiter' weight = earthWeight * 2.36
	'Saturn' weight = earthWeight * 0.916
	For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/
function calculateWeight(earthWeight, planet) {
	const weights = {
		'Mercury': 0.378,
		'Venus': 0.907,
		'Mars': 0.377,
		'Jupiter': 2.36,
		'Saturn': 0.916
	};

	if(weights.hasOwnProperty(planet)) {
		return earthWeight * weights[planet];
	} else {
		return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
	}
}

//9 - truthyOrFalsy()
/*
	It can be hard to keep track of what’s truthy or falsy in JavaScript. 
	Write a function, truthyOrFalsy(), that takes in any value and returns 
	true if that value is truthy and false if that value is falsy.
*/
function truthyOrFalsy(v) {
	return v ? true : false;
}

//10 - numImaginaryFriends()
/*
	A person’s number of imaginary friends are always 33% of 
	their total friends.
	Write a function, numImaginaryFriends(), that takes in the 
	total number of friends a person has and returns the number 
	of imaginary friends they have.
	Since friends can only come in whole numbers, be sure to 
	round your result before returning it.
	The JavaScript Math.round() function will come in handy. 
	Check out the documentation here to figure out how it works.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
*/
function numImaginaryFriends(total) {
	return Math.round(total * 0.33);
}
//11 - sillySentence()

//12 - howOld()
//13 - Fix the broken code (round 2)!
//14 - tipCalculator()
//15 - toEmoticon()