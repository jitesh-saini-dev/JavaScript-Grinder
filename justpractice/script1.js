function ChatSession(username) {
  // private state (closure)
  let isOnline = false;
  let isTyping = false;
  let messageCount = 0;

  return {
    goOnline: function () {
      isOnline = true;
      isTyping = false;
      console.log(`${username} is online`);
    },

    goOffline: function () {
      isOnline = false;
      isTyping = false;
      console.log(`${username} is offline`);
    },

    startTyping: function () {
      if (!isOnline) {
        console.log(`Cannot start typing. ${username} is offline.`);
        return;
      }
      if (isTyping) return;

      isTyping = true;
      console.log(`${username} is typing...`);
    },

    stopTyping: function () {
      if (!isTyping) return;

      isTyping = false;
      console.log(`${username} stopped typing`);
    },

    SendMessage: function (message) {
      if (!isOnline) {
        console.log(`Cannot send message. ${username} is offline.`);
        return;
      }

      if (isTyping) {
        console.log(`Cannot send message while typing.`);
        return;
      }

      messageCount++;
      console.log(`${username} sent: ${message}`);
      console.log(`Total messages sent: ${messageCount}`);
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
