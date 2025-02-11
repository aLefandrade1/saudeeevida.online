const chatBox = document.getElementById("chat-box");
const typingIndicator = document.getElementById("typing-indicator");

// Função para exibir mensagens no chat com delay maior (3-4 segundos)
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
    }, 3000); // Agora todas as mensagens têm um delay de 3 segundos
}

// Pergunta de idade aceita digitação antes de continuar
function askAge() {
    displayMessage("Quantos anos você tem? Digite abaixo.");
    
    document.getElementById("user-input").style.display = "block";
    document.getElementById("user-input").onkeypress = function (event) {
        if (event.key === "Enter") {
            let age = event.target.value;
            displayMessage(age, true);
            event.target.value = "";
            document.getElementById("user-input").style.display = "none";

            setTimeout(() => {
                displayMessage("Qual seu peso aproximado?", false, [
                    "Até 60 Kg",
                    "Entre 61Kg e 70Kg",
                    "Entre 71Kg e 90 Kg",
                    "Mais de 90Kg"
                ]);
            }, 4000); // Delay maior para dar tempo do usuário ler
        }
    };
}

// Fluxo do Funil
function handleResponse(response) {
    displayMessage(response, true);

    setTimeout(() => {
        switch (response) {
            case "Sim! Sem dúvidas!":
                displayMessage("Perfeito! Vamos começar sua receita personalizada.");
                setTimeout(() => {
                    displayMessage("Qual é o principal problema que você deseja resolver?", false, [
                        "Aliviar as dores no estômago",
                        "Eliminar a queimação e o desconforto",
                        "Melhorar a digestão e comer sem medo",
                        "Prevenir complicações graves"
                    ]);
                }, 4000);
                break;

            case "Aliviar as dores no estômago":
            case "Eliminar a queimação e o desconforto":
            case "Melhorar a digestão e comer sem medo":
            case "Prevenir complicações graves":
                displayMessage("Há quanto tempo você enfrenta esse problema?", false, [
                    "Uma semana",
                    "Mais de um mês",
                    "Mais de um ano"
                ]);
                break;

            case "Uma semana":
            case "Mais de um mês":
            case "Mais de um ano":
                askAge(); // Chama a função para digitar idade
                break;

            case "Até 60 Kg":
            case "Entre 61Kg e 70Kg":
            case "Entre 71Kg e 90 Kg":
            case "Mais de 90Kg":
                displayMessage("Acabei de analisar suas respostas e vou deixar o diagnóstico personalizado logo abaixo!");
                setTimeout(() => {
                    displayMessage("⚠️ Nível Elevado! Ignorar os cuidados com a gastrite pode ser perigoso.");
                    displayMessage("Veja os riscos para sua saúde:");
                    displayMessage("✅ Úlceras Gástricas: Pode causar dores intensas.");
                    displayMessage("✅ Sangramento Interno: Pode colocar sua saúde em risco.");
                    displayMessage("✅ Impacto na Qualidade de Vida: A dor constante afeta seu bem-estar.");
                    
                    setTimeout(() => {
                        displayMessage("Para o seu caso, tem solução e é mais fácil do que você pensa!");
                        displayMessage("Veja essa paciente que também está se tratando com o Chá da Reconstrução:");
                        displayVideoProofs();
                    }, 4000);
                }, 4000);
                break;

            case "Sim! EU quero!":
                displayCheckout();
                break;
        }
    }, 4000);
}

// Função para exibir o vídeo do Wistia
function displayVideoProofs() {
    let videoContainer = document.createElement("div");
    videoContainer.innerHTML = `
        <script src="https://fast.wistia.com/player.js" async></script>
        <script src="https://fast.wistia.com/embed/38n82fs7br.js" async type="module"></script>
        <wistia-player media-id="38n82fs7br" seo="false" aspect="0.5625"></wistia-player>
    `;
    
    chatBox.appendChild(videoContainer);
    
    setTimeout(() => {
        displayMessage("E sabe o que todos eles têm em comum?");
        displayMessage("Todos utilizaram o Chá da Reconstrução da Barreira Ácida!", false, ["Sim! EU quero!"]);
    }, 4000);
}

// Função para exibir o checkout no final
function displayCheckout() {
    setTimeout(() => {
        let checkoutDiv = document.createElement("div");
        checkoutDiv.classList.add("checkout-box");
        checkoutDiv.innerHTML = `
            🔥 <b>De R$ 197,00 por apenas R$ 10,00!</b> 🔥<br>
            <a href="https://seusite.com/checkout" class="button-response">Ir para o Checkout</a>
        `;
        chatBox.appendChild(checkoutDiv);
    }, 4000);
}

// Iniciar o chat
function startChat() {
    displayMessage("Olá, tudo bem? É um prazer ter você aqui!");
    setTimeout(() => {
        displayMessage("Meu nome é Roberto Nóbrega.");
        displayMessage("Sou especialista em Gastrite e Saúde Digestiva.");
        displayMessage("Você gostaria de receber a receita do Chá da Reconstrução da Barreira Ácida?", false, ["Sim! Sem dúvidas!"]);
    }, 4000);
}

startChat();
