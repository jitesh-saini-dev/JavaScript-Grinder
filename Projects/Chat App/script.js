let usernamehtml = document.getElementById("username");
let goonlinebtnhtml = document.getElementById("goonline");
let goofflinebtnhtml = document.getElementById("gooffline");
let sendbtnhtml = document.getElementById("send");
let messagehtml = document.getElementById("message");
let searchhtml = document.getElementById("search");

function chatSession(username) {
  let isOnline = false;
  let isTyping = false;
  let messageCount = 0;

  usernamehtml.innerHTML = `<div class="user" id="username">${username} </div>`;

  function log(text) {
    console.log(`[LOG]: ${text}`);
    messagehtml.innerHTML += text + `<br/>`;
  }

  return {
    goOnline() {
      isOnline = true;
      isTyping = false;
      log(`${username} is online`);
    },

    goOffline() {
      isOnline = false;
      isTyping = false;
      log(`${username} is offline`);
    },

    startTyping() {
      if (!isOnline) {
        log(`Cannot start typing. ${username} is offline.`);
        return;
      }
      if (isTyping) return;

      isTyping = true;
      log(`${username} is typing...`);
    },

    stopTyping() {
      if (!isTyping) return;

      isTyping = false;
      log(`${username} stopped typing`);
    },

    sendMessage(message) {
      if (!isOnline) {
        log(`Cannot send message. ${username} is offline.`);
        return;
      }

      if (isTyping) {
        log(`Cannot send message while typing.`);
        return;
      }
      if (message.trim().length === 0) {
        log(`Empty message not sent.`);
        return;
      }

      if (!message) {
        log(`Empty message not sent.`);
        return;
      }

      messageCount++;
      log(`${username} sent: ${message}`);
      log(`Total messages sent: ${messageCount}`);
    },

    getStatus() {
      return {
        username,
        isOnline,
        isTyping,
        messageCount,
      };
    },
  };
}
let usernameprom = prompt("Enter your username:");
let Ans = chatSession(usernameprom);

goonlinebtnhtml.addEventListener("click", () => {
  console.log("go Online btn is clicked");
  Ans.goOnline();
});

goofflinebtnhtml.addEventListener("click", () => {
  console.log("go Offline btn is clicked");
  Ans.goOffline();
});

searchhtml.addEventListener("focus", () => {
  Ans.startTyping();
});

searchhtml.addEventListener("blur", () => {
  Ans.stopTyping();
});

sendbtnhtml.addEventListener("click", () => {
  Ans.sendMessage(searchhtml.value);
  searchhtml.value = "";
});
