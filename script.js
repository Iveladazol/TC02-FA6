document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });


    const currentYear = new Date().getFullYear();

    const footerText = document.querySelector('footer p');

    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
    }
    const intro = document.querySelector('.intro');
    if (intro) {
        setTimeout(() => {
            intro.style.display = 'none';
        }, 4500);
    }
});
