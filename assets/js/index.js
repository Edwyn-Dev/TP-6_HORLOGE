// Selecting DOM elements for the analog clock hands and the digital clock
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.querySelector('.digital-clock');

// Main function to update the clock
function setDate() {
    // Get the current time
    const now = new Date();

    // Calculate seconds and transform to degrees for the second hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // +90 to offset initial rotation of the hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Calculate minutes and transform to degrees for the minute hand
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Calculate hours and transform to degrees for the hour hand
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Format hours, minutes, and seconds for the digital clock
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Update background based on the current time
    updateBackground(hours);
}

// Function to update the background according to the time of day
function updateBackground(hours) {
    const body = document.body;

    if (hours >= 6 && hours < 12) {
        // Morning
        body.style.backgroundImage = "url('https://zupimages.net/up/24/23/gk2o.png')";
    } else if (hours >= 12 && hours < 18) {
        // Afternoon
        body.style.backgroundImage = "url('https://zupimages.net/up/24/23/m2uy.png')";
    } else if (hours >= 18 && hours < 21) {
        // Evening
        body.style.backgroundImage = "url('https://zupimages.net/up/24/23/4bi8.png')";
    } else {
        // Night
        body.style.backgroundImage = "url('https://zupimages.net/up/24/23/tixe.png')";
        body.style.filter = 'invert()'
    }

    // Adjust background properties
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center center";
}

// Update the clock every second
setInterval(setDate, 1000);

// Initial call to update the clock immediately
setDate();
