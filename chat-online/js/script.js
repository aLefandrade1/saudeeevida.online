document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value;

    if (message.trim() !== "") {
        // Adiciona a mensagem do usuário ao chat
        addMessage('Você: ' + message);
        userInput.value = '';

        // Simula a resposta do especialista
        setTimeout(() => {
            addMessage('Dr. João Silva: Obrigado pela sua mensagem! Estou aqui para ajudar.');
        }, 1000); // Resposta após 1 segundo
    }
});

function addMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rolagem automática
}
