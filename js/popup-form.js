function togglePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.toggle('ativo');
  }
  
  const abrirFormulario = document.querySelector('#abrir-formulario');
  abrirFormulario.addEventListener('click', togglePopup);
  
  const enviarFormulario = document.querySelector('#formulario-contato button[type="submit"]');
  enviarFormulario.addEventListener('click', togglePopup);
  