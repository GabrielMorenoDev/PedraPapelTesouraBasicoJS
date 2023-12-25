


const escolhas = ["pedra", "papel", "tesoura"]
const escolhaPlayerDisplay = document.getElementById("div-player-choice")
const escolhaComputerDisplay = document.getElementById("div-computer-choice")
const resultDisplay = document.getElementById("div-result")
const playerScoreDisplay = document.getElementById("div-player-score")
const computerScoreDisplay = document.getElementById("div-computer-score")


let playerScore = 0
let computerScore = 0

function jogar(playerChoice){
    

    const computerChoice = escolhas[Math.floor(Math.random() * 3)]
    let result = ""


    if(playerChoice === computerChoice){
        result = "EMPATOU!"
    }else{
        switch(playerChoice){
            case "pedra":
                result = (computerChoice === "tesoura") ? "VENCEU" : "PERDEU"
                break
            case "papel":
                result = (computerChoice === "pedra") ? "VENCEU" : "PERDEU"
                break
            case "tesoura":
                result = (computerChoice === "papel") ? "VENCEU" : "PERDEU"
                break
        }
    }

    escolhaPlayerDisplay.textContent =  `JOGADOR: ${playerChoice}`
    escolhaComputerDisplay.textContent = `COMPUTADOR: ${computerChoice}`
    resultDisplay.classList.remove("greenText", "redText")
    if(result === "VENCEU"){
        playerScore++
        resultDisplay.textContent = result
        playerScoreDisplay.textContent = `Pontuação do jogador: ${playerScore}`
        resultDisplay.classList.add("greenText")
    }else if (result === "PERDEU"){
        resultDisplay.textContent = result
        computerScore++
        computerScoreDisplay.textContent = `Pontuação do computador: ${computerScore}`
        resultDisplay.classList.add("redText")
    }else{
        resultDisplay.textContent = result
    }
    
    
    
}



