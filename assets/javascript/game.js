
//Beginning global variables
var wins = 0;
var guessesRemaining = 12;

//Computer Choice Code:
var wordArray = ["linda", "beefsquatch", "fischoeder", "louise", "marshmallow", "frond", "mudflap"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];
guessesRemainingFunction();

  document.onkeypress = function(event) {
    var userGuess = event.key;
    wordCheck(userGuess);
    drawPlaySpace();
  };

function wordCheck(userGuess) {
  if (guessesRemaining === 0) {
    loserFunction();
    return;
  }
  var doesItMatch = false;
    for (i = 0; i < wordChoice.length; i++) {
      if (userGuess === wordChoice[i]) {
        doesItMatch = true;
        playSpace[i] = userGuess;
      }
    }
    if (!doesItMatch) {
     guessesRemaining--;
     guessesRemainingFunction();
     alreadyGuessed.push(userGuess);
     alreadyGuessedFunction();
   }
  }

  function alreadyGuessedFunction() {
    document.getElementById("already-guessed").innerHTML = alreadyGuessed;
  }


  function guessesRemainingFunction() {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  }

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

 function loserFunction() {
   if (guessesRemaining === 0) {
    document.getElementById("bobFamily").style.visibility = "hidden";
    document.getElementById("tinaSad").style.visibility = "visible";
    document.getElementById("resultTextChange").innerHTML = "You Lost! Try again!";
    };
 }
