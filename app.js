let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset-btn");
const userName= prompt("Enter Your Name:-");
const uname = document.querySelector("#uname");

uname.innerText = userName;

let drawGame = () =>{
    msg.innerText = "Game Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
    console.log("Game Draw!");
}

const showWinner = (userWin,userChoice,compChoice) => {
    // userWin === true ? (msg.innerText="You Win", msg.style.backgroundColor = "green") : msg.innerText="Comp Win";
    //ternary operator is not used for multiple lines of code.
    //It is possible but it is not a good programming practice.
    //Just write like this(statement1,statement2).

    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`Comp Win. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`User Choice = ${userChoice}`);
    //generate comp choice
    let compChoice = genCompChoice(userChoice);
    console.log(`Comp choice = ${compChoice}`);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "rock" ? true : false;
        } else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }   
        showWinner(userWin,userChoice,compChoice);
    }

}

const genCompChoice = (userChoice) => {
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log(`choice was clicked ${userChoice}`);
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click",() => {
    userScore = 0;
    userScorePara.innerText = userScore;
    compScore = 0;
    compScorePara.innerText = compScore;
})