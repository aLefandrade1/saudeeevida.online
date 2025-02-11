const chatBox = document.getElementById("chat-box");
const typingIndicator = document.getElementById("typing-indicator");

const messages = [
    { text: "Olá, tudo bem? É um prazer ter você aqui!", delay: 1000 },
    { text: "Meu nome é Roberto Nóbrega, Sou especialista em Gastrite e Saúde Digestiva.", delay: 2000 },
    { text: "Você gostaria de receber a receita do Chá da Reconstrução da Barreira Ácida?", buttons: ["Sim! Sem dúvidas!"], delay: 3000 },
];

const videoProofs = [
    "https://fast.wistia.com/embed/medias/SEU_VIDEO_ID_1.js",
    "https://fast.wistia.com/embed/medias/SEU_VIDEO_ID_2.js"
];

function displayMessage(text, isUser = false, buttons = []) {
    typingIndicator.style.display = "block";
    setTimeout(() => {
        typingIndicator.style.display = "none";
        
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", isUser ? "user" : "specialist");
        messageDiv.innerText = text;

        // Adiciona a mensagem ao chat
        chatBox.appendChild(messageDiv);

        // Se houver botões, adiciona após a mensagem
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


        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);
}

function handleResponse(response) {
    displayMessage(response, true);
    setTimeout(() => {
        if (response === "Sim! Sem dúvidas!") {
            displayMessage("Perfeito! Vamos começar a montar sua receita personalizada.");
        }
    }, 1000);
}

function displayVideoProofs() {
    videoProofs.forEach(video => {
        let scriptTag = document.createElement("script");
        scriptTag.src = video;
        scriptTag.async = true;
        chatBox.appendChild(scriptTag);
    });
}

function displayCheckout() {
    setTimeout(() => {
        let checkoutDiv = document.createElement("div");
        checkoutDiv.classList.add("checkout-box");
        checkoutDiv.innerHTML = `
            🔥 <b>De R$ 197,00 por apenas R$ 10,00!</b> 🔥<br>
            <a href="https://seusite.com/checkout" class="button-response">Ir para o Checkout</a>
        `;
        chatBox.appendChild(checkoutDiv);
    }, 2000);
}

function startChat() {
    messages.forEach((msg, index) => {
        setTimeout(() => {
            displayMessage(msg.text, false, msg.buttons || []);
        }, msg.delay * index);
    });
}

startChat();
