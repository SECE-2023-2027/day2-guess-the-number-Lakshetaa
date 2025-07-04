const againButton= document.querySelector(".again");
const numb= document.querySelector(".number");
const gues=document.querySelector(".guess");
const checkBtn=document.querySelector(".check");
const message=document.querySelector(".message");
const score=document.querySelector("#currentScore");
const highscore=document.querySelector("#highScore");

let random=Math.trunc(Math.random()*20)+1;
let scores=20;
console.log(random);

const checkFunc = ()=>{
    const guess = Number(gues.value);
    console.log(guess);

    if(!guess){
        message.textContent = "User has not entered anything";
    }else if(guess===random){
        highscore.textContent = scores;
        document.querySelector("body").style.backgroundColor = "green";
        numb.textContent = random;
    }else if(guess<random){
        scores-=1;
        score.textContent = scores;
        message.textContent = "Number is too low";
    }else if(guess>random){
        scores-=1;
        score.textContent = scores;
        message.textContent = "Number is too high";
    }
    if(scores === 0){
        setTimeout(() => {
            message.textContent = "You lost the game";
            document.querySelector("body").style.backgroundColor = "red";
            numb.textContent = random;
            gues.remove();
            setTimeout(() => {
                checkBtn.remove();
                const container = document.querySelector(".left");
                container.appendChild(gues);
                container.appendChild(checkBtn);
                againFunc();
            }, 3000);
        }, 0);
    }
};

checkBtn.addEventListener("click", checkFunc);

const againFunc = ()=>{
    document.querySelector("body").style.backgroundColor = "black";
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    numb.textContent = "?";
    gues.value = "";
    scores = 20;
    score.textContent = scores;
    message.textContent = "Start guessing...";
}

againButton.addEventListener("click", againFunc);
