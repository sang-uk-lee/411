const dDay = document.getElementById('dDay');

function updateDDay() {
    const startDate = new Date();
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    dDay.textContent = `D-${diffDays}`;
}