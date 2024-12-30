// 생일 날짜 설정
const birthDate1 = new Date('1997-03-11');
const birthDate2 = new Date('1997-04-11');

function calculateAge(birthDate) {
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    // 일수가 음수인 경우 처리
    if (days < 0) {
        months--;
        const lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastDayOfLastMonth;
    }

    // 월수가 음수인 경우 처리
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function updateAge() {
    const now = new Date();
    const age1 = calculateAge(birthDate1);
    const age2 = calculateAge(birthDate2);

    // 현재 시간 포맷팅
    const currentTimeStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${now.getHours() < 12 ? '오전' : '오후'} ${String(now.getHours() % 12 || 12).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    // 나이 문자열 생성
    const ageStr = `${age1.years} year${age1.years !== 1 ? 's' : ''}, ${age1.months} or ${age2.months} month${(age1.months > 1 || age2.months > 1) ? 's' : ''}, and ${age1.days} day${age1.days !== 1 ? 's' : ''} old`;

    // DOM 업데이트
    document.getElementById('first').textContent = currentTimeStr;
    document.getElementById('second').textContent = ageStr;
}

// 초기 실행
updateAge();

// 1초마다 업데이트
setInterval(updateAge, 1000);