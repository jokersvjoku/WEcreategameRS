document.querySelectorAll('.game-card').forEach(card => {
    let hoverTimeout;

    card.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
            const video = card.querySelector('.preview-video');
            if (video) {
                video.style.display = 'block';
                video.play();
            }
        }, 2000); // 1-second delay
    });

    card.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        const video = card.querySelector('.preview-video');
        if (video) {
            video.pause();
            video.currentTime = 0;
            video.style.display = 'none';
        }
    });
});
