const socket = io("http://localhost:3000"); 

const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");
const usernameInput = document.getElementById("username");

sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  const username = usernameInput.value || "Anonymous";

  if (message.trim() !== "") {
    socket.emit("chatMessage", { username, message });
    messageInput.value = "";
  }
});

socket.on("chatMessage", (data) => {
  const msgElement = document.createElement("div");
  msgElement.classList.add("message");
  msgElement.innerText = `${data.username}: ${data.message}`;
  messages.appendChild(msgElement);
  messages.scrollTop = messages.scrollHeight;
});
