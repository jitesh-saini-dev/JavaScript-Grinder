// let person = {
//   //object
//   name: "jsk",
//   age: 21,
//   address: "jaipur",
//   "person date of birth": 85854185585,
//   1: 86,
//   1: 55,
//   2: 78,
//   skills: [//array
//     "js",
//     "py",
//     "cpp",
//     { //object
//       skillname: "js",
//       skillscore: 45,
//     },
//   ], //object of arrayf
// };
// //ye poora json h

// console.log(person);
// console.log(person.name);
// console.log(person["name"]);
// // console.log(person.person date of birth);//not access bcz only get first letter person.person mean after space not get the valueof key
// console.log(person["person date of birth"]);
// console.log(person[1]);
// console.log(person[1]); //overrideff
// console.log(person[2]);
// console.log(person.skills);
// console.log(person.skills[0]);

//--------------------------------------------

//ek function k andr ek array pass krna h usme empty array hoga
//agar array complete pass kiya h toh 2nd index return krana h nhi toh 3rd index.

function abc(arr) {
  // if(arr.isArray()){
  //     return true;
  // }
  // else return false;

  if (arr === undefined) {
    let arr = [1, 3, 4, 5, 3];
    return arr[1];
  }
  if (arr.length === 0) {
    let arr = [7, 8, 9, 10];
    return arr[3];
  }
//   return arr[2];
  if (arr[2] === undefined) {
    return "not exist arr[2]";
  } else {
    return arr[2];
  }
}
console.log(abc([]));
console.log(abc([1, 2, 3, 4]));
console.log(abc());
console.log(abc([1]));
