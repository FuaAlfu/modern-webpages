document.addEventListener('DOMContentLoaded', () => {
    // Display current year in footer
    const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();
  
    // Load messages from data.json and display randomly in the hero section
    fetch('./public/data.json')
      .then(response => response.json())
      .then(data => {
        const messages = data.msgArray;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const messageElement = document.getElementById('message');
        messageElement.textContent = randomMessage;
      })
      .catch(error => console.error('Error fetching messages:', error));
  });
  