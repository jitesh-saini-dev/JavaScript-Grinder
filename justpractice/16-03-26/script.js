// let obj = {
//   name: "Rohit",
//   age: null,
//   data: undefined,
//   course: "Mern",
// };

// let updated = Object.keys(obj).reduce((acc, key) => {
//   if (obj[key] != null) {   // null aur undefined dono remove
//     acc[key] = obj[key];
//   }
//   return acc;
// }, {});

// console.log(updated);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));