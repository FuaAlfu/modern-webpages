document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('../public/data.json');
    const data = await response.json();

    let messageIndex = 0;
    let textIndex = 0;
    const messageElement = document.querySelector('.message');
    const textElement = document.querySelector('.text');

    function updateTexts() {
        messageElement.innerText = data.messages[messageIndex];
        textElement.innerText = data.texts[textIndex];

        // Update indices for the next cycle
        messageIndex = (messageIndex + 1) % data.messages.length;
        textIndex = (textIndex + 1) % data.texts.length;
    }

    // Start the cycle of updates
    updateTexts(); // Initial update
    setInterval(updateTexts, 1000); // Continuously update every 1000ms (1 second)

    document.getElementById('currentDate').textContent = new Date().toLocaleDateString();
});
