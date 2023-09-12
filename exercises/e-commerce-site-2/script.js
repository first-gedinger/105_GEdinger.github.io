document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let currentCardIndex = 0;

    // Function to display the current 3 cards and hide the rest
    function showCurrentCards() {
        productCards.forEach((card, index) => {
            if (index >= currentCardIndex && index < currentCardIndex + 3) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Show the initial set of cards
    showCurrentCards();

    // Handle next button click
    nextButton.addEventListener("click", () => {
        if (currentCardIndex + 3 < productCards.length) {
            currentCardIndex += 3;
            showCurrentCards();
        }
    });

    // Handle previous button click
    prevButton.addEventListener("click", () => {
        if (currentCardIndex > 0) {
            currentCardIndex -= 3;
            showCurrentCards();
        }
    });
});
