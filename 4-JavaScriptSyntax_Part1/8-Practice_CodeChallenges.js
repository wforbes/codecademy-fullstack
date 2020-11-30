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
/*
	Write a function, sillySentence(), that has 3 string parameters 
	and returns the following silly sentence with the blanks filled 
	in by the arguments passed into the function:
	"I am so _(adjective)_ because I _(verb)_ coding! Time to write
		some more awesome _(noun)_!"
	sillySentence('excited', 'love', 'functions');
	// Should return 'I am so excited because I love coding! Time to write some more awesome functions!'
*/
function sillySentence(a, v, n) {
	return `I am so ${a} because I ${v} coding! Time to write some more awesome ${n}!`;
}

//12 - howOld()
/*
	Write a function, howOld(), that has two number parameters, age and
	year, and returns how old someone who is currently that age was 
	(or will be) during that year. Handle three different cases:
    If the year is in the future, you should return a string in the following format:
    'You will be [calculated age] in the year [year passed in]'
    If the year is before they were born, you should return a string in the following format:
    'The year [year passed in] was [calculated number of years] years before you were born'
    If the year is in the past but not before the person was born, you should return a string in the following format:
    'You were [calculated age] in the year [year passed in]'
*/
function howOld(age, year) {
	const currentYear = new Date().getFullYear();
	if(year > currentYear) {
		const calcAge = (year - currentYear) + age;
		return `You will be ${calcAge} in the year ${year}`;
	} else if(year < currentYear) {
		if ( (currentYear - age) > year ) {
			const calcYears = (currentYear - age) - year;
			return `The year ${ year } was ${ calcYears } years before you were born`;
		} else {
			const calcAge = age - (currentYear - year);
			return `You were ${ calcAge } in the year ${ year }`;
		}
	}
}

//13 - Fix the broken code (round 2)!
/*
	Given the percentage of DNA shared between two people, 
	you can calculate their likely familial relationship.
	We wrote a function, whatRelation(), that has one number 
	parameter, percentSharedDNA, and returns the likely relationship. 
	We expect the number passed in to always be an integer from 
	0 to 100, but for some reason it’s not working!
	Here’s how it’s supposed to calculate the relationship:
		100 should return 'You are likely identical twins.'
		35-99 should return 'You are likely parent and child 
			or full siblings.'
		14-34 should return 'You are likely grandparent and grandchild,
			 aunt/uncle and niece/nephew, or half siblings.'
		6-13 should return 'You are likely 1st cousins.'
		3-5 should return 'You are likely 2nd cousins.'
		1-2 should return 'You are likely 3rd cousins.'
		0 should return 'You are likely not related.'
	Unfortunately, it’s not working how we want!
*/
const whatRelation = percentSharedDNA => {
	if (percentSharedDNA === 100) {
		return 'You are likely identical twins.'
	}
	if (percentSharedDNA > 35) {
		return 'You are likely parent and child or full siblings.'
	}
	if (percentSharedDNA > 13) {
		return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
	}
	if (percentSharedDNA > 5) {
		return 'You are likely 1st cousins.'
	}
	if (percentSharedDNA > 2) {
		return 'You are likely 2nd cousins.'
	}
	if (percentSharedDNA > 0) {
		return 'You are likely 3rd cousins'
	}
	return 'You are likely not related.'
}
console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))// Should print 'You are likely 2nd cousins.'

//14 - tipCalculator()
/*
	Create a function, tipCalculator(), that has two parameters, 
	a string representing the quality of the service received and 
	a number representing the total cost.

	Return the tip, as a number, based on the following:
	‘bad’ should return a 5% tip
	‘ok’ should return a 15% tip
	‘good’ should return a 20% tip
	‘excellent’ should return a 30% tip
	all other inputs should default to 18%
*/
function tipCalculator(quality, total) {
	const tips = {
		'bad':0.05,
		'ok':0.15,
		'good':0.2,
		'excellent':0.3,
		'default':0.18
	}
	if(tips.hasOwnProperty(quality)) {
		return tips[quality] * total;
	}
	return tips['default'] * total;
}

//15 - toEmoticon()
/*
	Write a function, toEmoticon(), that takes in a string 
	and returns the corresponding emoticon as a string. 
	Use a switch/case, and cover these cases:
	'shrug' should return '|_{"}_|'
	'smiley face' should return ':)'
	'frowny face' should return':('
	'winky face' should return ';)'
	'heart' should return '<3'
	any other input should return '|_(* ~ *)_|'
*/
function toEmoticon(emo) {
	switch(emo) {
		case 'shrug':
			return '|_{"}_|';
		case 'smiley face':
			return ':)';
		case 'frowny face':
			return ':(';
		case 'winky face':
			return ';)';
		case 'heart':
			return '<3';
		default:
			return '|_(* ~ *)_|';
	}
}