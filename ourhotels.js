//For section1 Our HOtels
const cardData = [
    {
        "image": "./images/hotel.jpg",
        "content": "Sidhartha Residency"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Swagath Residency"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Dwaraka Residency"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Hotel Sitara Elite, RJY"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Vijay Residency"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Mini Residency"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Priyanka Residency"
    },
    {
        "image": "./images/hotel.jpg",
        "content": "Hotel Lakshmi"
    }
];

const cardContainer = document.getElementById('card-container');

cardData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = data.image;
    image.alt = 'Card Image';

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `<p>${data.content}</p>`;

    card.appendChild(image);
    card.appendChild(cardContent);

    cardContainer.appendChild(card);
});


