// Obter a altura total da página
const pageHeight = document.body.scrollHeight;

// Definir a altura do footer
const footerHeight = document.querySelector('.footer-container').offsetHeight;

// Verificar a posição atual da página
window.addEventListener('scroll', () => {
  const currentPosition = window.pageYOffset + window.innerHeight;
  
  // Verificar se a posição atual é igual ou maior que a altura total da página, menos a altura do footer
  if (currentPosition >= pageHeight - footerHeight) {
    // Se sim, exibir o footer
    document.querySelector('.footer-container').style.display = 'flex';
  } else {
    // Caso contrário, ocultar o footer
    document.querySelector('.footer-container').style.display = 'none';
  }
});