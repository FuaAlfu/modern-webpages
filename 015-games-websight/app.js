document.addEventListener('DOMContentLoaded', () => {
    // Display current year
    const currentYearElement = document.getElementById('currentYear');
    currentYearElement.textContent = new Date().getFullYear();
  
    // Load games data from data.json
    fetch('./public/data.json')
      .then(response => response.json())
      .then(data => {
        // Map over games and create cards dynamically
        const gamesSection = document.getElementById('games');
        data.games.forEach(game => {
          const card = createGameCard(game);
          gamesSection.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching games data:', error));
  
    // Function to create a game card
    function createGameCard(game) {
      const cardContainer = document.createElement('div');
      cardContainer.className = 'card';
  
      const cardInner = document.createElement('div');
      cardInner.className = 'card-inner';
  
      const cardFaceFront = createCardFace('card-face', game.title);
      const cardFaceBack = createCardFace('card-face card-back', game.details);
  
      cardInner.appendChild(cardFaceFront);
      cardInner.appendChild(cardFaceBack);
      cardContainer.appendChild(cardInner);
  
      return cardContainer;
    }
  
    // Function to create a card face
    function createCardFace(className, text) {
      const cardFace = document.createElement('div');
      cardFace.className = className;
      cardFace.textContent = text;
      return cardFace;
    }
  });  