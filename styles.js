document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;
        const moveX = (x / width * 10) - 5;
        const moveY = (y / height * 10) - 5;
        card.style.transform = `translateY(-10px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-10px) rotateX(0) rotateY(0)';
    });
});
