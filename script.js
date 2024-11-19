let chatMessages = [
    "Oi! Como posso ajudar você hoje?",
    "Você já conheceu o trabalho do Mr. Loneliness?",
    "Se precisar de ajuda, estou por aqui!",
    "Você gostaria de saber mais sobre algum dos livros?",
    "Qual é o seu poema favorito?",
    "Ja viu alguma das pinturas? "
];

let messageCount = 0;

function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value;
    if (message) {
        addMessageToChat(`Você: ${message}`);
        input.value = "";
        if (messageCount < chatMessages.length) {
            addMessageToChat(`Voz misteriosa: ${chatMessages[messageCount]}`);
            messageCount++;
        }
    }
}

function addMessageToChat(message) {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p>${message}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function loadMoreMessages() {
    const chatBox = document.getElementById("chat-box");
    for (let i = 0; i < 3 && messageCount < chatMessages.length; i++) {
        addMessageToChat(`Bot: ${chatMessages[messageCount]}`);
        messageCount++;
    }
}
