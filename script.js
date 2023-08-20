const messageBox = document.getElementById("message-box");
const inputMessage = document.getElementById("input-message");
const sendButton = document.getElementById("send-button");

const socket = new WebSocket("wss://Hmmm.herokuapp.com");

socket.addEventListener("open", () => {
    console.log("Connected to server");
});

socket.addEventListener("message", (event) => {
    const message = event.data;
    messageBox.innerHTML += `<p>${message}</p>`;
    messageBox.scrollTop = messageBox.scrollHeight;
});

sendButton.addEventListener("click", () => {
    const message = inputMessage.value;
    socket.send(message);
    inputMessage.value = "";
});
