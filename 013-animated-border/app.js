document.addEventListener('DOMContentLoaded', () => {
    const border = document.getElementById('border');
  
    setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
  
      const color = `rgb(${hours % 256}, ${minutes % 256}, ${seconds % 256})`;
      border.style.borderColor = color;
    }, 1000);
});  