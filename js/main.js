// Initialize variables
let lives = 3;
let sum = 2;
let dice1 = 1;
let dice2 = 1;
let targetNumber = generateRandomTarget();

//function for generating a random number
function generateRandomTarget() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = dice1 + dice2;

    console.log(`next = ${diceTotal}`);

    return diceTotal; // Random number between 2 and 12
}

//function for updating the lives
function updateLivesDisplay() {
    let livesContainer = document.querySelector('#lives');
    livesContainer.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < lives; i++) {
        livesContainer.innerHTML += '<span class="heart">❤️</span>'; // Add heart icons
    }
}

//function for rolling the dice
function rollDice() {
    if (lives > 0) {
        // Roll two different dice
        //selects dice one and 2 and the result
        document.querySelector('#dice1').textContent = dice1;
        document.querySelector('#dice2').textContent = dice2;
        document.querySelector('#result').textContent = `Uitkomst: ${targetNumber}`;
        //selects the guess and the message
        let guess = document.querySelector('#guess').value;
        console.log(guess);
        let message = document.querySelector('#message');
        //With an if or else statement it looks at if the player has gotten it right or wrong
        if ((sum > targetNumber && guess === 'higher') || (sum < targetNumber && guess === 'lower')) {
            lives--;
            updateLivesDisplay(); // Update lives display
            message.textContent = " Je hebt het fout geraden!!";
        } else {

            message.textContent = "Je hebt het goed geraden!!!!";
        }

        // Check if lives are exhausted
        if (lives === 0) {
            message.textContent = "Helaas, je hebt verloren";
            document.querySelector('#rollButton').disabled = true; // Disable the button
        }
        //change the sum to the targetNumber
        sum = targetNumber;
        // Generate a new target number for the next round
        targetNumber = generateRandomTarget();
    }
}

// Initialize lives display
updateLivesDisplay();

document.querySelector('#rollButton').addEventListener('click', rollDice);