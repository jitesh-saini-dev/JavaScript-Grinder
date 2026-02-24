window.oncontextmenu = (e) => {
  e.preventDefault();

  alert("Right Click is disabled, Please Refresh the page");
};

document.addEventListener("keydown", (e) => {
  // if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {

  //   e.preventDefault();

  //   alert("Violating the web rules");

  //   return false;

  // }

  e.preventDefault(); //isse sari keys bhi disabled ho jygi...

  alert("keys are disabled");

  return;
});
