//Press Any Key to begin
document.onkeyup = function(event) {
  //game begins
}

//Beginning global variables
var wins = 0;
var guessesRemaining = 12;

//Computer Choice Code:
var wordArray = ["linda", "beefsquatch", "fischoeder", "louise", "marshmallow", "frond", "mudflap"];
var wordChoice = [Math.floor(Math.random() * wordArray.length)];
document.getElementById("current-word").innerHTML = wordArray[wordChoice];
//need to be able to have it show up as blank underscores first

//Displays guesses remaining
document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

//Display Letters already Guessed
var userGuess = document.getElementById("already-guessed");
document.onkeypress = function(event) {
  userGuess.textContent = event.key;
};
