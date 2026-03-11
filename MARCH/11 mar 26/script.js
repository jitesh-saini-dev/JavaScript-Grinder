// 5. EdTech – Sort students by grades (highest first)

// const students = [
//   { name: "Aarav", grade: 85 },
//   { name: "Ria", grade: 95 }
// ];
// let ans = students.sort((a, b) => b.grade - a.grade);
// console.log(ans)

// const tasks = [
//   { task: "Code", completed: true },
//   { task: "Gym", completed: false },
//   { task: "Milk", completed: false },
// ];

// let ans = tasks.sort((a, b) => {
//   if (a.completed == b.completed) return a.task.localeCompare(b.task);
//   return a.completed - b.completed;
// });
// console.log(ans);

// const students = [
//   { name: "Zoya", marks: 85 },
//   { name: "Rahul", marks: 92 },
//   { name: "Aman", marks: 78 },
// ];
// let ans = students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(ans);

// const results = [
//   { name: "Amit", grade: "B", marks: 70 },
//   { name: "Priya", grade: "A", marks: 95 },
//   { name: "Suman", grade: "B", marks: 85 },
// ];

// let ans = results.sort((a, b) => {
//   if (a.grade == b.grade) return b.marks - a.marks;
//   return a.grade.localeCompare(b.grade);
// });
// console.log(ans);

// const laptops = [
//   { brand: "Dell", specs: { ram: 16 } },
//   { brand: "HP", specs: { ram: 8 } },
//   { brand: "Apple", specs: { ram: 32 } }
// ];

// let ans =laptops.sort((a,b)=>a.specs.ram-b.specs.ram);
// console.log(ans)

const versions = ["1.10.2", "1.2.1", "2.0.1", "1.0.5", "1.10.10"];
// Expected: ["1.0.5", "1.2.1", "1.10.2", "1.10.10", "2.0.1"]

let ans=versions.sort((a,b)=>a.localeCompare(b));
console.log(ans)  