let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorePara = document.querySelector("#user-score");
let compscorePara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const option = ["rock","paper","scissor"];
const randIdx = Math.floor(Math.random()*3);
return option[randIdx];

   // console.log("comp choice = ",)
}
const drawgame = ()=>{
    msg.innerText="Match was draw plz Play Again";
    msg.style.backgroundColor="#081b31";
}
const showWin=(userWin,userChoice,compChoice)=>{
    if(userWin){
  userScore++;
  userscorePara.innerText=userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }
    else{
      compScore++;
      compscorePara.innerText=compScore;
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = (userChoice) =>{

const compChoice = gencompChoice();

if(userChoice===compChoice){
    //Game was draw
    drawgame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
userWin = compChoice === "paper"?true:false;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="rock"?true:false;
    }
    else{
       userWin = compChoice==="rock"?true:false;
    }
    showWin(userWin,userChoice,compChoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        
    });
});


