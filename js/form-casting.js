document.querySelector('#abrir-formulario').addEventListener('click', function () {
  document.querySelector('#custom-overlay').style.display = 'flex';
});

document.querySelector('#close-btn').addEventListener('click', function () {
  document.querySelector('#custom-overlay').style.display = 'none';
});

document.querySelector('#custom-overlay').addEventListener('click', function (event) {
  if (event.target === this) {
    document.querySelector('#custom-overlay').style.display = 'none';
  }
});

document.querySelector('#formulario-contato').addEventListener('submit', function (event) {
  event.preventDefault();

  // Validação do formulário
  let isValid = true;
  const inputs = document.querySelectorAll('.inputs');
  inputs.forEach((input) => {
    const errorMessage = input.parentElement.querySelector('.span-inputs');
    if (input.type === 'text' && input.value.trim().length < 3) {
      errorMessage.style.display = 'block';
      isValid = false;
    } else if (input.type === 'email' && !input.value.match(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/)) {
      errorMessage.style.display = 'block';
      isValid = false;
    } else if (input.type === 'number' && !input.value.match(/^\d{10,}$/)) {
      errorMessage.style.display = 'block';
      isValid = false;
    } else {
      errorMessage.style.display = 'none';
    }
  });

  // Se o formulário for válido, envie os dados e feche o popup
  if (isValid) {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    document.querySelector('#custom-overlay').style.display = 'none';
  }
});

document.querySelector('.submit-button[type="button"]').addEventListener('click', function () {
  document.querySelector('#custom-overlay').style.display = 'none';
});
