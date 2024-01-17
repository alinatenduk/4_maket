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
      var text = document.querySelector('[name="text"]').value.trim();
      var phone = document.querySelector('[name="phone"]').value.trim();
      var email = document.querySelector('[name="email"]').value.trim();
      if (name !== '' && surname !== '' && text != '' && phone !== '' && email !== '') {
          openModal("Дякуємо за реєстрацію!");
      } else {
          openModal("Будь ласка, заповніть всі поля.");
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.getElementById('sliderContainer');
  const dotsContainer = document.getElementById('sliderDots');
  const slides = document.querySelectorAll('.horizontal_container');
  const dots = [];
  let slidesToShow = window.innerWidth >= 900 ? 3 : 2;
  // Create corresponding dots
  slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dots.push(dot);
    dot.addEventListener('click', function () {
      showSlide(index);
    });
  });
  // Show the first set of slides by default
  showSlides(0);
  // Update the number of slides to display on window resize
  window.addEventListener('resize', function () {
    slidesToShow = window.innerWidth >= 900 ? 3 : 2;
    showSlides(0); // Show the first set of slides after resizing
  });

  function showSlides(startIndex) {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    for (let i = startIndex; i < startIndex + slidesToShow; i++) {
      if (i < slides.length) {
        slides[i].style.display = 'block';
      }
    }
    // Highlight the corresponding dots
    dots.forEach((dot, i) => {
      dot.classList.remove('active-dot');
      if (i >= startIndex && i < startIndex + slidesToShow) {
        dot.classList.add('active-dot');
      }
    });
  }

  function showSlide(index) {
    showSlides(index);
  }
});

//block a 
let currentSlideIndex = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.slider_item');
    const dots = document.querySelectorAll('.dot');
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Show the selected slide
    slides[index].style.display = 'block';
    // Add active class to the corresponding dot
    dots[index].classList.add('active');
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}
// Show the initial slide
showSlide(currentSlideIndex);
//development of sites 
document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".content_blok_b .horizontal_container");
    // Check for the number of elements
    if (containers.length > 3) {
        var currentIndex = 0;
        var itemsPerSlide = 3;
        var totalSlides = Math.ceil(containers.length / itemsPerSlide);
        function showCurrentSlide() {
            for (var i = 0; i < containers.length; i++) {
                var isVisible = i >= currentIndex * itemsPerSlide && i < (currentIndex + 1) * itemsPerSlide;
                containers[i].style.display = isVisible ? "block" : "none";
            }
        }
        showCurrentSlide();
        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showCurrentSlide();
        }
        // Setting the interval for automatic transition between slides (every 10 seconds)
        setInterval(showNextSlide, 10000);
    }
});

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

document.addEventListener("DOMContentLoaded", function () {
    var mentorsSlider = document.querySelector('.content_mentors');
    var totalSlides = mentorsSlider.children.length;
    var currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(showNextSlide, 10000); // Change slide every 10 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      breakpoints: {
        850: {
          slidesPerView: 2, // Show 2 blocks per slide when screen width is 850 pixels or less
        },
      },
    });
  });

  var button = document.getElementById('program-courses');

  $(document).ready(function () {
    // Function to show/hide blocks based on screen width
    function updateSlider() {
      var screenWidth = $(window).width();
      if (screenWidth < 600) {
        $('.horizontal_container').hide();
        $('.content_blok_b').find('.horizontal_container:first-child').show();
      } else if (screenWidth < 960) {
        $('.horizontal_container').hide();
        $('.content_blok_b').find('.horizontal_container:lt(2)').show();
      } else {
        $('.horizontal_container').show();
      }
    }
    // Initial setup
    updateSlider();
    // Update slider when the window is resized
    $(window).resize(function () {
      updateSlider();
    });
    // Auto-change slides every 10 seconds
    setInterval(function () {
      $('.content_blok_b').find('.horizontal_container:visible').fadeOut(500, function () {
        $(this).hide();
        var nextSlide = $(this).next('.horizontal_container');
        if (nextSlide.length === 0) {
          nextSlide = $('.content_blok_b').find('.horizontal_container:first-child');
        }
        nextSlide.fadeIn(500);
      });
    }, 10000);
  });

  document.addEventListener("DOMContentLoaded", function () {
    var containers = document.querySelectorAll(".content_blok_b .horizontal_container");
    var dots = document.querySelectorAll('.slider-nav .dot');
    // Check for the number of elements
    if (containers.length > 3) {
        var currentIndex = 0;
        var itemsPerSlide = 3;
        var totalSlides = Math.ceil(containers.length / itemsPerSlide);
        function showCurrentSlide() {
            for (var i = 0; i < containers.length; i++) {
                var isVisible = i >= currentIndex * itemsPerSlide && i < (currentIndex + 1) * itemsPerSlide;
                containers[i].style.display = isVisible ? "block" : "none";
            }
        }
        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showCurrentSlide();
        }
        // Setting the interval for automatic transition between slides (every 10 seconds)
        setInterval(showNextSlide, 10000);
        // Add click event listeners to dots
        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                currentIndex = index;
                showCurrentSlide();
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  showSlide(currentIndex); 
  function showSlide(index) {
      var slides = document.querySelectorAll('.slider-item');
      if (index >= slides.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slides.length - 1;
      } else {
          currentIndex = index;
      }
      slides.forEach(function(s) {
          s.style.display = 'none';
      });
      slides[currentIndex].style.display = 'block';
      updateDots();
  }
  function updateDots() {
      var dots = document.querySelectorAll('.slider_nav a');
      dots.forEach(function(dot, index) {
          dot.classList.remove('active');
          dot.addEventListener('click', function() {
              navigateSlides(index);
          });
      });
      dots[currentIndex].classList.add('active');
  }
  function navigateSlides(index) {
      showSlide(index);
  }
});



