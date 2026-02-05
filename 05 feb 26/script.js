document.addEventListener("visibilitychange", (e) => {
  if (document.hidden) {
    e.preventDefault();
    alert("New Tab activity detected!!");
  }
});
