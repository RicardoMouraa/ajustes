// selecione todas as letras do filtro do alfabeto
const letters = document.querySelectorAll('.alphabet-filter .letter');

// para cada letra, adicione um manipulador de eventos ao clique
letters.forEach(letter => {
  letter.addEventListener('click', () => {
    const selectedLetter = letter.textContent; // obter a letra selecionada
    const cards = document.querySelectorAll('.container-galeria .card'); // selecionar todos os cards

    cards.forEach(card => {
      const title = card.querySelector('.title').textContent.trim(); // obter o texto do título do card
      if (title.startsWith(selectedLetter)) {
        card.style.display = 'block'; // mostrar o card se o título começar com a letra selecionada
      } else {
        card.style.display = 'none'; // esconder o card se o título não começar com a letra selecionada
      }
    });
  });
});

// selecione o botão "Limpar Filtro"
const clearFilterButton = document.querySelector('#clear-filter-button');

// adicione um manipulador de eventos ao clique no botão "Limpar Filtro"
clearFilterButton.addEventListener('click', () => {
  const cards = document.querySelectorAll('.container-galeria .card'); // selecionar todos os cards
  cards.forEach(card => {
    card.style.display = 'block'; // mostrar todos os cards novamente
  });
  // desmarcar a letra selecionada e remover a classe 'selected'
  letters.forEach(letter => {
    if (letter.classList.contains('selected')) {
      letter.classList.remove('selected');
    }
  });
});
