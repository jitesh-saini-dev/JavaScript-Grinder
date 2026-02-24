let usernamehtml = document.getElementById("username");
let goOnlinebtnhtml = document.getElementById("goOnline");
let goOfflinebtnhtml = document.getElementById("goOffline");
let contentmsghtml = document.getElementById("contentmsg");
let inputboxmsgcontenthtml = document.getElementById("msgcontent");
let sendbtnhtml = document.getElementById("sendbtn");
// state variables
function chatSession(username) {
  let isOnline = false;
  let isTyping = false;
  let messageCount = 0;

  usernamehtml.innerHTML = `<div class="flex justify-center bg-red-500 h-10 w-80">
          <h2 class="text-center text-white mb-3 text-2xl">
            UserName : ${username}
          </h2>
        </div>`;

  function log(message) {
    console.log(`[LOG]: ${message}`);
    contentmsghtml.innerHTML += message + `<br/>`;
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
let Ajay = chatSession("Ajay");

goOnlinebtnhtml.addEventListener("click", () => {
  console.log("go Online btn is clicked");
  Ajay.goOnline();
});

goOfflinebtnhtml.addEventListener("click", () => {
  console.log("go Offline btn is clicked");
  Ajay.goOffline();
});

inputboxmsgcontenthtml.addEventListener("focus", () => {
  Ajay.startTyping();
});

inputboxmsgcontenthtml.addEventListener("blur", () => {
  Ajay.stopTyping();
});

sendbtnhtml.addEventListener("click", () => {
  Ajay.sendMessage(inputboxmsgcontenthtml.value);
});
