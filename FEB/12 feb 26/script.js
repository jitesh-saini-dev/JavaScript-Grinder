// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 },
//   { id: 3, name: "Keyboard", qty: 2 },
//   { id: 4, name: "pendrive", qty: 2 },
//   { id: 5, name: "tablet", qty: 2 },
// ];

// const productId = 3;
// const newQty = 5;

// let updatedCart = [];

// cart.forEach((x) => {
//   if (x.id === productId) {
//     let ans = {
//       ...x,

//       qty: newQty,
//     };

//     updatedCart.push(ans);
//   } else {
//     updatedCart.push(x);
//   }
// });

// console.log(cart);

// console.log(updatedCart);

//making it optimal----------------------
//ye thoda buggy h mtlb thoda bda code h toh iske if else ko hm Ternary se replace kr skte h

// const cart = [
//   { id: 1, name: "Laptop", qty: 1 },
//   { id: 2, name: "Mouse", qty: 2 },
//   { id: 3, name: "Keyboard", qty: 2 },
//   { id: 4, name: "pendrive", qty: 2 },
//   { id: 5, name: "tablet", qty: 2 },
// ];

// const productId = 3;
// const newQty = 5;

// let updatedCart = [];

// cart.forEach((x) => {
//   x.id === productId
//     ? updatedCart.push({ ...x, qty: newQty })
//     : updatedCart.push(x);
// });

// console.log(cart);
// console.log(updatedCart);

//more optimal with map --------------
//map new array return krta hai
const cart = [
  { id: 1, name: "Laptop", qty: 1 },
  { id: 2, name: "Mouse", qty: 2 },
  { id: 3, name: "Keyboard", qty: 2 },
  { id: 4, name: "pendrive", qty: 2 },
  { id: 5, name: "tablet", qty: 2 },
];

const productId = 3;
const newQty = 5;

let updatedCart = cart.map((x) =>
  x.id === productId ? { ...x, qty: newQty } : x,
);

console.log(cart);
console.log(updatedCart);
