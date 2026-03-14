
let updated1 = {
  isLoggedIn: !state.isLoggedIn,
  theme: state.theme === "dark" ? "white" : "dark",
};
let updated2 = {
  isLoggedIn: !updated1.isLoggedIn,
  theme: updated1.theme === "dark" ? "white" : "dark",
};
console.log(state);
console.log(updated1);
console.log(updated2);
