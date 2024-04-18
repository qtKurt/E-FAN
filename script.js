document.addEventListener('DOMContentLoaded', function() {
    const fanOff = document.getElementById("off");
    const speedOne = document.getElementById("one");
    const speedTwo = document.getElementById("two");
    const speedThree = document.getElementById("three");
    const speedControl = document.getElementById("fan-mid");

    speedOne.addEventListener('click', function(){
        speedControl.style.animationDuration = "0.5s";
        speedControl.style.animationIterationCount = "infinite";
    });

    speedTwo.addEventListener('click', function(){
        speedControl.style.animationDuration = "0.3s";
        speedControl.style.animationIterationCount = "infinite";
    });

    speedThree.addEventListener('click', function(){
        speedControl.style.animationDuration = "0.1s";
        speedControl.style.animationIterationCount = "infinite";
    });

    fanOff.addEventListener('click', function(){
        speedControl.style.animationIterationCount = "0";
    });
});

document.getElementById("one").addEventListener("click", function() {
    playSound("sound1");
});

document.getElementById("two").addEventListener("click", function() {
    playSound("sound1");
});

document.getElementById("three").addEventListener("click", function() {
    playSound("sound1");
});

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.currentTime = 0; // Rewind to the beginning in case it's already playing
    sound.play();
}

document.getElementById("off").addEventListener("click", function() {
    playSound("sound2");
});

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.currentTime = 0; // Rewind to the beginning in case it's already playing
    sound.play();
}

// Variable to track whether the sound should be played
var isSoundEnabled = true;

// Event listeners for buttons 1, 2, and 3
document.getElementById("one").addEventListener("click", function() {
    if (isSoundEnabled) {
        playSound("sound1");
    }
});

document.getElementById("two").addEventListener("click", function() {
    if (isSoundEnabled) {
        playSound("sound1");
    }
});

document.getElementById("three").addEventListener("click", function() {
    if (isSoundEnabled) {
        playSound("sound1");
    }
});

// Event listener for the "Off" button
document.getElementById("off").addEventListener("click", function() {
    stopSound("sound1");
    isSoundEnabled = false; // Disable sound
});

// Function to play the sound
function playSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.currentTime = 0; // Rewind to the beginning in case it's already playing
    sound.play();
}

// Function to stop the sound
function stopSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.pause();
    sound.currentTime = 0;
    isSoundEnabled = true; // Enable sound
}
