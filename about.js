// Define image source and text content
const imageSrc = './images/wakeup.jpg';
const title = 'ABOUT US';
const description = "At Hotel Sitara Elite, we pride ourselves on offering unparalleled hospitality to our guests. From the moment you step through our doors, you will experience the warmth and care that define our commitment to exceptional service. Our dedicated staff members are here to anticipate your every need, ensuring that your stay with us is not only comfortable but truly memorable. Whether it's a friendly greeting at check-in, personalized recommendations for local attractions, or attentive assistance throughout your stay, we go above and beyond to make you feel welcome and valued. We believe that hospitality is more than just a service, it's a way of life, and it's our pleasure to share it with you.";

// Create image element
const image = document.createElement('img');
image.src = imageSrc;
image.alt = title;
image.style.width = '100%';

// Create text block
const textBlock = document.createElement('div');
textBlock.classList.add('text-block');
textBlock.innerHTML = `
    <h2>${title}</h2>
    <p style="text-align: justify;">${description}</p>
`;

// Append image and text block to card container
const AboutcardContainer = document.getElementById('AboutcardContainer');
AboutcardContainer.appendChild(image);
AboutcardContainer.appendChild(textBlock);
