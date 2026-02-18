// Set is a collection of unique values. It can be used to store any type of values, whether primitive or object references. The main advantage of using a Set is that it automatically removes duplicate values, ensuring that each value is stored only once.

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [4, 8, 9, 45, 2];
// let arr3 = [...new Set([...arr, ...arr2])];
// console.log(arr3);

//---------------------------------------------------

let cart = {
  id: 101,
  name: "Jitesh",
  role: "developer",
};

let bill = {
  OrderId: 101,
  ProdunctName: "Mern Stack",
  Price: 4000000,
};

const isPurchased = true;

let orderTable = {
  ...cart,
  ...(isPurchased && { bill }),
};

console.log(orderTable);
