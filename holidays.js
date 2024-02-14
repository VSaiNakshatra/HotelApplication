document.addEventListener("DOMContentLoaded", function() {
    const jsonData = [
      {
        "title": "Pitapuram Temple",
        "image": "./images/pitapuram.jpg",
        "description": "The town of Pithapuram near Kakinada is known for its many temples. There are several temples there, which devotees of the Hindu faith regard with great awe. Further, Shripada Shri Vallabha, who is revered as a physical manifestation of Lord Dattatreya, lived at Pithapuram during that time."
      },
      {
        "title": "Samalkot",
        "image": "./images/samalkot.jpg",
        "description": "The temple of Kumararama Bheemeshwara Swamy is an excellent example of great architecture. This building is a beautiful representation of the Dravidian style. It is one of the most significant icons of Samalkot. 100 pillars were used to sustain the whole two-story Shiva temple."
      },
      {
        "title": "Draksharamam",
        "image": "./images/Draksharama.jpg",
        "description": "Draksharamam Temple, situated on the eastern bank of the Godavari River, is one of the five most important and influential Shiva temples in India. To go there from Rajahmundry, you have to travel 40 kilometres. Construction of the temple began in the 11th century, and its design has stood the test of time."
      },
      {
        "title": "Hope Island",
        "image": "./images/hope.jpg",
        "description": "Hope Island off the kakinada coast is located in the Bay of Bengal, a short distance  - 7 kms out. Hope Island is so named for providing a natural haven to sailors against the forces of wind and tide against the weary traveler. In doing so, it has made Kakinada one of the most affluent natural ports in the region. "
      },
      {
        "title": "Koringa Wildlife Santuary",
        "image": "./images/coringa.jpg",
        "description": "Coringa Wildlife Sanctuary and Estuary is home to over 35 mangrove species, 120 uncommon bird species, and many other types of flora and fauna. The sanctuary is particularly well-known for being home to two species of highly endangered vultures: the White-backed and the long-billed. The estuary's ocean-meets-river scenery is spectacular."
      },
      {
        "title": "Adduru",
        "image": "./images/adurru.jpg",
        "description": "Adurru, in the Razole Taluk, is an ancient Buddhist site with several excavated structures that would get the heart pumping for history buffs. After discovering a number of archaeological sites, the Archaeological Survey of India (A.S.I.) seized custody of them for further study and excavation. Stupas, Chaityas, and Viharas are all examples of such Buddhist structures."
      }
    ];
  
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  function showCards(index) {
    slider.style.transform = `translateX(-${index * 320}px)`; // Adjust card width as needed
  }

  function showNextCard() {
    if (currentIndex < jsonData.length - 1) {
      currentIndex++;
      showCards(currentIndex);
      prevBtn.disabled = false; // Enable prev button
    }
    if (currentIndex === jsonData.length - 1) {
      nextBtn.disabled = true; // Disable next button if at the end
    }
  }

  function showPrevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      showCards(currentIndex);
      nextBtn.disabled = false; // Enable next button
    }
    if (currentIndex === 0) {
      prevBtn.disabled = true; // Disable prev button if at the beginning
    }
  }

  nextBtn.addEventListener("click", showNextCard);
  prevBtn.addEventListener("click", showPrevCard);

  // Disable prev button initially
  prevBtn.disabled = true;

  jsonData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;

    const header = document.createElement("h2");
    header.textContent = item.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.description;

    card.appendChild(image);
    card.appendChild(header);
    card.appendChild(paragraph);
    slider.appendChild(card);
  });
});