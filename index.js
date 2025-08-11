let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let hours = 0;
let minutes = 0;
let timer;
let running = false;

function watchupdate() {
    const Secondsvalue = seconds < 10 ? "0" + seconds : seconds;
    const Minutesvalue = minutes < 10 ? "0" + minutes : minutes;
    const Hoursvalue = hours < 10 ? "0" + hours : hours;
    display.textContent = `${Hoursvalue}:${Minutesvalue}:${Secondsvalue}`; // Corrected: Used 'display' instead of 'watch'.
}

function startTimer() {
    if (!running) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            watchupdate();
        }, 1000);
        running = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    watchupdate();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 83) { //start ke liye s = 83
        start.click()
    }
    if (event.keyCode == 84) { //start ke liye s = 83
        stop.click()
    }
    if (event.keyCode == 82) { //start ke liye s = 83
        reset.click()
    }



})
