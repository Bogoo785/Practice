function getaichoose(){
let choose=['paper','scissor','stone']
let aichoose=choose[Math.floor(Math.random()*3)]
return aichoose;}

function getresult(playerchoose,aichoose){
    if(playerchoose===aichoose){
        score=0
    }else if(playerchoose==='paper'&& aichoose==='scissor'){
        score=1
    }else if (playerchoose==='scissor' && aichoose==='paper'){
        score=1
    }else if (playerchoose==='stone' && aichoose==='scissor'){
        score=1
    }else{
        score=-1
    }return score
}

function showresult(score,playerchoose,aichoose){
    let Result=document.getElementById('result')
    switch(score){
        case 1:
            Result.innerText=`你出${playerchoose}\n電腦出${aichoose}\n你贏了!`
            break;
        case -1:
            Result.innerText=`你出${playerchoose}\n電腦出${aichoose}\n你輸了!`
            break;
        case 0:
            Result.innerText=`你出${playerchoose}\n電腦出${aichoose}\n平手!`
            break;
    
}}
function onclick(playerchoose){
    const aichoose=getaichoose()
    const score=getresult(playerchoose,aichoose)
    showresult(score,playerchoose,aichoose)
}
function playgame(){
let buttons=document.querySelectorAll('.box')
    buttons.forEach(button=>{
       let  _value=button.value
        button.onclick=()=>{onclick(_value)
    }}) 
    let endd=document.getElementById('end')
    endd.onclick=endgame

    
}
function endgame(){
   
    let end=document.getElementById('result')
    end.innerText=""
}
playgame()
