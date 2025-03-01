const bubbleContainer = document.getElementById('bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size between 20px and 80px
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random horizontal position
    bubble.style.left = `${Math.random() * window.innerWidth}px`;

    // Random animation duration between 5s and 15s
    const duration = Math.random() * 10 + 5;
    bubble.style.animationDuration = `${duration}s`;

    // Append the bubble to the container
    bubbleContainer.appendChild(bubble);

    // Remove the bubble after it finishes animating
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Create bubbles at regular intervals
setInterval(createBubble, 500);
