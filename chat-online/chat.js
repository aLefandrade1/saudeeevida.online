document.addEventListener("DOMContentLoaded", function () {
    iniciarChat();
});

function iniciarChat() {
    setTimeout(() => {
        addMessage("Olá! Sou o João, especialista. Vou te ajudar!", "specialist-message");
        setTimeout(() => {
            addMessage("Qual a sua idade?", "specialist-message");
        }, 2000);
    }, 1000);
}

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let userMessage = inputField.value.trim();

    if (userMessage !== "") {
        addMessage(userMessage, "user-message");
        inputField.value = "";

        setTimeout(() => {
            addMessage("Ótimo! Agora me diga, qual problema você está enfrentando?", "specialist-message");
        }, 2000);
    }
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerHTML = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
