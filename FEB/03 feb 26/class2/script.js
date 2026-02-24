const button = document.getElementById("printmessage");
let message = document.getElementById("message");
function printmsg(msg) {
  message.innerText = msg;
}
// button.addEventListener("click", printmsg);
// printmsg("hello from js");
// printmsg("Karan is fighting");
button.addEventListener("click", () => {
  printmsg("button is pressed");
});