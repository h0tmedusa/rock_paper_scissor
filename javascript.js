let computerScore=0;
let humanScore=0;
let humanChoice='';
let computerChoice='';
let clicks=0;

function getHumanChoice(){
    const rock=document.querySelector('.b1');
    const paper=document.querySelector('.b2');
    const scissor=document.querySelector('.b3');
    
    rock.addEventListener('click', ()=> {
        humanChoice="rock";
        clicks++;
        getComputerChoice();
    });
    paper.addEventListener('click', ()=> {
        humanChoice="paper";
        clicks++;
        getComputerChoice();
    });
    scissor.addEventListener('click', ()=> {
        humanChoice="scissor";
        clicks++;
        getComputerChoice();
    });
    
}

function getComputerChoice(){
    if(Math.random()<=1/3) computerChoice="rock";
    else if(Math.random()<=2/3) computerChoice="paper";
    else computerChoice="scissor";

    playRound(humanChoice,computerChoice);
}

function playRound(humanChoice,computerChoice){
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
    result();
}

function result(){
    
   
    const results=document.querySelector('.results');

    const round=document.createElement('ul');
    round.innerText=`Your Pick: ${humanChoice} || Computer Pick: ${computerChoice}
                    Score: ${humanScore}-${computerScore}` ;
    results.appendChild(round);

    if(clicks===6)
    {
        if(humanScore>computerScore) {
            console.log("YOU WIN! ("+humanScore+"-"+computerScore+")");
            round.innerText=`YOU WIN! (${humanScore}-${computerScore})`;
            results.appendChild(round);
        }
        else if(humanScore<computerScore) {
            console.log("YOU LOSE! ("+humanScore+"-"+computerScore+")");
            round.innerText=`YOU LOSE  ! (${humanScore}-${computerScore})`;
            results.appendChild(round);
        }
        else {
            console.log("TIE! ("+humanScore+"-"+computerScore+")");
            round.innerText=`TIE! (${humanScore}-${computerScore})`;
            results.appendChild(round);
        }
    }
    console.log(humanScore);
    console.log(computerScore);
    console.log(humanChoice);
    console.log(computerChoice);
}

getHumanChoice();