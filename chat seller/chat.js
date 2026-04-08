function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + input.value;
  chatBox.appendChild(userMsg);

  setTimeout(() => {
    const reply = document.createElement("div");
    reply.textContent = "Seller: Available 👍";
    chatBox.appendChild(reply);
  }, 800);

  input.value = "";
}