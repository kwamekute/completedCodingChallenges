let playerScore = 0;
let compuScore = 0;



let computerChoice = function () {
    const options = ['rock', 'paper', 'scissors'];

    //select a random index from the options string above
    const randomIndex = Math.floor(Math.random() * options.length);

    //use the the random index to select an element(rock or paper or scissors)
    const randomChoice = options[randomIndex];

    return randomChoice;
}

let userChoice = function () {
    return prompt("Enter your choice: ");
}

const play = function () {
    let userSelection = userChoice();

    let computerSelection = computerChoice();

    if (userSelection === computerSelection) {
        alert(`It's a tie you chose ${userSelection} computer chose ${computerSelection} `);

        return playerScore += 1;
    }
    else if (userSelection === "rock" && computerSelection === "paper") {

        alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `);

        return compuScore += 1;

    }
    else if (userSelection === "paper" && computerSelection === "scissors") {

        alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `);

        return compuScore += 1;


    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `);

        return compuScore = + 1;
    }

}

play()

console.log(playerScore);
console.log(compuScore);

play()
console.log(playerScore);
console.log(compuScore);

play()
console.log(playerScore);
console.log(compuScore);

if (playerScore > compuScore) {

    alert("You won! Refresh page to play again");
}
else {

    alert("You lost! Refresh page to try again");
}