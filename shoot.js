const gun = document.querySelector('.gun');
const target = document.querySelector('.target');

document.addEventListener('mousemove', (e) => {
    moveGun(e);
});

document.addEventListener('click', () => {
    shoot();
});

function moveGun(e) {
    const gunRect = gun.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angle = Math.atan2(mouseY - gunRect.top - gunRect.height / 2, mouseX - gunRect.left - gunRect.width / 2);
    const rotation = angle * (180 / Math.PI);
    gun.style.transform = `rotate(${rotation}deg)`;
}

function shoot() {
    const gunRect = gun.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if (
        gunRect.right >= targetRect.left &&
        gunRect.left <= targetRect.right
    ) {
        alert('You hit the target!');
    }
}
