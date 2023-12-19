let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}