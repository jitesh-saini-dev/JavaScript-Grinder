const product = {
  name: "prajjal",
  age: 20,
  address: "Jaipur",
};
// const keys = Object.keys(product); //object keys ==> array format
// console.log(keys);

// const values = Object.values(product);
// console.log(values);

const data = Object.entries(product); //object =>2d
console.log(data);

const res = data.map(([key, value]) => [value, key]); //swap
console.log(res);

const newdata = Object.fromEntries(res); //2d =>obj
console.log(newdata);
// const data = ["name", "prajjal"];
// const [a, b] = data;
// console.log(a);
// console.log(b);
// let num1 = 5;
// let num2 = 6;
// console.log(num1);
// console.log(num2);
// //swap

// [num2, num1] = [num1, num2];
// console.log(num1);
// console.log(num2);