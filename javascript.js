let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let x=Math.random();
    if(x<=(1/3)) return "rock";
    else if(x<=2/3) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice=prompt("Enter rock, paper or scissor: ");
    choice=choice.toLowerCase();

    while(choice!=='rock' && choice!=='paper' && choice!=='scissor'){
        choice=prompt("Enter a valid choice: ");
        choice=choice.toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(computerChoice==="scissor"){
        if(humanChoice==="rock") humanScore++;
        else if(humanChoice==="paper") computerScore++;
    }
    else if(computerChoice==="rock"){
        if(humanChoice==="paper") humanScore++;
        else if(humanChoice==="scissor") computerScore++;
    }
    else{
        if(humanChoice==="scissor") humanScore++;
        else if(humanChoice==="rock") computerScore++;
    }
}


function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();

        playRound(humanSelection,computerSelection);
        console.log("your choice: "+humanSelection+" || computer choice: "+computerSelection);
        console.log("your score: ",humanScore);
        console.log("computer score: ",computerScore);
    }
    if(humanScore>computerScore) console.log("YOU WIN! ("+humanScore+"-"+computerScore+")");
    else if(humanScore<computerScore) console.log("YOU LOSE! ("+humanScore+"-"+computerScore+")");
    else console.log("TIE! ("+humanScore+"-"+computerScore+")");
}

playGame();