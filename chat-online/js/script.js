const chatBox = document.getElementById("chat-box");
const typingIndicator = document.getElementById("typing-indicator");

const messages = [
    { text: "Olá, tudo bem? É um prazer ter você aqui!", delay: 1000 },
    { text: "Meu nome é Roberto Nóbrega.", delay: 2000 },
    { text: "Sou especialista em Gastrite e Saúde Digestiva.", delay: 3000 },
    { text: "Você gostaria de receber a receita do Chá da Reconstrução da Barreira Ácida?", buttons: ["Sim! Sem dúvidas!"], delay: 4000 },
];

function displayMessage(text, isUser = false, buttons = []) {
    typingIndicator.style.display = "block";
    setTimeout(() => {
        typingIndicator.style.display = "none";

        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", isUser ? "user" : "specialist");
        messageDiv.innerText = text;

        chatBox.appendChild(messageDiv);

        if (buttons.length > 0) {
            let buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");

            buttons.forEach(buttonText => {
                let button = document.createElement("button");
                button.classList.add("button-response");
                button.innerText = buttonText;
                button.onclick = () => handleResponse(buttonText);
                buttonContainer.appendChild(button);
            });

            chatBox.appendChild(buttonContainer);
        }

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);
}

function handleResponse(response) {
    displayMessage(response, true);
    setTimeout(() => {
        if (response === "Sim! Sem dúvidas!") {
            displayMessage("Perfeito! Vamos começar sua receita personalizada.");
        }
    }, 1000);
}

function startChat() {
    messages.forEach((msg, index) => {
        setTimeout(() => {
            displayMessage(msg.text, false, msg.buttons || []);
        }, msg.delay * index);
    });
}

startChat();
