console.log("Rock Paper Scissor game")

function getComputerChoice() {
    let a = Math.random()
    if (a <= 0.3) {
        return "ROCK"
    }
    else if (a >0.3 && a <= 0.6) {
        return "PAPER"
    }
    else return 'SCISSORS'
}

function getHumanChoice() {
    let userInput = prompt("What would you like to choose? Rock/Paper/Scissors")
    return userInput.toUpperCase()
}

let humanScore = 0, computerScore= 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You both chose ${ humanChoice }, it's a tie`);
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK" 
        || humanChoice == "ROCK" && computerChoice == "SCISSORS" 
        || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log(`You win! ${ humanChoice } beats ${ computerChoice }`), humanScore++;
    } else 
        console.log(`You lose! ${ computerChoice } beats ${ humanChoice }`), computerScore++;
}


function playGame(game, numOfRounds) {
    while (numOfRounds > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        game(humanSelection,computerSelection), numOfRounds--;
    }
}

playGame(playRound,5)