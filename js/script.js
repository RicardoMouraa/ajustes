// Get Elements
var menuIcon = document.querySelector(".svg-menu");
var menu = document.querySelector("#menu");
var overlay = document.querySelector(".overlay");

// Add Event Listener
menuIcon.addEventListener("click", function() {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", function() {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});