/*
	Deep in his mountain-side meteorology lab, 
	the mad scientist Kelvin has mastered weather prediction.
	Recently, Kelvin began publishing his weather forecasts 
	on his website. However there’s a problem: All of his 
	forecasts describe the temperature in Kelvin.
	With our knowledge of JavaScript, let’s convert Kelvin 
	to Celsius, then to Fahrenheit.
	For example, 283 K converts to 10 °C which converts to 50 °F.
*/

//forecast temperature in Kelvin
const kelvin = 305;

//forecast temperature in Celsius
const celsius = kelvin - 273;

//forecast temperature in fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//round fahrenheit temperature down
fahrenheit = Math.floor(fahrenheit);

newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);