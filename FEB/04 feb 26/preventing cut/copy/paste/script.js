//---------------Preventing copy using keyboard keys(ctrl+c)--------------------

// document.addEventListener("keydown",(e)=>{
//     if(e.ctrlKey && (e.key==='C' || e.key==='c')){
//         e.preventDefault();
//     }
// })

//-----------Another way to Preventing copy---------------

// document.addEventListener("copy", (e) => {
//   e.preventDefault();
//   alert("Don't try to copy!!");
//   return false;
// });

//----------Preventing cut---------------

// document.addEventListener("cut", (e) => {
//   e.preventDefault();
//   alert("Don't try to cut!!");
//   return false;
// });

//----------Preventing paste---------------

document.addEventListener("paste", (e) => {
  e.preventDefault();
  alert("Don't try to paste!!");
  return false;
});
