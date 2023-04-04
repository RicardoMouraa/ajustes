// Selecione todos os botões de dropdown
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

// Adicione um listener de evento para cada botão de dropdown
dropdownBtns.forEach(function(btn) {
  let dropdownMenu = btn.nextElementSibling;

  btn.addEventListener("mouseenter", function() {
    // Adiciona a classe "open" para abrir o dropdown
    dropdownMenu.classList.add("open");
  });

  btn.addEventListener("mouseleave", function() {
    // Remove a classe "open" para fechar o dropdown
    dropdownMenu.classList.remove("open");
  });

  // Adicione um listener de evento para clicar fora do dropdown
  window.addEventListener("click", function(event) {
    // Verifica se o clique foi fora do dropdown
    if (!event.target.matches(".dropdown-btn") && !event.target.matches(".dropdown-content")) {
      // Fecha o menu dropdown
      dropdownMenu.classList.remove("open");
    }
  });
});