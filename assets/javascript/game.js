//Create variables for Wins, Losses, Guesses Left, and Guesses So Far.
var userWins = 0;
    userLosses = 0;
    guessesLeft = 9;
    guessesMade = [];

//Determine which key was pressed by the user. 
var userInput;
var computerInput;
var alreadyChosen = false;

function letterChecker() {
    for (var i = 0; i < guessesMade.length; i++){
        if (guessesMade[i] === userInput.key) {
            alreadyChosen = true;
        }
    }
}

document.onkeyup = function (event) {
    userInput = event;
    letterChecker()
    if (guessesLeft <= 0) {
        alert("You Lose");
        userLosses++;
        guessesLeft = 9;
        guessesMade = [];
        displayUserGuesses()
    } else if (userInput.keyCode > 64 && userInput.keyCode < 91 && !alreadyChosen) {
        guessesMade.push(userInput.key)
        guessesLeft--;
        randLetter() 
        runGame()
    } else {
        alert("Please press a valid key.");
        alreadyChosen = false;
    }

    
}


//Get Computer input.
function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    computerInput = letters[Math.floor(Math.random() * letters.length)];
}

//Compare userInput against computerInput to determine if User wins or loses slash run game. 

function runGame() {
    console.log("guesses made: " + guessesMade)
    console.log("guesses left: " + guessesLeft)
    console.log("user guess: " + userInput.key)
    console.log("computer guess: " + computerInput)
    if (userInput.key === computerInput) {
        alert("You win!")
        userWins++;
        guessesLeft = 9;
        guessesMade = [];
    }
    displayUserGuesses()
   
}

//If User loses, check to see if User has guesses left. If true, allow userInput until userGuesses is greater than 9. 

//Display guessesMade. 
function displayUserGuesses() {
    var guessesMadeDiv = "Guesses Made: ";
    
    for (var index = 0; index < guessesMade.length; index++) {
        
       guessesMadeDiv += `<span> ${guessesMade[index]}</span>`;
    }

    var guessesLeftDiv = `<p>Guesses Left: ${guessesLeft}</p>
                            <p>Wins: ${userWins}</p>
                            <p>Losses: ${userLosses}</p>`;
    document.getElementById("displayGuesses").innerHTML = guessesMadeDiv + guessesLeftDiv;
}


//Display userGuessesLeft.

//If userInput is equal to computerInput increase userWins by 1. 

