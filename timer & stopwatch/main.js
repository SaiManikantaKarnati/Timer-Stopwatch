// JavaScript Code

// Timer
let timerInterval;
let timerRunning = false;
let timerTime = 0;

function startTimer() {
  if (!timerRunning) {
    const hours = parseInt(document.getElementById("hoursInput").value);
    const minutes = parseInt(document.getElementById("minutesInput").value);
    const seconds = parseInt(document.getElementById("secondsInput").value);
    
    timerTime = hours * 3600 + minutes * 60 + seconds;
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}


function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerTime = 0;
  updateTimerDisplay();
  timerRunning = false;
}

function updateTimer() {
  if (timerTime > 0) {
    timerTime--;
    updateTimerDisplay();
  } else {
    clearInterval(timerInterval);
    timerRunning = false;
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(timerTime / 3600);
  const minutes = Math.floor((timerTime % 3600) / 60);
  const seconds = timerTime % 60;

  document.getElementById("timerDisplay").textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}


// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;
let lapCounter = 1;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    stopwatchRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  updateStopwatchDisplay();
  stopwatchRunning = false;
  clearLapList();
  lapCounter = 1;
}

function lapStopwatch() {
    const lapItem = document.createElement("li");
    lapItem.className = "lapItem";
    lapItem.textContent = `Lap ${lapCounter}: ${document.getElementById("stopwatchDisplay").textContent}`;
    document.getElementById("lapList").appendChild(lapItem);
    lapCounter++; // Increment lap counter
  }

function updateStopwatch() {
  stopwatchTime++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const minutes = Math.floor((stopwatchTime / 100) / 60);
  const seconds = Math.floor((stopwatchTime / 100) % 60);
  const milliseconds = stopwatchTime % 100;

  document.getElementById("stopwatchDisplay").textContent = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds, 2)}`;
}

function padZero(value, length = 2) {
  return String(value).padStart(length, "0");
}

function clearLapList() {
  const lapList = document.getElementById("lapList");
  while (lapList.firstChild) {
    lapList.removeChild(lapList.firstChild);
  }
}

// Event Listeners
document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("pauseTimer").addEventListener("click", pauseTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);

document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("pauseStopwatch").addEventListener("click", pauseStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);
document.getElementById("lapStopwatch").addEventListener("click", lapStopwatch);
