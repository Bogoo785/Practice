function tap(){
     window.location.href="https://google.com"
}

const targettime =new Date("2026-10-05T13:30").getTime()



function updatetime(){
    const now =new Date().getTime()
    const distance=targettime - now
    if (distance<0){
        document.getElementById('tail').innerHTML="出發"
        return;
    }
    const days=Math.floor(distance/(1000*60*60*24))
    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    const mins=Math.floor((distance%(1000*60*60))/(1000*60))
    const secs=Math.floor((distance%(1000*60))/(1000))
    document.getElementById('tail').innerHTML=`剩餘${days}天${hours}小時${mins}分${secs}秒`
        
    }

setInterval(updatetime,1000)
updatetime()
