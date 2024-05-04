let intervalId;
let startTime;
let elapsedTime = 0;

function formatTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);

    // Pad the time values with leading zeros
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliseconds = milliseconds.toString().padStart(2, '0');

    return `${minutes}:${seconds}:${milliseconds}`;
}

// Function to start the timer
function startTimer() {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTimer, 10);
}

// Function to update the timer
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}

document.getElementById('start').addEventListener('click', startTimer);

// Function to stop the timer
function stopTimer() {
    clearInterval(intervalId);
}

document.getElementById('stop').addEventListener('click', stopTimer);


// Function to reset the timer
function resetTimer() {
    clearInterval(intervalId);
    elapsedTime = 0;
    document.getElementById('timer').textContent = formatTime(elapsedTime);

    // Clear the lapTimes array
    lapTimes = [];

    // Clear the displayed lap times
    document.getElementById('laps').innerHTML = '';
}
document.getElementById('reset').addEventListener('click', resetTimer);

// Function to record lap times
let lapTimes = [];
function lapTime() {
    lapTimes.push(elapsedTime);

    let lapTimeElement = document.createElement('li');
    lapTimeElement.textContent = formatTime(elapsedTime);

    document.getElementById('laps').appendChild(lapTimeElement);
}

document.getElementById('lap').addEventListener('click', lapTime);

// Function to clear lap times
function clearLapTimes() {
    lapTimes = [];
    document.getElementById('laps').innerHTML = '';
}

document.getElementById('clear-laps').addEventListener('click', clearLapTimes);
