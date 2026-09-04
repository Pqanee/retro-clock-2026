const toggle=document.getElementById("toggleBtn");

const clockDiv=document.getElementById("clock");
const dateDiv=document.getElementById("date");
const locationDiv=document.getElementById("location");

const stopwatch=document.getElementById("stopwatch");

toggle.onclick=()=>{

    if(stopwatch.style.display==="none"){

        clockDiv.style.display="none";
        dateDiv.style.display="none";
        locationDiv.style.display="none";

        stopwatch.style.display="block";

        toggle.innerText="🕒 Saate Dön";

    }else{

        clockDiv.style.display="block";
        dateDiv.style.display="block";
        locationDiv.style.display="block";

        stopwatch.style.display="none";

        toggle.innerText="⏱ Kronometre";

    }

};

let start=0;

let elapsed=0;

let timer=null;

function updateSW(){

    elapsed=Date.now()-start;

    let ms=Math.floor((elapsed%1000)/10);

    let sec=Math.floor(elapsed/1000)%60;

    let min=Math.floor(elapsed/60000)%60;

    let hour=Math.floor(elapsed/3600000);

    swTime.innerHTML=

        `${String(hour).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}.${String(ms).padStart(2,"0")}`;

}

startBtn.onclick=()=>{

    if(timer)return;

    start=Date.now()-elapsed;

    timer=setInterval(updateSW,10);

};

pauseBtn.onclick=()=>{

    clearInterval(timer);

    timer=null;

};

resetBtn.onclick=()=>{

    clearInterval(timer);

    timer=null;

    elapsed=0;

    swTime.innerHTML="00:00:00.00";

};