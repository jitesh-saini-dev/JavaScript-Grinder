// {
//     6:["kishan"],
//     7:["prajjal","rajaram"]
//     5:["abhay"],
// }

// { prajjal:[2,5], abhay:[0,3] }
// { prajjal:2, rajaram:2 }

// {
//     abhay:{v:2,c:3},
//     rajaram:{v:3,c:4},
//     kishan:{v:2,c:4}
//     prajjal:{v:2,c:5},
// }

// {
//     abhay:[],
//     rajaram:["a","r"],
//     kishan:[]
//     prajjal:["j","a"],
// }

// { prajjal:"PRAJJAL", abhay:"ABHAY", rajaram:"RAJARAM", kishan:"KISHAN" }
// { prajjal:"l", abhay:"y", rajaram:"m", kishan:"n" }

// const users = ["prajjal", "rohit", "ram"];

// 👉 Convert into:

// {
//     rohit: ["R","O","H","I","T"],
//     ram: ["R","A","M"]
//     prajjal: ["P","R","A","J","J","A","L"],
// }

// const users = ["prajjal", "rohit", "ram"];

// const result = users.reduce((acc, x) => {
//   acc[x] = x.toUpperCase().split("");
//   return acc;
// }, {});

// console.log(result);

// const emails = ["amit@gmail.com", "ravi@yahoo.com"];
// convert into:
// {
//    amit:"amit@gmail.com",
//    ravi:"ravi@yahoo.com"
// }

// const emails = ["amit@gmail.com", "ravi@yahoo.com"];

// const result = emails.reduce((acc, x) => {
//   const name = x.split("@")[0];
//   acc[name] = x;
//   return acc;
// }, {});
// console.log(result);

// const words = ["cat", "dog"];
// 👉 Output:
// {
//     cat: { c:1, a:1, t:1 },
//     dog: { d:1, o:1, g:1 }
// }

// 6️⃣5️⃣ Remove User by ID (Immutable)
// const users = [
//   { id:1, name:"Rahul", age:25, role:"Dev", active:true },
//   { id:2, name:"Amit", age:28, role:"Tester", active:false },
//   { id:3, name:"Neha", age:24, role:"HR", active:true },
//   { id:4, name:"Riya", age:26, role:"Dev", active:true },
//   { id:5, name:"Karan", age:30, role:"Manager", active:false }
// ];

// const idToRemove = 2;

// 👉 Check for id if present then remove immutably.
// const users = [
//   { id: 1, name: "Rahul", age: 25, role: "Dev", active: true },
//   { id: 2, name: "Amit", age: 28, role: "Tester", active: false },
//   { id: 3, name: "Neha", age: 24, role: "HR", active: true },
//   { id: 4, name: "Riya", age: 26, role: "Dev", active: true },
//   { id: 5, name: "Karan", age: 30, role: "Manager", active: false },
// ];

// const idToRemove = 2;

// let updated = users.filter((x) => x.id !== idToRemove);
// console.log(updated);

//--------------------------------------------------------------------
// role based collection:

// const users = [
//   { id: 1, name: "Rahul", age: 25, role: "Dev", active: true },
//   { id: 2, name: "Amit", age: 28, role: "Tester", active: false },
//   { id: 3, name: "Neha", age: 24, role: "HR", active: true },
//   { id: 4, name: "Riya", age: 26, role: "Dev", active: true },
//   { id: 5, name: "Karan", age: 30, role: "Manager", active: false },
// ];

//output be like--
// {
//     Dev: [{},{}],
//     Tester:[{},{}],
//     HR:[{},{}],
//     Manager:[{},{}]
// }

const users = [
  { id: 1, name: "Rahul", age: 25, role: "Dev", active: true },
  { id: 2, name: "Amit", age: 28, role: "Tester", active: false },
  { id: 3, name: "Neha", age: 24, role: "HR", active: true },
  { id: 4, name: "Riya", age: 26, role: "Dev", active: true },
  { id: 5, name: "Karan", age: 30, role: "Manager", active: false },
  { id: 6, name: "Ajay", age: 28, role: "Tester", active: false },
  { id: 7, name: "Raghav", age: 30, role: "Manager", active: false },
];

let ans = users.reduce((acc, user) => {
  acc[user.role] = [...(acc[user.role] ?? []), user];
  return acc;
}, {});

console.log(ans);
