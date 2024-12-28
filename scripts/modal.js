const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const answerButton = document.getElementById('answerButton');

let noClickCount = 0;

noButton.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount === 1) {
        modalText.textContent = 'Yes?';
    } else if (noClickCount === 2) {
        modalText.textContent = 'Yes??';
    } else if (noClickCount === 3) {
        modalText.textContent = 'Yes???';
        noButton.textContent = 'Yes';
    }
});

yesButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

answerButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});
