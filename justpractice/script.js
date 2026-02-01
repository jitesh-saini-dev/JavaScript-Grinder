function ChatSession(username) {
  let isonline = false;
  let istyping = false;
  let messageCount = 0;
  return {
    goOnline: function () {
      if (isonline) return;
      isonline = true;
      istyping = false;
      console.log(`${username} is online now.`);
    },
    goOffline: function () {
      if (!isonline) return;
      isonline = false;
      istyping = false;
      console.log(`${username} is offline now.`);
    },
    starttyping: function () {
      if (!isonline) {
        console.log("You are offline u can not type!!");
        return;
      }
      if (istyping) return;
      istyping = true;
      console.log(`${username} is typing...`);
    },
    stoptyping: function () {
      if (!istyping) return;
      istyping = false;
      console.log(`${username} has Stopped typing.`);
    },
    sendMessages: function (message) {
      if (!isonline) {
        console.log("You are offline u can not Send Messages!!");
        return;
      }
      if (istyping) {
        console.log(`${username} is typing can't send messages.`);
        return;
      }

      if (typeof message !== "string") {
        console.log("Your message has not proper string format type.");
        return;
      }

      messageCount++;
      console.log(`${username} sent: ${message}`);
      console.log(`${username} has sent: ${messageCount} messages.`);
    },
    CheckStatus: function () {
      console.log(`Username is: ${username}`);
      console.log("User status: " + (isonline ? "Online" : "Offline"));
      console.log(`User is typing : ${istyping}`);
      console.log(`user has sent: ${messageCount} messages`);
    },
  };
}
let prajjal = ChatSession("prajjal");
prajjal.goOnline();
prajjal.goOffline();
prajjal.starttyping();
prajjal.goOnline();
prajjal.starttyping();
prajjal.stoptyping();
prajjal.starttyping();
prajjal.stoptyping();

prajjal.sendMessages("hloo");
prajjal.sendMessages("hloo");
prajjal.sendMessages("hloo");
prajjal.sendMessages("hloo");
prajjal.sendMessages("hloo");
console.log("---------------------------------------------");

prajjal.CheckStatus();
