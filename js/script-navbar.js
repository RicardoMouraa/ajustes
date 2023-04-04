document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      card.addEventListener("click", function (event) {
        event.currentTarget.classList.toggle("selected");
        toggleSelected(card);
      });
    });
  
    var navbarHeartIcon = document.getElementById("navbarHeartIcon");
  
    navbarHeartIcon.addEventListener("click", function () {
      saveSelectedCards();
      window.location.href = "selectedCards.html";
    });
  
    loadSelectedCards();
  });
  
  function toggleSelected(card) {
    var isSelected = card.getAttribute("data-selected") === "true";
    card.setAttribute("data-selected", !isSelected);
  }
  
  function saveSelectedCards() {
    var cards = document.querySelectorAll(".card");
    var selectedCards = [];
  
    cards.forEach(function (card) {
      if (card.getAttribute("data-selected") === "true") {
        selectedCards.push(card.outerHTML);
      }
    });
  
    localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
  }
  
  function loadSelectedCards() {
    var selectedCardsContainer = document.getElementById("selectedCardsContainer");
    var selectedCards = JSON.parse(localStorage.getItem("selectedCards") || "[]");
  
    if (selectedCardsContainer) {
      selectedCards.forEach(function (cardHTML) {
        selectedCardsContainer.innerHTML += cardHTML;
      });
    }
  }
  