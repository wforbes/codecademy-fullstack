/*
	We want to create and extract information about your 
	favorite sports team. Basketball, soccer, tennis, or 
	water polo, you pick it. It’s your job to create data 
	using the JavaScript data structures at your disposal: 
	arrays, objects, etc.

	Once created, you can manipulate these data structures 
	as well as gain insights from them. For example, you 
	might want to get the total number of games your team 
	has played, or the average score of all of their games.
*/
const team = {
	_players: [{
	  firstName: 'Lefty',
	  lastName: 'Rightfoot',
	  age: 893
	},
	{
	  firstName: 'Dan',
	  lastName: 'Van Landerhoosenmeggle',
	  age: 3
	},
	{
	  firstName: 'Yoshi',
	  lastName: 'Dinosaur',
	  age: 39999999
	}],
	_games: [{
	  opponent: 'Dodgers',
	  teamPoints: 99,
	  opponentPoints: 1
	},
	{
	  opponent: 'The Hostile Takeovers',
	  teamPoints: 24,
	  opponentPoints: 12
	},
	{
	  opponent: 'Your own fears',
	  teamPoints: 3,
	  opponentPoints: 99
	}],
	get players() {
	  return this._players;
	},
	set players(p) {
	  this._players = p;
	},
	get games() {
	  return this._games;
	},
	set games(g) {
	  this._games = g;
	},
	addPlayer(firstName, lastName, age)  {
	  this._players.push({ firstName, lastName, age });
	},
	addGame(opponent, teamPoints, opponentPoints) {
	  this._games.push({ opponent, teamPoints, opponentPoints })
	}
  };
  team.addPlayer("Steph", "Curry", "28");
  team.addPlayer("Lisa", "Leslie", "44");
  team.addPlayer("Bugs", "Bunny", "76");
  team.addGame("Bowser\'s Dinos", 87, 32);
  team.addGame("Santas Little Helpers", 35, 70);
  team.addGame("A small child", 2, 3547);
  console.log(team.games);