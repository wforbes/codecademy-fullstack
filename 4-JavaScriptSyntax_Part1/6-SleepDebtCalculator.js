/*
	Did you know that giraffes sleep 4.6 hours a day? 
	We humans need more than that. If we don’t sleep enough, 
	we accumulate sleep debt. In this project we’ll calculate 
	if you’re getting enough sleep each week using a sleep 
	debt calculator.
	The program will determine the actual and ideal hours of 
	sleep for each night of the last week.
	Finally, it will calculate, in hours, how far you are 
	from your weekly sleep goal.
*/
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday', 'Sunday'];
const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 5;
      break;
    case 'Tuesday':
      return 6;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 6;
      break;
    case 'Friday':
      return 6;
      break;
    case 'Saturday':
      return 9;
      break;
    case 'Sunday':
      return 9;
      break;
    default: 
      return 0;
      break;
  }
};

const getActualSleepHours = (min = 0, max = 0) => {
  let totalSleepHours = 0;
  if (min !== 0 && max !== 0) {
    for (let i=0; i < 7; i++) {
      let randomHours = Math.floor(Math.random() * (max-min)) + min;
      totalSleepHours += randomHours;
    }
  } else {
    for (let day of daysOfWeek) {
      totalSleepHours += getSleepHours(day);
    }
  }
  
  return totalSleepHours;
};

const getIdealSleepHours = (idealHours = 8) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(6, 10);
  const idealSleepHours = getIdealSleepHours(8);
  const sleepDebt = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep! ("
      +sleepDebt+")");
  } else if(actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed! ("
      +sleepDebt+")");
  } else if(actualSleepHours < idealSleepHours) {
    console.log("You should get some rest! ("
      +sleepDebt+")");
  }
};

calculateSleepDebt();