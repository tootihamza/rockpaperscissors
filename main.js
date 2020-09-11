const playerScoreBoard = document.getElementById("playerScore");
const pcScoreBoard = document.getElementById("pcScore");
const gameButton = document.getElementById("buttonsContainer");
const everyTimeScore = document.getElementById("everyTimeScore")
const selection = ["paper", "rock", "scissors"];
let playerSelection;
let playerScore = 0;
let pcScore = 0;
//let gameRound = 5;
//let round = 0;

playerScoreBoard.textContent = "YOU : " + playerScore;
pcScoreBoard.textContent = "PC : " + pcScore;

function borderRemover() {
    for (let i = 0; i < selection.length; i++) {
        let c = gameButton.children;
        c[i].style.border = "0";
    }
}



gameButton.addEventListener("click", function(evt) {
    if(playerScore === 10 || pcScore === 10) {
        everyTimeScore.textContent = "PLEASE REFRESH THE NAVIGATEUR FOR A NEW GAME";
    }
    else {
        if(evt.target.getAttribute("id") === "paperButton") {
            let computerSelection = selection[Math.floor(Math.random() * Math.floor(3))];
            if(computerSelection === selection[0]) {
                everyTimeScore.textContent = "Computer Chose Paper and so did you ! DRAW !"
                borderRemover();
                evt.target.style.border = "2px solid red";
            }
            else if(computerSelection === selection[1]) {
                everyTimeScore.textContent = "Computer chose ROCK, you WIN !"
                playerScore++;
                playerScoreBoard.textContent = "YOU : " + playerScore;
                borderRemover();
                evt.target.style.border = "2px solid red";
            }
            else{
                everyTimeScore.textContent = "Computer chose Scissors, you LOSE !"
                pcScore++;
                pcScoreBoard.textContent = "PC : " + pcScore;

                borderRemover();
                evt.target.style.border = "2px solid red";
            }
        }
        else if(evt.target.getAttribute("id") === "rockButton") {
            let computerSelection = selection[Math.floor(Math.random() * Math.floor(3))];
            if(computerSelection === selection[0]) {
                everyTimeScore.textContent = "Computer Chose Paper ! YOU LOSE !"
                pcScore++;
                pcScoreBoard.textContent = "PC : " + pcScore;
                borderRemover();

                evt.target.style.border = "2px solid red";
            }
            else if(computerSelection === selection[1]) {
                everyTimeScore.textContent = "Computer chose ROCK, DRAW !"
                borderRemover();

                evt.target.style.border = "2px solid red";
            }
            else{
                everyTimeScore.textContent = "Computer chose Scissors, you WIN !"
                playerScore++;
                playerScoreBoard.textContent = "YOU : " + playerScore;
                borderRemover();

                evt.target.style.border = "2px solid red";
            }
        }
        else if(evt.target.getAttribute("id") === "scissorsButton") {
            let computerSelection = selection[Math.floor(Math.random() * Math.floor(3))];
            if(computerSelection === selection[0]) {
                everyTimeScore.textContent = "Computer Chose Paper ! YOU WIN !"
                playerScore++;
                playerScoreBoard.textContent = "YOU : " + playerScore;
                borderRemover();

                evt.target.style.border = "2px solid red";
            }
            else if(computerSelection === selection[1]) {
                everyTimeScore.textContent = "Computer chose ROCK, YOU LOSE !"
                pcScore++;
                pcScoreBoard.textContent = "PC : " + pcScore;
                borderRemover();

                evt.target.style.border = "2px solid red";
            }
            else{
                everyTimeScore.textContent = "Computer chose Scissors, DRAW !"
                borderRemover();
                evt.target.style.border = "2px solid red";
            }

        }
    }
})


