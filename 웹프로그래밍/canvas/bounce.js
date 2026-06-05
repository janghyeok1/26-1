let canvas;
let context;
let dx = 5;
let dy = 5;
let y = 100;
let x = 100;
let radius = 20;
let animationId = null;
window.addEventListener("load",()=> {
    canvas = document.querySelector('#bouncingBall');
    context = canvas.getContext('2d');
    document.querySelector("#stopBall").onclick = stopBall;
    play();
});
const play = () => {
    draw();
    update();
    animationId = requestAnimationFrame(play);
}
// x, y 위치에 원 그리기
const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

// x, y 값 변경하기
const update = () => {
    // 좌우 벽 충돌
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    // 위아래 벽 충돌
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

// 애니메이션 멈추기
const stopBall = () => {
    cancelAnimationFrame(animationId);
}