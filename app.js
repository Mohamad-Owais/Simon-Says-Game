let gameSeq=[];
let userseq=[];
let btns=["red","yellow","green","blue"]

let started=false;
let level=0;

let h3= document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
    btn.classList.remove("gameflash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250)
}

function levelUp() {
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameflash(randombtn);    
}

function checkAns(idx){
    if(userseq[idx]===gameSeq[idx]){
        if(userseq.length===gameSeq.length){
        setTimeout(levelUp,1000)
        }
    }else{
        h3.innerHTML=`<b>Game Over!</b> <u> Your Score Was ${level} </u> <br> Press Any key To Restart`;
        document.querySelector("body").style.backgroundColor="red";
        resetGame();
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);
    console.log(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let all_btns=document.querySelectorAll(".btn");
    for (btn of all_btns){
        btn.addEventListener("click",btnPress);
    }

function resetGame() {
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
    let body=document.querySelector("body");
    document.querySelector(".btn-container").style.filter="blur(2px)";
    h3.style.color="white"
    document.querySelector("h1").style.color="white"
    
    body.addEventListener("keypress",()=>{

        document.querySelector("body").style.backgroundColor="black";
        document.querySelector(".btn-container").style.filter="none";
        h3.style.color="white"
        document.querySelector("h1").style.color="white"
    })
}