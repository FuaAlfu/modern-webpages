document.addEventListener("DOMContentLoaded", function () {
    const gameListSection = document.getElementById("game-list");

    // Fetch games from the dummy database
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            // Add each game to the game list
            data.games.forEach(game => {
                const gameCard = document.createElement("div");
                gameCard.classList.add("game-card");

                const title = document.createElement("h2");
                title.textContent = game.title;

                const rating = document.createElement("span");
                rating.classList.add("rating");
                rating.textContent = `Rating: ${game.rating}`;

                gameCard.appendChild(title);
                gameCard.appendChild(rating);

                gameListSection.appendChild(gameCard);
            });
        });
});
