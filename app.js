let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
let result_p=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r','s','p'];
    const randomNumber=Math.floor(Math.random()*3)
    return choices[randomNumber]
}
console.log(getComputerChoice());

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    // if(letter==="s")
    return "Scissor"
}

function win(userChoice,computerChoice){
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML=userScore;
    computerscore_span.innerHTML=computerScore
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .You win!`
}

function lose(computerChoice,userChoice){
    computerScore++;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    computerscore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .Computer win!`
}

function draw(computerChoice,userChoice){
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equales to ${convertToWord(computerChoice)}${smallCompWord} .It's draw!`
}

function game(userChoice){
    let computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case"rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice,computerChoice);
            break;
    }
}



function main(){
    rock_div.addEventListener('click',function(){
        game("r");
       
    paper_div.addEventListener("click",function(){
        game("p");
       
    scissor_div.addEventListener("click",function(){
        game("s")
        
    });
    });
    });
    
}

main()