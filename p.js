// script.js

const flagShape = document.querySelector('.flag-shape');

function randomizeAnimation() {
    const duration = Math.floor(Math.random() * 5 + 2); // Random duration between 2s and 7s
    flagShape.style.animationDuration = `${duration}s`;
}

flagShape.addEventListener('click', () => {
    randomizeAnimation();
});
