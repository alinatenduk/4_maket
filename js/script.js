//burger_menu
const hb = document.querySelector('.header_burger_btn');
const menu = document.querySelector('.header');
hb.addEventListener('click', function(){
    menu.classList.toggle('active');
})
$(document).ready(function(){
  $('.content_mentors').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Changed to 10 seconds
    dots: true,  // Adds dots to indicate slides
    arrows: false, // Disables the "Previous" and "Next" buttons
  });
});
document.getElementById('sendMessageBtn').addEventListener('click', function() {
  var message = prompt('Введіть ваше повідомлення:');
  console.log('Ви відправили повідомлення: ' + message);
});

//validation phone
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("input[name='phone']");
    phoneInput.addEventListener("input", function () {
        //Remove any characters that are not plus (+) or numbers
        this.value = this.value.replace(/[^+\d]/g, '');
        // We limit the input to 10 digits
        if (this.value.length > 11) {
            this.value = this.value.substring(0, 11);
        }
    });
});

//modal
function openModal(message) {
  var modal = document.getElementById('modal');
  var modalMessage = document.getElementById('modalMessage');
  modalMessage.innerHTML = message;
  modal.style.display = 'block';
}
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
  var registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var name = document.querySelector('[name="name"]').value.trim();
      var surname = document.querySelector('[name="surname"]').value.trim();
      var phone = document.querySelector('[name="phone"]').value.trim();
      var email = document.querySelector('[name="email"]').value.trim();
      if (name !== '' && surname !== '' && phone !== '' && email !== '') {
          openModal("Дякуємо за реєстрацію!");
      } else {
          openModal("Будь ласка, заповніть всі поля.");
      }
  });
});





















 
  







