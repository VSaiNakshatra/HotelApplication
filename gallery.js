//For Section2 Gallery
// Define JSON data for each slide
const slideshowData = [
    
    {
        "image": "./images/mainroom.jpg",
        
    },
    {
        "image": "./images/rec1.jpg",
        
    },
    {
        "image": "./images/corri.jpg",
        
    },
    {
        "image": "./images/pic2.jpg",
        
    },
    {
        "image": "./images/pic3.jpg",
        
    },
    {
        "image": "./images/pic4.jpg",
        
    },
    {
        "image": "./images/rec2.jpg",
        
    }
];

const slideshowContainer = document.getElementById('slideshow-container');

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

slideshowData.forEach(data => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const image = document.createElement('img');
    image.src = data.image;

    slide.appendChild(image);

    slideshowContainer.appendChild(slide);
});

showSlides();