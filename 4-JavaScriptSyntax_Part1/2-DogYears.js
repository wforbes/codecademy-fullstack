/*
	Dogs mature at a faster rate than human beings. 
	We often say a dog’s age can be calculated in 
	“dog years” to account for their growth compared 
	to a human of the same age. In some ways we could 
	say, time moves quickly for dogs — 8 years in a human’s
	life equates to 45 years in a dog’s life. How old 
	would you be if you were a dog?
	Here’s how you convert your age from “human years” to “dog years”:
		The first two years of a dog’s life count as 10.5 dog years each.
		Each year following equates to 4 dog years.
	Before you start doing the math in your head, let a computer take 
	care of it! With your knowledge of math operators and variables, 
	use JavaScript to convert your human age into dog years.
*/

const myAge = 10;

let earlyYears = 2;

earlyYears *= 10.5;

//age not counting the first two years
let laterYears = myAge - 2;

//later dog years accounted for by age
laterYears *= 4;

// dog years as the sum of early years and later years
let myAgeInDogYears = earlyYears + laterYears;

// my name in lower case letters
let myName = "Will".toLowerCase();

// an output of this programs calculations
console.log(`My name is ${myName}. I am ${myAge} ` + 
			`years old in human years which is ` +
			`${myAgeInDogYears} years old in dog years.`);