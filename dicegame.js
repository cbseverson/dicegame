"use strict"

function setPlayer1Name(){
	player1.name = prompt("Enter your name");
}

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

function iterateDice(player1Dice){
	var dicePrompt = "Roll a dice. Pick one: ";
	for(var i = 0; i < player1Dice.length; i++){
		dicePrompt += player1Dice[i] + ", ";
	}
	return dicePrompt;
}

function dicePlayer1 () {
	for(var i = player1.dice.length; player1Dice.length > 0; i--){
		var choosedie1 = prompt(iterateDice(player1Dice));

		for(var j = 0; j < player1Dice.length; j++){
			if(choosedie1 == player1Dice[j]){
				rollDice(choosedie1);
				player1Dice.splice(j,1);
				console.log(choosedie1);
			}
		}
		
	}
	
}

function iterateDice(player2Dice){
	var dicePrompt = "Roll a dice. Pick one: ";
	for(var i = 0; i < player2Dice.length; i++){
		dicePrompt += player2Dice[i] + ", ";
	}
	return dicePrompt;
}

function dicePlayer1 () {
	for(var i = player2.dice.length; player2Dice.length > 0; i--){
		var choosedie1 = prompt(iterateDice(player2Dice));

		for(var j = 0; j < player2Dice.length; j++){
			if(choosedie1 == player2Dice[j]){
				rollDice(choosedie1);
				player2Dice.splice(j,1);
				console.log(choosedie1);
			}
		}
		
	}
	
}

function rollDice(die){
	switch(die){
		case 4:
			calculateDice(die);
			break;
		case 6:
			calculateDice(die);
			break;
		case 8:
			calculateDice(die);
			break;
		case 10: 
			calculateDice(die);
			break;
		case 12:
			calculateDice(die);
			break;
		case 20: 
			calculateDice(die);
			break;
	}
}

function calculateDice(die){
	var dieValue = Math.floor(Math.random()* die + 1);
}

function calculateScore(){
}


// runGame();










// function rollDice1 (die1, die2) {
// 	
// 	var die2 = Math.floor(Math.random()* 6 + 1);
// 	var score1 = die1 + die2;	
// 	console.log(player1+ " you rolled a " +die1+ " and " +die2+ " to score a "+score1);
// };
// 	var score1; 
// 	return score1;


// function rollDice2 (die3, die4) {
// 	var score2; 
// 	return score2;
// }

// var die3 = Math.floor(Math.random()* 8 + 1);
// var die4 = Math.floor(Math.random()* 10 + 1);
// var score2 = die3 + die4;	
// console.log("You rolled a " +die3+ " and " +die4+ " to score a "+score2);

// function rollDice3 (die5, die6) {
// 	var score3; 
// 	return score3;
// }

// var die5 = Math.floor(Math.random()* 12 + 1);
// var die6 = Math.floor(Math.random()* 20 + 1);
// var score3 = die5 + die6;	
// console.log("You rolled a " +die5+ " and " +die6+ " to score a "+score3);