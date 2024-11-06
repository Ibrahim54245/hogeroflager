let targetNumber = generateRandomTarget();
let lives = 3;

function generateRandomTarget() {
    return Math.floor(Math.random() * 11) + 2; // Random number between 2 and 12
}

function updateLifesDisplay() {
    const livesContainer = document.querySelector('#lives');
    livesContainer.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < lives; i++) {
        livesContainer.innerHTML += '<span class="heart">❤️</span>'; // Add heart icons
    }
}

function rollDice() {
    if (lives > 0) {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const sum = dice1 + dice2;

        document.querySelector('#dice1').textContent = dice1;
        document.querySelector('#dice2').textContent = dice2;
        document.querySelector('#result').textContent = `Result: ${sum}`;
        document.querySelector('#target').textContent = `Target: ${targetNumber}`;

        const guess = document.querySelector('#guess').value;
        const message = document.querySelector('#message');

        if ((sum > targetNumber && guess === 'higher') || (sum < targetNumber && guess === 'lower')) {
            message.textContent = "Je hebt het goed geraden!";
        } else {
            lives--;
            updateLifesDisplay(); // Update lives display
            message.textContent = "Helaas, je hebt het fout geraden!";
        }

        // Check if lives are exhausted
        if (lives === 0) {
            message.textContent = "Helaas, je hebt verloren";
            document.querySelector('#rollButton').disabled = true; // Disable the button
        }

        // Generate a new target number for the next round
        targetNumber = generateRandomTarget();
    }
}

// Initial lives display
updateLifesDisplay();

document.querySelector('#rollButton').addEventListener('click', rollDice);