let computerChoice = function () {
    const options = ['Rock', 'Paper', 'Scissors']

    //select a random index from the options string above
    const randomIndex = Math.floor(Math.random() * options.length)

    //use the the random index to select an element(rock or paper or scissors)
    const randomChoice = options[randomIndex]

    return randomChoice;
}

let userInput = function () {
    let input = prompt('Rock, Paper or Scissors: ')

    alert(`You chose ${input}`)

    return input
}

