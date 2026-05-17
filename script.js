let clickCount = 0;

const ctaButton = document.getElementById('ctaButton');
const counter = document.getElementById('counter');

ctaButton.addEventListener('click', () => {
    clickCount++;
    counter.textContent = `Click sul pulsante: ${clickCount}`;

    if (clickCount === 1) {
        alert('Grazie per aver cliccato! Benvenuto nella nostra landing page.');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
