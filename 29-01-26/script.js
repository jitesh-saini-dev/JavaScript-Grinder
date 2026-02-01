function ChatSession(username) {
  let isTyping = false;
  let isOnline = false;
  let messageCount = 0;

  return {
    goOnline: function () {
      if (isOnline) return;
      isOnline = true;
      isTyping = false;
      console.log(`${username} is online`);
    },

    goOffline: function () {
      if (!isOnline) return;
      isOnline = false;
      isTyping = false;
      console.log(`${username} is offline`);
    },

    startTyping: function () {
      if (!isOnline) {
        console.log(`Can not Start Typing..... ${username} is offline`);
        return;
      }

      if (isTyping) return;
      isTyping = true;
      console.log(`${username} is typing............`);
    },

    stopTyping: function () {
      if (!isTyping) return;
      isTyping = false;
      console.log(`${username} has stopped typing!`);
    },

    Sendmessage: function (message) {
      if (!isOnline) {
        console.log(`Cannot send message ${username} is offline`);
        return;
      }

      if (isTyping) {
        console.log(`Cannot send message while ${username} is typing.......`);
        return;
      }

      if (typeof message !== "string") {
        console.log("Message is not in proper string format");
        return;
      }

      if (message.trim().length === 0 || message.length === 0) {
        console.log("No Message to Send");
        return;
      }

      isTyping = false;
      messageCount++;
      console.log(`${username}: ${message}`);
    },

    checkStatus: function () {
      console.log(`user logged in as :${username}`);
      console.log(`IsTyping Status: ${isTyping}`);
      console.log("user status : " + (isOnline ? "Online" : "Offline"));
      console.log(`user has sent: ${messageCount} messages`);
    },
  };
}

let prajjal = ChatSession("Prajjal");
prajjal.checkStatus();
console.log("===========xxxxxxxxxxxxxxxxx================");
prajjal.startTyping();
console.log("===========xxxxxxxxxxxxxxxxx================");
prajjal.goOnline();
console.log("===========xxxxxxxxxxxxxxxxx================");
prajjal.goOnline();
console.log("===========xxxxxxxxxxxxxxxxx================");
prajjal.checkStatus();
prajjal.Sendmessage("                               ");
console.log("===========xxxxxxxxxxxxxxxxx================");
prajjal.startTyping();
prajjal.stopTyping();
prajjal.Sendmessage("hello buddy");
prajjal.checkStatus();
prajjal.goOffline();
prajjal.checkStatus();
prajjal.startTyping();
prajjal.checkStatus();
prajjal.goOnline();
prajjal.startTyping();
prajjal.checkStatus();
