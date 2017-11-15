//Press Any Key to begin
document.onkeyup = function(event) {
  //game begins
}

//Beginning global variables
var wins = 0;
var guessesRemaining = 12;

//Computer Choice Code:
var wordArray = ["linda", "beefsquatch", "fischoeder", "louise", "marshmallow", "frond", "mudflap"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

//Displays guesses remaining

document.onkeypress = function(event) {
  var userGuess = event.key;
  wordCheck(userGuess);
  drawPlaySpace();
};

function wordCheck(userGuess) {
  var doesItMatch = false;
    for (i = 0; i < wordChoice.length; i++) {
      if (userGuess === wordChoice[i]) {
        doesItMatch = true;
        playSpace[i] = userGuess;
      }
    }
    if (!doesItMatch) {
     guessesRemaining--;
     console.log(guessesRemaining);
     guessesRemainingFunction();
   }
  }

  function guessesRemainingFunction () {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  }

guessesRemainingFunction();

document.getElementById("current-word").innerHTML = playSpace;

function drawBlanks() {
  var underscoreArray = [];
  for (i = 0; i < wordChoice.length; i++) {
    underscoreArray.push("_");
  }
  return underscoreArray;
}

var playSpace = drawBlanks();

function drawPlaySpace() {
  for (i = 0; i < playSpace.length; i++) {
    document.getElementById("current-word").innerHTML = playSpace.join(" ");
  }
}

 drawPlaySpace();


//add function to make for loop run - key event?


//number of letters within a word must match spaces and have underscores corresponding to them so that they display as such when the game begins.

//user presses key - does the guess match a letter or not (true/false & if/else & for loop to check)

//IF TRUE: The letter fills in the blank

//IF FALSE: 1. The letter goes to the list of letters guessed 2. The turns goes down. (two steps here)
