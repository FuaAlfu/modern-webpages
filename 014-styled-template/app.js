document.addEventListener('DOMContentLoaded', () => {
  // Dynamic date display
  const currentDateElement = document.getElementById('currentDate');
  const currentDate = new Date().getFullYear();
  currentDateElement.textContent = currentDate;

  // Contact button functionality
  const contactButton = document.getElementById('contactButton');
  contactButton.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
});
