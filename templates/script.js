const input = document.querySelector("input");
const sendBtn = document.querySelector(".send");
const chat = document.querySelector(".chat-container");

function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  const userRow = document.createElement("div");
  userRow.classList.add("message-row", "user-row");

  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");
  userMessage.textContent = text;

  userRow.appendChild(userMessage);
  chat.appendChild(userRow);

  input.value = "";

  const botRow = document.createElement("div");
  botRow.classList.add("message-row", "bot-row");

  const botIcon = document.createElement("img");
  botIcon.src = "../../sources/images/Blinky 5.svg";
  botIcon.classList.add("bot-icon");

  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot");
  botMessage.textContent = "hi i am NEURAL";

  botRow.appendChild(botIcon);
  botRow.appendChild(botMessage);
  chat.appendChild(botRow);

  chat.scrollTop = chat.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
