let second=0
let msecond=0

let dissecond=document.getElementById('s')
let dismsecond=document.getElementById('ms')
let start=document.getElementById('start')
let stop=document.getElementById('stop')
let reset=document.getElementById('reset')
let interval

start.onclick=()=>{
    interval=setInterval(timego,10)
}

stop.onclick=()=>{
clearInterval(interval)
}

reset.onclick=()=>{
clearInterval(interval)
msecond=0
second=0
dissecond.innerHTML=`0${second}`
dismsecond.innerHTML=`0${msecond}`
}

let timego=()=>{
    msecond++
    
    if(msecond<=9){
    dismsecond.innerHTML=`0${msecond}`
    }
    if(msecond>9){
        dismsecond.innerHTML=`${msecond}`
    }


    if(msecond>99){
        second++
        msecond=0
        if(second<=9){
        dissecond.innerHTML=`0${second}`
    }
    if(second>9){
        dissecond.innerHTML=`${second}`
    }}
}