var min = 0;
var sec = 0;
var msec = 0;
var minfinal = document.getElementById("min");
var secfinal = document.getElementById("sec");
var msecfinal = document.getElementById("msec");

var interval;

function timer(){
    msec++
    msecfinal.innerHTML = msec
    if (msec >= 100){
        sec++
        secfinal.innerHTML = sec
        msec = 0;}
        else if (sec >= 60){
min++
minfinal.innerHTML = min
sec = 0
        }
    

}

 function start(){
    interval = setInterval(timer,10);
}



function stop(){
clearInterval(interval)

}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minfinal.innerHTML = min;
    secfinal.innerHTML = sec;
    msecfinal.innerHTML = msec;
    stop();
}

function disable(){
    var disabled=document.getElementById("start").disabled = true;
    
}

function visible(){
    var disabled=document.getElementById("start").disabled =false;
    
}