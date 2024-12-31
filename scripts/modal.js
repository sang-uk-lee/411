// DOM Elements
const modal = document.getElementById('modal');
const answerMeBtn = document.querySelector('.answer-button-wrapper');
const closeBtn = document.querySelector('.close');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const journeySection = document.getElementById('journeySection');
const confettiCanvas = document.getElementById('confettiCanvas');
const ctx = confettiCanvas.getContext('2d');

let startTime;
let noClickCount = 0;

// Event Listeners
window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
});

answerMeBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount < 3) {
        modal.classList.add("shake-animation");

        setTimeout(() => {
            modal.classList.remove("shake-animation");
        }, 500);
    }
    if (noClickCount >= 3) {
        noBtn.textContent = 'Yes';
    }
    if (noClickCount === 4) {
        modal.style.display = 'none';
        startCelebration();
    }
});

yesBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    startCelebration();
});

// Confetti Animation
function createConfetti() {
    const colors = ['#13271d', '#3000ff', '#1e3d34', '#3f5db3', '#265f6c', '#4d6dbb'];
    const confetti = [];
    
    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * window.innerWidth,
            y: -10,
            size: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 1,
            angle: Math.random() * 6.28,
            spin: Math.random() * 0.2 - 0.1
        });
    }
    return confetti;
}

function drawConfetti(confetti) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    confetti.forEach(particle => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
        ctx.restore();
        
        particle.y += particle.speed;
        particle.angle += particle.spin;
        
        if (particle.y > window.innerHeight) {
            particle.y = -10;
            particle.x = Math.random() * window.innerWidth;
        }
    });
    
    requestAnimationFrame(() => drawConfetti(confetti));
}

// Timer Update
function updateTimer() {
    const now = new Date();
    const diff = now - startTime;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function startCelebration() {
    // 기존 startCelebration 코드를 수정
    startTime = new Date();
    document.getElementById('startTime').textContent = startTime.toLocaleString();
    journeySection.style.display = 'block';
    
    // 1. Answer Me 버튼 영역 숨기기
    document.querySelector('.answer-button-wrapper').style.display = 'none';
    
    // 2. 줄들을 숨기기 (opacity를 0으로 설정하여 영역은 유지)
    const lines = document.querySelectorAll('.lines .line');
    lines.forEach(line => {
        line.style.opacity = '0';
    });
    
    // 3. 캐릭터들을 가깝게 이동
    const leftPhoto = document.querySelector('.left-photo');
    const rightPhoto = document.querySelector('.right-photo');
    const heart = document.querySelector('.heart-icon');

    // 부드러운 애니메이션을 위한 transition 추가
    leftPhoto.style.transition = 'transform 1s ease-out';
    rightPhoto.style.transition = 'transform 1s ease-out';
    heart.style.transition = 'width 1s ease-out, height 1s ease-out';
    
    // 캐릭터 이동 및 하트 크기 조정
    leftPhoto.style.transform = 'scale(2,2)';
    rightPhoto.style.transform = 'scale(2,2)';
    
    // Confetti 시작
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const confetti = createConfetti();
    drawConfetti(confetti);
    
    // Timer 시작
    setInterval(updateTimer, 1000);
    
    // Journey section 애니메이션
    journeySection.style.opacity = 0;
    journeySection.style.transform = 'translateY(20px)';
    journeySection.style.transition = 'all 0.5s ease-out';
    
    setTimeout(() => {
        journeySection.style.opacity = 1;
        journeySection.style.transform = 'translateY(0)';
    }, 100);
}