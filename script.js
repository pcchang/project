$(document).ready(function() {   $('.rock').click(function() {       console.log("rock")       userChoice = "ROCK"       play()       });      $('.paper').click(function() {       console.log("paper")       userChoice = "PAPER"       play()       });       $('.scissors').click(function() {    	console.log("scissors")    	userChoice = "SCISSORS"    	play()   }); });var getComChoice = function() {  var choice = Math.random();   var comChoice = "";  if (choice < 0.3) {  	console.log("rock");	comChoice = "rock";  }  else if (choice < 0.6) {	console.log("paper");	comChoice = "paper";  }  else {	console.log("scissors");	comChoice = "scissors";  }  return comChoice;};	var play = function() {	var comChoice = getComChoice();	if (userChoice === comChoice.toUpperCase()) {		alert("You both chose " + userChoice.toLowerCase() + "! Try again!");		userChoice = prompt("What is your choice?").toUpperCase();		getComChoice();	}	if (userChoice === "ROCK" && comChoice.toUpperCase() === "PAPER") {		alert("You chose rock and the computer chose paper! You lose!");	}	if  (userChoice === "ROCK" && comChoice.toUpperCase() === "SCISSORS") {		alert("You chose rock and the computer chose scissors! You win!");	}	if (userChoice === "PAPER" && comChoice.toUpperCase() === "SCISSORS") {		alert("You chose paper and the computer chose scissors! You lose!");	}	if (userChoice === "PAPER" && comChoice.toUpperCase() === "ROCK") {		alert("You chose paper and the computer chose rock! You win!");	}	if (userChoice === "SCISSORS" && comChoice.toUpperCase() === "ROCK") {		alert("You chose scissors and the computer chose rock! You lose!");	}	if (userChoice === "SCISSORS" && comChoice.toUpperCase() === "PAPER") {		alert("You chose scissors and the computer chose paper! You win!");	}		};	