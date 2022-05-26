let mybutton = document.getElementById("myBtn");
let prevScrollpos = window.pageYOffset;
let slideIndex = 1;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

// Get years for footer
const year = document.getElementById("getyear").innerHTML = new Date().getFullYear();

// Hide navbar on scroll
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;

  scrollFunction();
};

// shrink jumbotron on scroll
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("jumbotron").style.fontSize = "15px";
    document.getElementById("jumbotron").style.padding = "15px";
    mybutton.style.display = "block";
  } else {
    document.getElementById("jumbotron").style.fontSize = "20px";
    document.getElementById("jumbotron").style.padding = "60px";
    mybutton.style.display = "none";
  }
}

// Mobile Navigation
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Slide Image
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
