document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector("#startButton");
    const stopButton = document.querySelector("#stopButton");
    startButton.addEventListener("click", startBall);
    stopButton.addEventListener("click", stopBall);
});

let ball;

class Ball {
    constructor(x, y, dx, dy, radius, color, context, canvasWidth, canvasHeight) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.fill();
        this.context.closePath();
    }

    update() {
        if (this.x < this.radius || this.x > this.canvasWidth - this.radius) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius || this.y > this.canvasHeight - this.radius) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

let balls = [];             // 여러 개의 공을 담을 배열
let animationId = null;            // 애니메이션 루프 ID
let isRunning = false;      // 실행 상태 확인 (중복 실행 방지)
let numberOfBalls = 15;
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#33FFF0", "#FFD433"];

const startBall = () => {
    if (isRunning) return;
    const canvas = document.querySelector("#bouncingBall");
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    context.clearRect(0, 0, width, height);
    balls = [];
    isRunning = true;
    for (let i = 0; i < numberOfBalls; i++) {
        const radius = Math.random() * 15 + 10;
        const x = Math.random() * (width - 2 * radius) + radius;
        const y = Math.random() * (height - 2 * radius) + radius;
        let dx = (Math.random() * 4 + 1) * ((Math.random() >= 0.5) ? (1) : (-1));
        let dy = (Math.random() * 4 + 1) * ((Math.random() >= 0.5) ? (1) : (-1));
        const color = colors[Math.floor(Math.random() * colors.length)];
        balls.push(new Ball(x, y, dx, dy, radius, color, context, width, height));
    }
    const animate = () => {
        context.clearRect(0, 0, width, height);
        balls.forEach(ball => ball.update());
        animationId = requestAnimationFrame(animate);
    };
    animate();
};

const stopBall = () => {
    if (!isRunning) return;
    cancelAnimationFrame(animationId);
    animationId = null;
    isRunning = false;
};