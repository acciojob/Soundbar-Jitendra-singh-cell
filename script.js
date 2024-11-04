//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentSound = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Stop the current sound if it's playing
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0; // Reset to start
        }

        // Create a new audio object for the clicked button
        currentSound = new Audio(button.dataset.sound);
        currentSound.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0; // Reset to start
        currentSound = null;
    }
});
