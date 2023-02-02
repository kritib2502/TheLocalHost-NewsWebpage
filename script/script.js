jQuery(document).ready(function() {
  $('.slider_inner').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    nextArrow: '.arrow.next',
    prevArrow: '.arrow.prev',
    fade: true
  })
});

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const theContainer = document.querySelector(".container");

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  theContainer.classList.toggle('containerOpen');
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
