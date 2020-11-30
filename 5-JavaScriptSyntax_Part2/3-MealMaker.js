/*
	As a frequent diner, you love trying out new restaurants and experimenting 
	with different foods. However, having to figure out what you want to order 
	can be a time-consuming ordeal if the menu is big, and you want an easier 
	way to be able to figure out what you are going to eat.

	In this project, you’ll use JavaScript to randomly create a three-course 
	meal based on what is available on a menu. We’ll keep running it until 
	we’re satisfied with the generated meal!
*/
const menu = {
	_courses: {
	  _appetizers: [],
	  _mains: [],
	  _desserts: [],
	  get appetizers() {
		return this._appetizers;
	  },
	  set appetizers(appetizers) {
		this._appetizers = appetizers;
	  },
	  get mains() {
		return this._mains;
	  },
	  set mains(mains) {
		this._mains = mains;
	  },
	  get desserts() {
		return this._desserts;
	  },
	  set desserts(desserts) {
		this._desserts = desserts;
	  }
	},
	get courses() {
	  return { appetizers, mains, desserts } = this._courses;
	},
	addDishToCourse(courseName, dishName, dishPrice) {
	  const dish = {
		name: dishName,
		price: dishPrice
	  };
	  if (this.courses.hasOwnProperty(courseName)) {
		this.courses[courseName].push(dish);
	  } else {
		console.log("error: Didn't recognize " + courseName + " as a valid course name!");
	  }
	},
	getRandomDishFromCourse(courseName) {
	  const dishes = this._courses[courseName];
	  return dishes[Math.floor(Math.random() * dishes.length)];
	},
	generateRandomMeal() {
	  const appetizer = this.getRandomDishFromCourse('appetizers');
	  const main = this.getRandomDishFromCourse('mains');
	  const desserts = this.getRandomDishFromCourse('desserts');
	  const totalPrice = appetizer.price + main.price + desserts.price;
	  return `Your meal is ${appetizer.name}, ${main.name}, ${desserts.name} ... that'll be $${totalPrice} plus tax`;
	}
  };
  menu.addDishToCourse('appetizers', 'Flem', 400);
  menu.addDishToCourse('appetizers', 'Flem', 400);
  menu.addDishToCourse('appetizers', 'Mucus', 600);
  menu.addDishToCourse('appetizers', 'Tesla Model X', 150000);
  menu.addDishToCourse('appetizers', 'Ben Franklin\'s left eye', 87);
  menu.addDishToCourse('mains', 'Quesadilla', 3);
  menu.addDishToCourse('mains', 'Oscar the dog', 983724);
  menu.addDishToCourse('mains', 'Reign Energy Drink', 2);
  menu.addDishToCourse('mains', 'glowing radioactive sludge', 3548);
  menu.addDishToCourse('desserts', 'Cookie', 1);
  menu.addDishToCourse('desserts', 'Chocolate Bar', 99);
  menu.addDishToCourse('desserts', 'Air', 0);
  menu.addDishToCourse('desserts', 'A long story from an old man about the war', 7);
  menu.addDishToCourse('desserts', 'Used tissues', 99);
  const meal = menu.generateRandomMeal();
  console.log(meal);