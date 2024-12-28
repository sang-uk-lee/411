const photos = document.getElementById('photos');
const photoWookie = document.getElementById('wookie');
const heart = document.getElementById('heart');
const photoHyuna = document.getElementById('hyuna');
const answerSection = document.getElementById('answer');
const answerMeButton = document.getElementById('answerButton');
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseButton = document.getElementById('modalCloseButton');
const modalText = document.getElementById('modalText');
const modalYesButton = document.getElementById('modalYesButton');
const modalNoButton = document.getElementById('modalNoButton');
const confettiCanvas = document.getElementById('confettiCanvas');
const timerCurrentTime = document.getElementById('timer_currentTime');
const timerYearsOld = document.getElementById('timer_yearsOld');
const timerMonthsOld = document.getElementById('timer_monthsOld');
const timerDaysOld = document.getElementById('timer_daysOld');
const ddaySection = document.getElementById('dDay');
const ddayStartedAt = document.getElementById('dday_startedAt');
const ddayDaysTogether = document.getElementById('dday_daysTogether');
const ddayHoursTogether = document.getElementById('dday_hoursTogether');
const ddayMinutesTogether = document.getElementById('dday_minutesTogether');
const ddaySecondsTogether = document.getElementById('dday_secondsTogether');

const myBirthday = new Date('1997-03-11');
const partnerBirthday = new Date('1997-04-11');
let modalNoClickCount = 0;
let startDate;

updateTimer(myBirthday, partnerBirthday)
setInterval(() => {
    updateTimer(myBirthday, partnerBirthday);
}, 1000);


answerMeButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalBackdrop.style.display = 'block';
});

modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
});

modalYesButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    answerSection.style.display = 'none';

    // Heart, Photo animations
    photoWookie.style.animation = 'magnet-right 3s forwards';
    photoHyuna.style.animation = 'magnet-left 3s forwards';
    photos.style.gap = '15px';
    heart.style.animation = 'heartbeat 0.5s infinite';

    // Confetti render
    confettiCanvas.classList.remove('hidden');
    startConfetti();

    // Dday section visible
    startDate = new Date();
    ddaySection.style.display = 'flex';
    ddaySection.classList.add('visible');
    ddayStartedAt.textContent = startDate.toLocaleString();
    setInterval(() => {
        const now = new Date();
        const elapsed = now - startDate;
        const startAgeWookie = calculateAge(dobWookie, startDate);
        const startAgeHyuna = calculateAge(dobHyuna, startDate);

        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsed / 1000) % 60);

        ddayDaysTogether.textContent = days;
        ddayHoursTogether.textContent = hours;
        ddayMinutesTogether.textContent = minutes;
        ddaySecondsTogether.textContent = seconds;
    }, 1000);
});

modalNoButton.addEventListener('click', () => {
    modalNoClickCount++;
    if (modalNoClickCount === 1) {
        modalText.textContent = 'Yes?';
    } else if (modalNoClickCount === 2) {
        modalText.textContent = 'Yes??';
    } else if (modalNoClickCount === 3) {
        modalText.textContent = 'Yes???';
        modalNoButton.textContent = 'Yes';
    }
});

function updateTimer(dobWookie, dobHyuna) {
    const currentDate = new Date();
    const ageWookie = calculateAge(dobWookie, currentDate);
    const ageHyuna = calculateAge(dobHyuna, currentDate);

    timerCurrentTime.textContent = currentDate.toLocaleString();
    timerYearsOld.textContent = `${ageWookie.years} year${ageWookie.years > 1? 's': ''}, `;
    timerMonthsOld.textContent = `${ageWookie.months} or ${ageHyuna.months} month${ageWookie.months > 1 || ageHyuna.months > 1 ? 's':''}, `;
    timerDaysOld.textContent = `and ${ageWookie.days} day${ageWookie.days > 1 ? 's':''} old`;
}

function calculateAge(birthday, currentDate) {
    const years = currentDate.getFullYear() - birthday.getFullYear();
    const months = currentDate.getMonth() - birthday.getMonth();
    const days = currentDate.getDate() - birthday.getDate();

    let adjustedYears = years;
    let adjustedMonths = months;
    let adjustedDays = days;

    if (adjustedDays < 0) {
        adjustedMonths--;
        adjustedDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (adjustedMonths < 0) {
        adjustedYears--;
        adjustedMonths += 12;
    }

    return { years: adjustedYears, months: adjustedMonths, days: adjustedDays };
}

function startConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confettiParticles = [];
    const colors = ['#FF0000', '#FFFF00', '#00FF00', '#0000FF', '#FF00FF'];

    function createParticle() {
        return {
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 + 1
        };
    }

    for (let i = 0; i < 300; i++) {
        confettiParticles.push(createParticle());
    }

    function drawParticles() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiParticles.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;

            if (p.y > confettiCanvas.height) {
                p.y = 0;
                p.x = Math.random() * confettiCanvas.width;
            }
        });

        requestAnimationFrame(drawParticles);
    }

    drawParticles();
}
