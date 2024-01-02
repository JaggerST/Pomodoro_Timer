let startingMinutes = 25; 
let time = startingMinutes * 60; 
let stop = false;
let start = true;  //display start

let stopBtn = document.querySelector('#btn4');
let shortBtn = document.querySelector('#btn2');
let longBtn = document.querySelector('#btn3');
let pomBtn = document.querySelector('#btn1');

const countdownEl = document.querySelector('#countdown');  

let refreshIntervalId;

function updateCountdown() {
    const minutes = Math.floor(time/60); 
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`; 
    time--; 

    if (time < 0) { //stop setInterval when time = 0 to avoid negative time
        clearInterval(refreshIntervalId);
    }
}

stopBtn.addEventListener('click', () => {
    if (start == true) {
        start = false; 
        refreshIntervalId = setInterval(updateCountdown, 1000);
        stopBtn.innerHTML = 'STOP';
        stop = false;
        return;
    }
    stop = !stop; 
    if (stop == false) {
        refreshIntervalId = setInterval(updateCountdown, 1000);
        stopBtn.innerHTML = 'STOP';
    } else {
        clearInterval(refreshIntervalId);
        stopBtn.innerHTML = 'CONTINUE';
    }
});

shortBtn.addEventListener('click', () => {
    startingMinutes = 5;
    time = startingMinutes * 60; 
    updateCountdown();
    stop = true;
    clearInterval(refreshIntervalId);
    stopBtn.innerHTML = 'START';
});

pomBtn.addEventListener('click', () => {
    startingMinutes = 25;
    time = startingMinutes * 60; 
    updateCountdown();
    stop = true;
    clearInterval(refreshIntervalId);
    stopBtn.innerHTML = 'START';
});

longBtn.addEventListener('click', () => {
    startingMinutes = 30;
    time = startingMinutes * 60; 
    updateCountdown();
    stop = true;
    clearInterval(refreshIntervalId);
    stopBtn.innerHTML = 'START';
});

