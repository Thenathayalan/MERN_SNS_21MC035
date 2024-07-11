let seconds = 0;
let min = 0;
let hour = 0;
let interval;

function pause_time(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    pause_time();
    seconds = 0;
    min = 0;
    hour = 0;
    setTime(hour, min, seconds);
}

function timer(){
    seconds++;
    min += Math.floor(seconds/60);
    hour += Math.floor(min/60);
    seconds = Math.floor(seconds%60);
    min = Math.floor(min%60);
    setTime(hour, min, seconds);
}

function startTime(){
    interval = setInterval(timer, 1000);
}

function setTime(hor, min, sec){
    document.getElementById('Time').innerHTML = hor.toString().padStart(2,'0') + ":" + min.toString().padStart(2,'0') + ":" + sec.toString().padStart(2,'0');
}
