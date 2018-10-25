//Computer options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//Variables holding references to the places in the HTML where we want to display things.
var userGuessText = document.getElementById("userguess-text");
var computerGuessText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFarText = document.getElementById("guessessofar-text");

document.onkeyup = function () {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

    var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    if (userChoices.indexOf(userGuess) > -1) {
        guessesLeft--;

        if (userGuess === computerGuess) {
            wins++;
            guessesSoFar = [];
        }

        if (userGuess != computerGuess) {
            losses++;
            guessesSoFar.push(userGuess);
        }

        if (guessesLeft <= -1) {
            userGuess = "";
            computerGuess = "";
            wins = 0;
            losses = 0;
            guessesLeft = 9;
            guessesSoFar = [];
        }

    } else {
        return;
    }

    // Display the user and computer guesses, and wins/losses.
    userGuessText.textContent = "You chose: " + userGuess;
    computerGuessText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses so far: " + guessesSoFar;

}
