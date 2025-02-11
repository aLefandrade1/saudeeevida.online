const chatBox = document.getElementById("chat-box");
const typingIndicator = document.getElementById("typing-indicator");
const userInputContainer = document.getElementById("age-input-container");
const userInput = document.getElementById("user-input");
const sendAgeBtn = document.getElementById("send-age-btn");

// Exibir mensagens com delay
function displayMessage(text, isUser = false, buttons = [], delay = 4000) {
    typingIndicator.style.display = "block";

    setTimeout(() => {
        typingIndicator.style.display = "none";

        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", isUser ? "user" : "specialist");
        messageDiv.innerText = text;
        chatBox.appendChild(messageDiv);

        if (buttons.length > 0) {
            setTimeout(() => {
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
            }, 4000);
        }

        chatBox.scrollTop = chatBox.scrollHeight;
    }, delay);
}

// Pergunta de idade aceita digitação antes de continuar
function askAge() {
    displayMessage("Quantos anos você tem? Digite abaixo.", false, [], 4000);

    setTimeout(() => {
        userInputContainer.style.display = "flex";  // Exibe o campo e o botão

        sendAgeBtn.onclick = function () {
            let age = userInput.value.trim();
            if (age !== "") {
                displayMessage(`Você: ${age} anos`, true);
                userInput.value = "";
                userInputContainer.style.display = "none"; // Esconde o campo e o botão

                setTimeout(() => {
                    displayMessage("Qual seu peso aproximado?", false, [
                        "Até 60 Kg",
                        "Entre 61Kg e 70Kg",
                        "Entre 71Kg e 90 Kg",
                        "Mais de 90Kg"
                    ]);
                }, 4000);
            }
        };
    }, 4000);
}

// Fluxo do Funil
function handleResponse(response) {
    displayMessage(response, true);

    setTimeout(() => {
        switch (response) {
            case "Sim! Sem dúvidas!":
                displayMessage("Perfeito! Vamos começar sua receita personalizada.", false, [], 4000);
                setTimeout(() => {
                    displayMessage("Qual é o principal problema que você deseja resolver?", false, [
                        "Aliviar as dores no estômago",
                        "Eliminar a queimação e o desconforto",
                        "Melhorar a digestão e comer sem medo",
                        "Prevenir complicações graves"
                    ], 4000);
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
                ], 4000);
                break;

            case "Uma semana":
            case "Mais de um mês":
            case "Mais de um ano":
                askAge();
                break;

            case "Até 60 Kg":
            case "Entre 61Kg e 70Kg":
            case "Entre 71Kg e 90 Kg":
            case "Mais de 90Kg":
                displayMessage("Acabei de analisar suas respostas e vou deixar o diagnóstico personalizado logo abaixo!", false, [], 4000);
                setTimeout(() => {
                    displayMessage("⚠️ Nível Elevado! Ignorar os cuidados com a gastrite pode ser perigoso.", false, [], 4000);
                    setTimeout(() => {
                        displayMessage("Veja os riscos para sua saúde:", false, [], 4000);
                        displayMessage("✅ Úlceras Gástricas: Pode causar dores intensas.", false, [], 4000);
                        displayMessage("✅ Sangramento Interno: Pode colocar sua saúde em risco.", false, [], 4000);
                        displayMessage("✅ Impacto na Qualidade de Vida: A dor constante afeta seu bem-estar.", false, [], 4000);
                        
                        setTimeout(() => {
                            displayMessage("Para o seu caso, tem solução e é mais fácil do que você pensa!", false, [], 4000);
                            displayMessage("Veja essa paciente que também está se tratando com o Chá da Reconstrução:", false, [], 4000);
                            displayVideoProofs();
                        }, 4000);
                    }, 4000);
                }, 4000);
                break;

            case "Sim! EU quero!":
                displayCheckout();
                break;
        }
    }, 4000);
}

// Função para exibir os vídeos do Wistia no chat
function displayVideoProofs() {
    setTimeout(() => {
        let video1 = document.createElement("div");
        video1.innerHTML = `
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/38n82fs7br.js" async type="module"></script>
            <style>wistia-player[media-id='38n82fs7br']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/38n82fs7br/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style>
            <wistia-player media-id="38n82fs7br" seo="false" aspect="0.5625"></wistia-player>
        `;
        chatBox.appendChild(video1);
    }, 4000);

    setTimeout(() => {
        let video2 = document.createElement("div");
        video2.innerHTML = `
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/y6s61jiyyr.js" async type="module"></script>
            <style>wistia-player[media-id='y6s61jiyyr']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/y6s61jiyyr/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style>
            <wistia-player media-id="y6s61jiyyr" seo="false" aspect="0.5625"></wistia-player>
        `;
        chatBox.appendChild(video2);
    }, 8000);
}

// Iniciar o chat com delay correto
function startChat() {
    displayMessage("Olá, tudo bem? É um prazer ter você aqui!", false, [], 4000);
    setTimeout(() => {
        displayMessage("Meu nome é Roberto Nóbrega.", false, [], 4000);
        displayMessage("Sou especialista em Gastrite e Saúde Digestiva.", false, [], 4000);
        displayMessage("Você gostaria de receber a receita do Chá da Reconstrução da Barreira Ácida?", false, ["Sim! Sem dúvidas!"], 4000);
    }, 4000);
}

startChat();
