// Set the date we're counting down to
var countDownDate = new Date("june 14 , 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the time remaining
    var distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Function to add leading zero to single digit numbers
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
// /////////////////////////////////////////////////////////
