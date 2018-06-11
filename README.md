# Word-Guess-Game
Assignment Three: Word Psychic Game. 

### Overview

In this activity, we test the user's ability to guess the same letter as the computer to see if they're really a word psychic! When the user arrives on the page, the will see the directions on how to get started with their guesses. 

### Step One

In the first step, I create variables for user input, computer input and a variable to ensure the user hasn't already guessed a letter they're inputting. I then create a function to ensure their input is valid. 

### Step Two

In the second step, we're doing a lot of stuff. We track user input when they press a key, display their guesses (if valid), their losses and wins once the function for computer input is run and alert to the user if their letter has already been chosen. This is where the bulk of the game takes place. 

### Step Three

In this step, we get the computer input using a function called randLetter. Inside this function, I created an array and used Math.floor and Math.random to allow the computer to randomly select a letter.

### Step Four

Here we created the function to allow the user input to be compared to computer input. If the user wins, they get an alert and wins increases by one and the remaining variables are reset to allow the user to play again. I then added this function to Step Two where the user's input is taken. 

### Step Five

In the last step, I created a function that would allow the display of the guesses made, guesses left, and user wins, then added this to the main function in Step Two.


