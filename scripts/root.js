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
const confettiCanvas = document.getElementById('confettiCanvas');
const confettiIcon = document.getElementById('confettiIcon')
const replayIcon = document.getElementById('replayIcon')

const myBirthday = new Date('1997-03-11');
const partnerBirthday = new Date('1997-04-11');
let modalNoClickCount = 0;
let startDate = new Date();
let isStartDateSet = false;
const yesTimeUploadUrl = 'https://s3.us-east-1.amazonaws.com/411.sanguk.io/yes.txt?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIHjMryO%2BirJUBdCtjPm%2FzAqQz36B5ewvf%2FAnqRtsL5XbAiAQRsUwv3fDNkwpw0nIyJ5ElDr9b1HiHYagAGbF%2FIDmsirHAwhcEAIaDDQwMzM4ODM5MDQ1OSIM2QuUtPY3rFNWMwpNKqQDTJLrOXjXhFyb4RB9bM54VOiJxjcdo10ZBEOBtThMZVizpw0zEnMDIYWMGgw09CegxG50uZjDthhucGzhkxaz5KifYyCC1%2Fo3VKVIUTo4YQhobtu%2BmLNo4Ek2H%2F2XMbHKWJJxhhagsBfNRmLod5LJBggSb3AnOnnwq%2Bhe%2BU1GlW0vi%2FX1cc7vUpEYQcfAVaXDpbtDbcwIRHOnH8kJfNqzejsd8sZ3Zkw85xpMtkG1aCM1JADzwtTX%2FdACq6An5MrhaLVUAIlqC657a30MCwCmlJzCz0Wu70aN8yO9Z%2B%2Fikda9fBaddW2mE0zFda982Ril7n%2FVZxZ6P38RDgxbKc9psM8oZVFR6VX5OX%2FWPASZLcjZiqiXymSVy4Q8qOv%2F1UqPbRUETg%2BUCghwkTiYgOcqMnN1knJN8ewTWUIXBZzcTTyEj5ACEHvBHiWbksSLTr9z%2BGapNwkL7iQ%2BrdpPeB3xljJ14S1MD%2BHadZ9jZEhvI2srMJAlrwNYj6cmMEiWykfjJycVxQr7uzPBDMGhIAvLPLE7uM9KjPajzMpPwELvzhjDwSdfMPa9vbsGOuUCEo%2BQpam9Sev7WClRSW43TKWMEvoG%2FktxoK8HS4IK2f%2BkoRCh5RwMC6b%2B2BkSMS3Za%2F7eY9P1ClcDk48JYbx9SjA4hCmTv62ppcsGnJ46bSz%2FhEakNLiBaWUD4WYMb9vqruX8d3MzHR8T9kT9xHcMUTB3Hq8ncOfAasvipzJnCuKHUleCo92%2F4%2FzD5PC%2ByzdnhkgFb7SsKHg%2F4Cf%2Fj4nTo%2FGbQ%2BGpoXJpX22MJF9H9k5NSZnjtn4cqEA1XNLVw8aH%2FSI8nYjTDTqQ%2Fklx6q7fc96KPQV9Bok6%2BgvXnQKdwBsH4TkXmydHcjdY6vKeYR6GcofY5e%2BlE2S8nY86cwuuuU9XuN0xKfhLIXYtAXEpDhNaUjGXuRpgvR18bFSeE2udmHmOFhg8exOehsgMFQ0NdJxa4ETGkUneCqdRLB29%2Bdux7TMbQaWQDRgHKbKx9Mwws1J4qCkrlnxK23irsMRMxKMyHriB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAV326SLQ5RFCOFULW%2F20241228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241228T102942Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=22d0ad8f27c6ae73791f8cec76addc48c983f110dea295b80026159945b99527';
const yesTimeDownloadUrl = 'https://s3.us-east-1.amazonaws.com/411.sanguk.io/yes.txt';

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
    heart.style.width = '100px';
    heart.style.height = '100px';

    // Heart, Photo animations
    photoWookie.style.animation = 'magnet-right 3s forwards';
    photoHyuna.style.animation = 'magnet-left 3s forwards';
    photos.style.gap = '15px';
    heart.style.animation = 'heartbeat 5s infinite';

    // Dday section visible
    const startDate = new Date();
    const timestamp = startDate.toISOString();
    ddaySection.style.display = 'flex';
    ddaySection.classList.add('visible');
    ddayStartedAt.textContent = startDate.toLocaleString();
    setInterval(() => {
        updateDday(myBirthday, partnerBirthday, startDate);
    }, 1000);

    // Confetti render
    confettiCanvas.classList.remove('hidden');
    startConfetti();

    // S3 업로드
    fetch(yesTimeUploadUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "text/plain" // 파일 형식
        },
        body: timestamp
    })
        .then(response => {
            if (response.ok) {
                console.log('File uploaded successfully!');
            } else {
                console.error('Failed to upload file:', response.statusText);
            }
        })
        .catch(error => {
            console.error("Error uploading timestamp:", error);
            document.getElementById("result").textContent = "Error uploading timestamp.";
    });
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

confettiIcon.addEventListener('click', () => {
    confettiIcon.style.display = 'none'; // 아이콘 숨기기
    startConfetti(); // Confetti 재시작
});

replayIcon.addEventListener('click', () => {
    replayAction();
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

function updateDday(dobWookie, dobHyuna, startDate) {
    const now = new Date();
    const elapsed = now - startDate;
    const startAgeWookie = calculateAge(dobWookie, startDate);
    const startAgeHyuna = calculateAge(dobHyuna, startDate);

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    ddayDaysTogether.textContent = `${days}`;
    ddayHoursTogether.textContent = `${hours}`;
    ddayMinutesTogether.textContent = `${minutes}`;
    ddaySecondsTogether.textContent = `${seconds}`;
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

    const confettiColors = ['#13271d', '#3000ff', '#1e3d34', '#3f5db3', '#265f6c', '#4d6dbb'];
    const confettiShapes = ['square', 'circle', 'heart', 'star'];
    const rect = modalYesButton.getBoundingClientRect(); // Yes 버튼 위치 가져오기
    const confettiParticles = [];
    
    function createParticle() {
        const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 + 2,
            color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            shape: shape,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 5 + 1,
        };
    }
    for (let i = 0; i < 300; i++) {
        confettiParticles.push(createParticle());
    }

    function drawParticles() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiParticles.forEach((p) => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;

            if (p.shape === 'square') {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            } else if (p.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.shape === 'heart') {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 2, 0, p.size);
                ctx.bezierCurveTo(p.size, p.size / 2, p.size / 2, -p.size / 2, 0, 0);
                ctx.fill();
            } else if (p.shape === 'star') {
                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    ctx.lineTo(0, -p.size / 2);
                    ctx.translate(0, -p.size / 2);
                    ctx.rotate((Math.PI * 2) / 5);
                }
                ctx.fill();
            }

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

    // 3초 후 Confetti icon 출현
    setTimeout(() => {
        confettiIcon.style.display = 'flex'; // Confetti 아이콘 표시
    }, 3000);
    // 10초 후 Confetti 종료
    setTimeout(() => {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiCanvas.classList.add('hidden');
    }, 10000);
}

function replayAction() {
    // 여기에 Replay 시 수행할 작업 정의 (예: D-Day 리셋)
    const ddaySection = document.getElementById('dDay');
    ddaySection.classList.remove('visible');
    setTimeout(() => {
        ddaySection.classList.add('visible');
    }, 500);

    // 원하는 추가 동작 실행
    console.log('Replay Action Executed!');
}