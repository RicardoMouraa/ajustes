function sendModelsByWhatsApp() {
    const selectedCardsJson = localStorage.getItem('selectedCards');
    if (!selectedCardsJson) {
        alert('Nenhum modelo selecionado.');
        return;
    }

    const selectedCards = JSON.parse(selectedCardsJson);
    if (selectedCards.length === 0) {
        alert('Nenhum modelo selecionado.');
        return;
    }

    const modelNames = selectedCards.map(card => card.title.toUpperCase());
    const message = `Olá! Estou interessado nos seguintes modelos:\n\n${modelNames.join(', ')}\n\nPor favor, me envie mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5547992164395';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    const actionButton = document.getElementById('send-button');
    if (actionButton) {
        actionButton.addEventListener('click', sendModelsByWhatsApp);
    }
});
