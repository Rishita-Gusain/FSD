
var stone= document.getElementById("stone")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")


var playerScore = document.getElementById("playerScore")
var computerScore = document.getElementById("computerScore")


var player = 0
var computer = 0
var ingame = 0
var playerchoice
var computerChoice


function randomChoice() {
    var randomChoice = Math.floor(Math.random() * 3) + 1 
    computerChoice = randomChoice 
}


function pickOption(choice) {
    if (playerchoice == undefined) {
        playerchoice = choice
        
        if (choice == 1) {
            stone.classList = "player"
        } else if (choice == 2) {
            paper.classList = "player"
        } else {
            scissors.classList = "player"
        }
        
        if (computerChoice == undefined) {

            randomChoice()
            while (computerChoice == playerchoice) {
                randomChoice()
            }
            
            if (computerChoice == 1) {
                stone.classList = "computer"
            } else if (computerChoice == 2) {
                paper.classList = "computer"
            } else {
                scissors.classList = "computer"
            }
        }
        
        getWin(playerchoice, computerChoice) 
    } else {
        alert("Game Over") 
    }
    ingame = 0
}

function getWin(playerc, computerc) {
    
    if (ingame == 1) {
        
        if (playerc== 1 && computerc == 2) {
            computer ++
        } else if (playerc == 1 && computerc == 3) {
            player ++
        } else if (playerc == 2 && computerc == 1) {
            player ++
        } else if (player_ == 2 && computerc == 3) {
            computer ++
        } else if (playerc == 3 && computerc == 1) {
            computer ++
        } else if (playerc== 3 && computerc == 2) {
            player ++
        }
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}



function newGame() {
    
    if (ingame == 0) {
        ingame = 1
        choice = undefined
        computerChoice = undefined
        
        stone.classList = ""
        paper.classList = ""
        scissors.classList = ""
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}