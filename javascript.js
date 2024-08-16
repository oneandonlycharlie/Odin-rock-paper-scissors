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

const buttons = document.querySelector("body")
buttons.addEventListener("click", (e) => {
    let target = e.target;
    console.log(target)
    console.log(target.className)
    let computerSelection = getComputerChoice();
    let humanSelection = ""
    switch(target.className){
        case "Rock":
            humanSelection = getHumanChoice("Rock");
            break;
        case "Paper":
            humanSelection = getHumanChoice("Paper");
            break;
        case "Scissors":
            humanSelection = getHumanChoice("Scissors");
            break;
    }
    playRound(humanSelection,computerSelection);
})

function getHumanChoice(str) {
    return str.toUpperCase()
}

let humanScore = 0, computerScore= 0;

// create leaderboard //
const body = document.querySelector("body");
let leaderBoard = document.createElement("div");
leaderBoard.textContent = `humanscore: ${humanScore} computerscore ${computerScore}`;
body.appendChild(leaderBoard);

function playRound(humanChoice, computerChoice) {
    let text = ""
    if (humanChoice == computerChoice) {
        text = document.createTextNode(`You both chose ${ humanChoice }, it's a tie`);
    } else if (humanChoice == "PAPER" && computerChoice == "ROCK" 
        || humanChoice == "ROCK" && computerChoice == "SCISSORS" 
        || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        text = document.createTextNode(`You win! ${ humanChoice } beats ${ computerChoice }`), humanScore++;
    } else 
        text = document.createTextNode(`You lose! ${ computerChoice } beats ${ humanChoice }`), computerScore++;
    leaderBoard.textContent = `humanscore: ${humanScore} computerscore ${computerScore}   `;
    leaderBoard.appendChild(text);
}

