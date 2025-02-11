const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    let message = userInput.value.trim();
    
    if (message === "") return;

    // Adiciona a mensagem do usuário
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = "Você: " + message;
    chatBox.appendChild(userMessage);

    userInput.value = "";

    // Simula resposta do especialista
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "specialist");
        
        if (message.match(/[0-9]+/)) {
            botMessage.innerText = "Ótimo! Agora me diga, qual é o seu problema?";
        } else {
            botMessage.innerText = "Por favor, insira um número válido para sua idade.";
        }
        
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
