document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const typing = document.getElementById("typing");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    let messages = [
        "Olá! Eu sou o Dr. João. Vamos criar sua receita personalizada.",
        "Qual é a sua idade?",
        "Qual o seu sexo? (Masculino/Feminino)",
        "Qual o seu problema? Exemplo: fungos no dedo, mau odor...",
        "Há quanto tempo você tem esse problema?"
    ];

    let index = 0;

    function addMessage(text, isUser = false) {
        let messageDiv = document.createElement("p");
        messageDiv.textContent = text;
        messageDiv.className = isUser ? "user-message" : "bot-message";
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function nextMessage() {
        if (index < messages.length) {
            typing.style.display = "block";
            setTimeout(() => {
                typing.style.display = "none";
                addMessage(messages[index]);
                index++;
            }, 1000);
        } else {
            addMessage("Obrigado! Sua receita está pronta. Acesse o link abaixo:");
            addMessage("🔗 [Clique aqui para ver sua receita personalizada](#)");
        }
    }

    sendBtn.addEventListener("click", function () {
        let userText = userInput.value.trim();
        if (userText !== "") {
            addMessage(userText, true);
            userInput.value = "";
            setTimeout(nextMessage, 1000);
        }
    });

    nextMessage();
});
