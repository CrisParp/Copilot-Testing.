function randomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
}

document.querySelectorAll('.circle').forEach(circle => {
    const size = Math.random() * 100 + 50;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    const { x, y } = randomPosition();
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
});
