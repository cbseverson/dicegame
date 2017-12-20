"use strict"
function iterateDice(playerDice){
	var dicePrompt = "Roll a dice. Pick one: ";
	for(var i = 0; i < playerDice.length; i++){
		dicePrompt += playerDice[i] + ", ";
	}
	return dicePrompt;
}

function dicePlayer (player) {
	var counter = 0;
	for(var i = player.dice.length; player.dice.length > 0; i--){
		var choosedie = prompt(iterateDice(player.dice));

		for(var j = 0; j < player.dice.length; j++){
			if(choosedie == player.dice[j]){
				var value = rollDice(choosedie);
				player.dice.splice(j,1);
				var valueRoll = calculateDice(choosedie);
				console.log(valueRoll); 
				var playerScore = [""]
			}	
		}
	}
	return calculateDice;
	return playerScore;
}

function rollDice(die){
	switch(die){
		case 4:
			var value = calculateDice(die);
			return value;
		case 6:
			var value = calculateDice(die);
			return value;
		case 8:
			var value = calculateDice(die);
			return value;
		case 10: 
			var value = calculateDice(die);
			return value;
		case 12:
			var value = calculateDice(die);
			return value;
		case 20: 
			var value = calculateDice(die);
			return value;
	}
}

function calculateDice(die){
	var randomDie = Math.floor(Math.random()* die) + 1;
	return randomDie;
}

function getSum(total, playerScore){
	return	total	+ playerScore;
}

function extraPoints(valueRoll){
	if (valueRoll = 10) {
		var addPoints = valueRoll*10
		return addPoints;
	}
}

function calculateWinner(playerScore, addPoints){
	var player1Score = playerScore + addPoints;
		return player1Score;
		console.log(player1Score);
	var player2Score = playerScore + addPoints;
		return player2Score;
		console.log(player2Score);
	if (player1Score > player2Score) { 
		console.log("Player 1 Wins")
	}
}		

function gameSetup(){

	var player1 = {
		name: "",
		score: 0,
		dice: [4, 6, 8, 10, 12, 20]
	}

	var player2 = {
		name: "Courtney",
		score: 0, 
		dice: [4, 6, 8, 10, 12, 20]
	}

	var players = [player1, player2];
	return players;
}

function runGame(){
	var players = gameSetup();
	dicePlayer(players[0]);
	dicePlayer(players[1]);
	calculateDice();
	getSum();
	extraPoints();
	calculateWinner();
}
runGame();