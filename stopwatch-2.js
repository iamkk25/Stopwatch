// This solution has no issues.

const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
// const progressBar = document.querySelector('progress');
let millisecondCount = 0, secondCount = 0, minuteCount = 0, ms = 100;
let interval,active = true;

function timerFunc() {
    active = false;
    interval = setInterval(function () {
        if (secondCount === 60) {
            secondCount = 0;
            minuteCount++;
        }
        minutes.textContent = minuteCount.toString().padStart(2, 0);

        if (millisecondCount >= 9) {
            millisecondCount = -1;
            secondCount++;
        }
        seconds.textContent = secondCount.toString().padStart(2, 0);
        // progressBar.value = secondCount;

        millisecondCount++;
        milliseconds.textContent = millisecondCount;
    }, ms);
}

function startTimer(e) {
    if(active === false){
        stop(e.target);
        return true;
    }

    timerFunc()

    this.textContent = 'Pause';
    this.className = 'pause';

}

function stop(item) {
    clearInterval(interval);
    active = true;
    item.textContent = 'Continue';
    item.className = 'continue';
}

function reset() {
    clearInterval(interval);
    millisecondCount = 0;
    secondCount = 0;
    minuteCount = 0;
    milliseconds.textContent = '0';
    seconds.textContent = '00';
    minutes.textContent = '00';
    // progressBar.value = 0;
    startBtn.textContent = 'Start';
    startBtn.className = 'start';
    active = true;
}



startBtn.addEventListener('click',startTimer);
resetBtn.addEventListener('click',reset);