const confettiCanvas = document.getElementById('confettiCanvas');

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