let canvas;
let context;
let velocityInput;
let angleInput;
let score;
let fireBtn;
const GRAVITY = 0.5;
const state = {
    ballX: 10,
    ballY: 250,
    ballVx: 0,
    ballVy: 0,
    ballRadius: 10,
    score: 0,
    animationId: null,
    isFlying: false
};
const lawnImg = new Image();
lawnImg.src = "lawn.png";
const netImg = new Image();
netImg.src = "net.png";
window.addEventListener('load', () => {
    canvas = document.querySelector("#canvas");
    context = canvas.getContext('2d');
    velocityInput = document.querySelector('#velocity');
    angleInput = document.querySelector("#angle");
    score = document.querySelector("#score");
    fireBtn = document.querySelector("#fireBtn");
    fireBtn.addEventListener("click", start);
    draw();
});

const drawBackground = () => {
    context.drawImage(lawnImg, 0, 270, 500, 30);
    context.drawImage(netImg, 450, 60, 30, 150);
};

const drawBall = () => {
    context.beginPath();
    context.arc(state.ballX, state.ballY, state.ballRadius, 0, 2.0 * Math.PI);
    context.fillStyle = "#fa5252";
    context.fill();
    context.closePath();
};

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBall();
};
const start = () => {
    init(); // 위치 초기화
    state.isFlying = true;

    const velocity = Number(velocityInput.value);
    const angle = Number(angleInput.value);

    // 각도를 라디안으로 변환
    const angleR = angle * (Math.PI / 180);

    // X, Y 축 초기 속도 계산
    state.ballVx = velocity * Math.cos(angleR);
    state.ballVy = -velocity * Math.sin(angleR);

    update(); // 애니메이션 루프 시작
};

// 게임 초기화
const init = () => {
    state.ballX = 10;
    state.ballY = 250;
    state.isFlying = false;

    // 이전 애니메이션이 돌고 있다면 정지
    if (state.animationId) {
        cancelAnimationFrame(state.animationId);
    }
    draw();
};
const update = () => {
    if (!state.isFlying) return;

    // 중력 적용 및 위치 이동
    state.ballVy += GRAVITY;
    state.ballX += state.ballVx;
    state.ballY += state.ballVy;

    // 타겟(과녁) 충돌 판정
    const isHit = (state.ballX >= 450) && (state.ballX <= 480) &&
        (state.ballY >= 60) && (state.ballY <= 210);

    if (isHit) {
        state.score++;
        score.innerHTML = `점수 = ${state.score}`;
        state.isFlying = false;
        draw();
        return;
    }

    // 화면 밖(아래쪽 또는 오른쪽)으로 벗어났을 때
    if (state.ballY >= canvas.height || state.ballX >= canvas.width) {
        state.isFlying = false;
        return;
    }

    draw();
    // 재귀적으로 다음 프레임 호출 (setInterval 대체)
    state.animationId = requestAnimationFrame(update);
};