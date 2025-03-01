const bubbleContainer = document.getElementById('bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random size and position
    const size = Math.random() * 80 + 20; // Bubble size between 20px and 100px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    
    // Random animation duration
    const duration = Math.random() * 5 + 5; // Duration between 5s and 10s
    bubble.style.animationDuration = `${duration}s`;
    
    bubbleContainer.appendChild(bubble);
    
    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Create bubbles at intervals
setInterval(createBubble, 500);
