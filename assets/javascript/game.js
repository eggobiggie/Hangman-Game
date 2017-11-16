
//Beginning global variables
var wins = 0;
var guessesRemaining = 12;

//Computer Choice Code:
var wordArray = ["linda", "beefsquatch", "fischoeder", "louise", "marshmallow", "frond", "mudflap"];
var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(wordChoice);

var alreadyGuessed = [];

//THINGS NEEDED: Verification of alphabet and TOLOWERCASE.

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
    var didWeWin = true;
      for (i = 0; i < wordChoice.length; i++) {
        if (playSpace[i] != wordChoice[i]) {
          didWeWin = false;
        }
      }
      if (didWeWin === true) {
        winnerFunction();
        //return;
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

 function winnerFunction() {
   //need to add style so that the margin is changed for each, need to add each image and make them the right spot
   //need to make each image visible as well.
   //ADD IMAGES TO HTML
   //also need to make it so that the win-count goes up
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
 }

 function loserFunction() {
   if (guessesRemaining === 0) {
    document.getElementById("bobFamily").style.visibility = "hidden";
    document.getElementById("tinaSad").style.visibility = "visible";
    document.getElementById("resultTextChange").innerHTML = "You Lost! Try again!";
    guessesRemaining = 12;
    wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(wordChoice);
    playSpace = drawBlanks();
    };
 }
