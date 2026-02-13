// 5️⃣ Redux Style – Toggle Boolean
// const state = {
//   isLoggedIn: false,
//   theme: "dark"
// };
// 👉 Return new state where isLoggedIn is toggled using spread operator.

// const state = {
//   isLoggedIn: false,
//   theme: "dark",
// };

// let updatedData = {
//   ...state,
//   isLoggedIn: true,
//   theme: "white",
// };

// console.log(state);
// console.log(updatedData);

//--------------------------
const state = {
  isLoggedIn: false,
  theme: "dark",
};

newState1 = {
  isLoggedIn: !state.isLoggedIn,
  theme: state.theme === "dark" ? "light" : "dark",
};

console.log(state);
console.log(updatedData);
