const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

class Star {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.radius;
            this.x = Math.random() * canvas.width;
        }
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        let radius = Math.random() * 2;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speed = Math.random() * 1 + 0.5;
        stars.push(new Star(x, y, radius, speed));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
