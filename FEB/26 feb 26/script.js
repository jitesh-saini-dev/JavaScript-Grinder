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

// const users = [
//   { id: 1, name: "Rahul", age: 25, role: "Dev", active: true },
//   { id: 2, name: "Amit", age: 28, role: "Tester", active: false },
//   { id: 3, name: "Neha", age: 24, role: "HR", active: true },
//   { id: 4, name: "Riya", age: 26, role: "Dev", active: true },
//   { id: 5, name: "Karan", age: 30, role: "Manager", active: false },
//   { id: 6, name: "Ajay", age: 28, role: "Tester", active: false },
//   { id: 7, name: "Raghav", age: 30, role: "Manager", active: false },
// ];

// let ans = users.reduce((acc, user) => {
//   acc[user.role] = [...(acc[user.role] ?? []), user];
//   return acc;
// }, {});
// console.log(ans);

//Q2-------------------------------------------------------


// const names = ["abhay", "prajjal", "rajaram", "kishan"];
//  const vowel= "aeiouAEIOU";
// let ans = names.reduce((acc, x) => {

//    acc[x] = [x.split("").filter(ch => vowel.includes(ch)).length,x.split("").filter(ch => !vowel.includes(ch)).length] ;
 
//   return acc;

// }, {});

// console.log(ans);


//Q3-------------------------------------------------------


// const names = ["abhay", "prajjal", "rajaram", "kishan"];
//  const vowel= "aeiouAEIOU";
// let ans = names.reduce((acc, x) => {

//    acc[x] = {"v":x.split("").filter(ch => vowel.includes(ch)).length,
//     "c":x.split("").filter(ch => !vowel.includes(ch)).length
//   } ;
 
//   return acc;

// }, {});

// console.log(ans);

//Q4


const names = ["abhay", "prajjal", "rajaram", "kishan"];
 const vowel= "aeiouAEIOU";
let ans = names.reduce((acc, x) => {

   acc[x] = [...x].reduce((acc,x) => {
    acc[x]= (acc[x]|| 0 ) +1;

    return acc;
   },{});
 
  return acc;

}, {});

console.log(ans);