let computerChoice = function () {
    const options = ['Rock', 'Paper', 'Scissors']

    //select a random index from the options string above
    const randomIndex = Math.floor(Math.random() * options.length)

    //use the the random index to select an element(rock or paper or scissors)
    const randomChoice = options[randomIndex]

    return randomChoice;
}

const userSelection = prompt("Rock, Paper or Scissors?: ")
console.log(userSelection)

const computerSelection = computerChoice();
console.log(computerSelection)

const play = function (userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        alert(`It's a tie you chose ${userSelection} computer chose ${computerSelection}`)
    }
}
console.log(play(userSelection, computerSelection))
