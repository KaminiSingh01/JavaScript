// ROCK - PAPER - SCISSOR

const choices = ["rock", "paper", "scissor"];
const playergame=document.getElementById("playergame");
const computergame=document.getElementById("computergame");
const resultdisplay=document.getElementById("resultdisplay");
const playerscore= document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
let playerScore=0;
let computerScore=0;


function playgame(playerchoice){
    
    const computerchoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerchoice===computerchoice){
        result = "IT'S A TIE";
    }

    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    console.log(result);
    playergame.textContent= `PLAYER : ${playerchoice}`;
    computergame.textContent= `COMPUTER : ${computerchoice}`;
    resultdisplay.textContent= result;

    resultdisplay.classList.remove("greentext","redtext");

    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            playerScore++;
            playerscore.textContent=playerScore;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            computerScore++;
            computerscore.textContent=computerScore;
            break;
    }
    

    
}