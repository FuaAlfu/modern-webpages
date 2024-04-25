document.getElementById('date').textContent = new Date().toLocaleDateString();

function changeHeaderColor() {
    const h1 = document.querySelector('header h1');
    h1.style.color = h1.style.color === 'blue' ? 'yellow' : 'blue';
}

const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();

// Change the color every second
setInterval(changeHeaderColor, 1000);
