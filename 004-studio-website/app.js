document.addEventListener("DOMContentLoaded", function () {
    // Slider images (you can replace these with your own images)
    const sliderImages = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
    ];

    const slider = document.querySelector(".slider");

    // Create and append image elements to the slider
    sliderImages.forEach((image) => {
        const img = document.createElement("img");
        img.style.height = '400px';
        img.style.width = '400px'
        img.src = image;
        slider.appendChild(img);
    });

    // Contact button functionality
    const contactButton = document.getElementById("contact-button");
    contactButton.addEventListener("click", function () {
        alert("Contact button clicked!");
    });
});


const date = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    document.getElementById('date').innerHTML = currentYear.toString(); 
}

date();