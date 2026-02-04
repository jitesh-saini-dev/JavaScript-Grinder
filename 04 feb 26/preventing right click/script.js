// let securetab = document.getElementById("securetab"); 

// securetab.addEventListener("contextmenu", (e) => { 

//   e.preventDefault(); 

//   alert("Right Click is Disabled"); 

// }); 

window.oncontextmenu = (e) => {
  e.preventDefault();

  alert("Right Click is disabled, Please Refresh the page");
};
