
//Beginning global variables
var wins = 0;
var guessesRemaining = 12;
var gameFinished = false;

//Computer Choice Code:
var wordArray = ["linda", "beefsquatch", "fischoeder", "louise", "marshmallow", "frond", "mudflap"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];

//THINGS NEEDED: Verification of alphabet and TOLOWERCASE.

guessesRemainingFunction();


//keypress function to start things off
  document.onkeypress = function(event) {
    var userGuess = event.key;
    wordCheck(userGuess);
    drawPlaySpace();
  };

//function for checking the guesses against words, includes what happens for a win or a loss
function wordCheck(userGuess) {
  if (gameFinished === true) {
    resetFunction();
    return;
  }
  var doesItMatch = false;
    for (i = 0; i < wordChoice.length; i++) {
      if (userGuess === wordChoice[i]) {
        doesItMatch = true;
        playSpace[i] = userGuess;
      }
    }
    var didWeWin = true;
      for (i = 0; i < wordChoice.length; i++) {
        if (playSpace[i] != wordChoice[i]) {
          didWeWin = false;
        }
      }
      if (didWeWin === true) {
        winnerFunction();
        return;
      }
    for (i = 0; i < alreadyGuessed.length; i++) {
      if (userGuess === alreadyGuessed[i]) {
        return;
      }
    }
    if (!doesItMatch) {
     guessesRemaining--;
     guessesRemainingFunction();
     alreadyGuessed.push(userGuess);
     alreadyGuessedFunction();
   }
   if (guessesRemaining === 0) {
     loserFunction();
     return;
   }
  }

  function alreadyGuessedFunction() {
    document.getElementById("already-guessed").innerHTML = alreadyGuessed;
  }

  function guessesRemainingFunction() {
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
  }

document.getElementById("current-word").innerHTML = playSpace;

//functions for creating underscores and spaces between the underscores
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


//functions for a win, a loss, and/or a reset
 function winnerFunction() {
   switch (wordChoice) {
     case "linda":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("linda").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Alriiiiight! It's Linda!";
     break;
     case "beefsquatch":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("beefsquatch").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "THIS IS ME NOW! It's Beefsquatch!";
     break;
     case "fischoeder":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("fischoeder").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "You can work in my coal mine! It's Calvin Fischoeder!";
     break;
     case "louise":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("louise").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Enough with Canada! It's Louise!";
     break;
     case "marshmallow":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("marshmallow").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "If you show me a sweet potato pie, I am on top of it. It's Marshmallow!";
     break;
     case "frond":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("frond").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Don't throw Repressed Memory Emily! It's Mr. Frond!";
     break;
     case "mudflap":
     document.getElementById("bobFamily").style.visibility = "hidden";
     document.getElementById("mudflap").style.visibility = "visible";
     document.getElementById("resultTextChange").innerHTML = "Oh, Mudflap? Uh that was my grandmother's name. It's Mudflap!";
     break;
   }
   wins++;
   winsFunction();
 }

 function winsFunction() {
   document.getElementById("total-wins").innerHTML = wins;
   gameFinished = true;
 }

 function loserFunction() {
   if (guessesRemaining === 0) {
    document.getElementById("bobFamily").style.visibility = "hidden";
    document.getElementById("tinaSad").style.visibility = "visible";
    document.getElementById("resultTextChange").innerHTML = "You Lost! Try again!";
    gameFinished = true;
    }
 }

 function resetFunction() {
   document.getElementById("bobFamily").style.visibility = "visible";
   document.getElementById("tinaSad").style.visibility = "hidden";
   document.getElementById("resultTextChange").innerHTML = "";
   document.getElementById("linda").style.visibility = "hidden";
   document.getElementById("beefsquatch").style.visibility = "hidden";
   document.getElementById("fischoeder").style.visibility = "hidden";
   document.getElementById("louise").style.visibility = "hidden";
   document.getElementById("marshmallow").style.visibility = "hidden";
   document.getElementById("frond").style.visibility = "hidden";
   document.getElementById("mudflap").style.visibility = "hidden";
   alreadyGuessed.length = 0;
   alreadyGuessedFunction();
   guessesRemaining = 12;
   wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
   console.log(wordChoice);
   playSpace = drawBlanks();
   gameFinished = false;
 }
