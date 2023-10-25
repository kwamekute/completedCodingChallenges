let roundScore = 0
let grandscore = 0


let computerChoice = function () {
    const options = ['rock', 'paper', 'scissors']

    //select a random index from the options string above
    const randomIndex = Math.floor(Math.random() * options.length)

    //use the the random index to select an element(rock or paper or scissors)
    const randomChoice = options[randomIndex]

    return randomChoice;
}

let userChoice = function () {
    return prompt("Enter your choice: ")
}

const play = function () {
    let userSelection = userChoice()

    let computerSelection = computerChoice()

    if (userSelection === computerSelection) {
        alert(`It's a tie you chose ${userSelection} computer chose ${computerSelection} `)
        return roundScore += 1
    }
    else if (userSelection === "rock" && computerSelection === "paper") {
        return alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `)
    }
    else if (userSelection === "paper" && computerSelection === "scissors") {
        return alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `)
    }
    else if (userSelection === "scissors" && computerSelection === "rock") {
        return alert(`You lose. You chose ${userSelection} computer chose ${computerSelection} `)
    }

}

play()

console.log(roundScore)

play()
console.log(roundScore)

play()
console.log(roundScore)