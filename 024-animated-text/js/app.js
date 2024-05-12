document.addEventListener('DOMContentLoaded', function() {
    const spans = document.querySelectorAll('#animatedText span');
    const mainColor = '#33C1FF';
    const accentColor = '#FF33F6';
    let currentSpan = 0;

    function changeColor() {
        // Reset all to main color
        spans.forEach(span => {
            span.style.color = mainColor;
        });

        // Change current letter to accent color
        spans[currentSpan].style.color = accentColor;

        // Move to next letter
        currentSpan = (currentSpan + 1) % spans.length;
    }

    setInterval(changeColor, 1000); // Change color of each letter every second
});
