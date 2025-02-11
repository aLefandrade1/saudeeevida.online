const chatBox = document.getElementById("chat-box");
const typingIndicator = document.getElementById("typing-indicator");

// Função para exibir mensagens no chat
function displayMessage(text, isUser = false, buttons = []) {
    typingIndicator.style.display = "block";
    
    setTimeout(() => {
        typingIndicator.style.display = "none";

        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", isUser ? "user" : "specialist");
        messageDiv.innerText = text;
        chatBox.appendChild(messageDiv);

        // Se houver botões de resposta
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

// Funil de perguntas e respostas
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
                }, 2000);
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
                        }, 2000);
                    }
                };
                break;

            case "Até 60 Kg":
            case "Entre 61Kg e 70Kg":
            case "Entre 71Kg e 90 Kg":
            case "Mais de 90Kg":
                displayMessage("Acabei de analisar suas respostas e vou deixar o diagnóstico personalizado logo abaixo!");
                setTimeout(() => {
                    displayMessage("⚠️ Nível Elevado! Ignorar os cuidados com a gastrite pode ser extremamente perigoso.");
                    displayMessage("Veja os riscos para sua saúde que a gastrite pode causar:");
                    displayMessage("✅ Úlceras Gástricas: Pode causar dores intensas e complicações graves.");
                    displayMessage("✅ Sangramento Interno: Pode colocar sua saúde em risco.");
                    displayMessage("✅ Impacto na Qualidade de Vida: A dor constante afeta seu bem-estar.");
                    
                    setTimeout(() => {
                        displayMessage("Para o seu caso, tem solução e é mais fácil do que você pensa!");
                        displayMessage("Veja essa paciente que também está se tratando com o Chá da Reconstrução:", false);
                        displayVideoProofs();
                    }, 3000);
                }, 2000);
                break;

            case "Sim! EU quero!":
                displayCheckout();
                break;
        }
    }, 1500);
}

// Função para exibir vídeos de prova social
function displayVideoProofs() {
    let video1 = document.createElement("div");
    video1.innerHTML = `<script src="https://fast.wistia.com/embed/medias/SEU_VIDEO_ID_1.js" async></script>
                         <div class="wistia_embed wistia_async_SEU_VIDEO_ID_1" style="height:200px;width:100%">&nbsp;</div>`;
    chatBox.appendChild(video1);

    let video2 = document.createElement("div");
    video2.innerHTML = `<script src="https://fast.wistia.com/embed/medias/SEU_VIDEO_ID_2.js" async></script>
                         <div class="wistia_embed wistia_async_SEU_VIDEO_ID_2" style="height:200px;width:100%">&nbsp;</div>`;
    chatBox.appendChild(video2);

    setTimeout(() => {
        displayMessage("E sabe o que todos eles têm em comum?");
        displayMessage("Todos utilizaram o Chá da Reconstrução da Barreira Ácida para eliminar a gastrite!", false, ["Sim! EU quero!"]);
    }, 3000);
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
    }, 2000);
}

// Iniciar o chat
function startChat() {
    displayMessage("Olá, tudo bem? É um prazer ter você aqui!");
    setTimeout(() => {
        displayMessage("Meu nome é Roberto Nóbrega.");
        displayMessage("Sou especialista em Gastrite e Saúde Digestiva.");
        displayMessage("Você gostaria de receber a receita do Chá da Reconstrução da Barreira Ácida?", false, ["Sim! Sem dúvidas!"]);
    }, 2000);
}

startChat();
