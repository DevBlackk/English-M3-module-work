// Declare the stopwatch variables
var hours = 0;
var minutes = 0;
var seconds = 0;

// Variable to control the state of the stopwatch
var state = "inactive";

// Function to update the stopwatch
function updateStopwatch() {
    // Increment the seconds value
    seconds++;

    // If the seconds reach 60, increment the minutes
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    // If the minutes reach 60, increment the hours
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    // Update the stopwatch value in the DOM
    document.getElementById("stopwatch").textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to start the stopwatch
function startStopwatch() {
    // Reset the stopwatch
    hours = 0;
    minutes = 0;
    seconds = 0;

    // Set the state of the stopwatch to "active"
    state = "active";

    // Start updating the stopwatch
    setInterval(updateStopwatch, 1000);
}

// Event for starting the stopwatch
document.getElementById("startButton").addEventListener("click", startStopwatch);

// Event for pausing the stopwatch
document.getElementById("pauseButton").addEventListener("click", pauseStopwatch);
