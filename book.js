// Function to display booking card
function displayBookingCard() {
    const bookingCard = document.getElementById('booking-card');
    bookingCard.style.display = 'block';
}

// Function to close booking card
function closeBookingCard() {
    const bookingCard = document.getElementById('booking-card');
    bookingCard.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
  
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.nextElementSibling;
        let currentValue = parseInt(input.value, 10);
        if (currentValue > 0) {
          input.value = currentValue - 1;
        }
      });
    });
  
    plusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        let currentValue = parseInt(input.value, 10);
        input.value = currentValue + 1;
      });
    });

    // Attach onclick event to "BOOK A STAY" button
    const bookStayBtn = document.getElementById('book-stay-btn');
    bookStayBtn.addEventListener('click', displayBookingCard);
});
