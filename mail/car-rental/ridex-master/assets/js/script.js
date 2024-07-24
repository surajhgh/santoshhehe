'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});




/** 
 * scripts for the rent now options
 * 
*/

document.addEventListener('DOMContentLoaded', function () {
  // Get all "Rent now" buttons
  const rentNowButtons = document.querySelectorAll('.rent-now-btn');

  // Add event listener to each button
  rentNowButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Get the car price
      const cardPriceWrapper = this.closest('.card-price-wrapper');
      const priceElement = cardPriceWrapper.querySelector('.card-price strong');
      const price = priceElement.textContent;

      // Display the payment form/modal
      showPaymentForm(price);
    });
  });

  function showPaymentForm(price) {
    // Create a modal or form for payment
    const paymentFormHtml = `
      <div id="payment-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Payment Options</h2>
          <p>Price: <strong>${price}</strong></p>
          <form>
            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" name="card-number" required><br><br>
            <label for="expiry-date">Expiry Date:</label>
            <input type="text" id="expiry-date" name="expiry-date" required><br><br>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required><br><br>
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    `;

    // Append the payment form to the body
    document.body.insertAdjacentHTML('beforeend', paymentFormHtml);

    // Get the modal element
    const modal = document.getElementById('payment-modal');

    // Show the modal
    modal.style.display = 'block';

    // Close the modal when the user clicks on <span> (x)
    modal.querySelector('.close').onclick = function() {
      modal.remove();
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.remove();
      }
    };
  }
});
