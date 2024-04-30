document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.querySelector('p').style.animation = 
                entry.target.classList.contains('slide-left') ? 'slideInLeft 1s forwards' : 'slideInRight 1s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold to control when the animation triggers

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById('date').textContent = new Date().toLocaleDateString();

function changeHeaderColor() {
    const h1 = document.querySelector('header h1');
    h1.style.color = h1.style.color === 'blue' ? 'yellow' : 'blue';
}

const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();

// Change the color every second
setInterval(changeHeaderColor, 1000);
