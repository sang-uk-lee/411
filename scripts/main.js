const yesButton = document.getElementById('yesButton');
const confettiCanvas = document.getElementById('confettiCanvas');

yesButton.addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('dDay').classList.remove('hidden');
    startConfetti();
    updateDDay();
    setInterval(updateDDay, 1000 * 60 * 60 * 24);
});