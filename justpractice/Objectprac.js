// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
// };

// // console.log(Object.keys(data));

// // let update1 = Object.keys(data);
// // let update2 = Object.values(data);

// // let data2 = update1.map((key, index) => {
// //   return [key, update2[index]];
// // });
// // console.log(data2);

// let ans = Object.entries(data);
// console.log(ans);

// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
// };

// let {age,...ans}=data;
// console.log(ans)
// delete data.age;
// console.log(data)

// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
//   email: "abc@gmaiul.com",
// };

// console.log("email" in data);
// console.log(data.hasOwnProperty("email"));

//or--------------------------

// let exists = Object.keys(data).reduce((acc, key) => {
//   if (key === "email") {
//     return true;
//   }
//   return acc;
// }, false);

// console.log(exists);

// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
//   email: "abc@gmaiul.com",
// };

// console.log(Object.keys(data).length)

// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
//   email: "abc@gmaiul.com",
//   rollno: 123,
// };

// let data2 = {
//   age: 20,
//   employe: "okjhgfd",
// };

// for(let key in data){
//     console.log(key)
// }

// for (let key in data) {
//   console.log(key,":", data[key]);
// }

// let ans=Object.entries(data);
// console.log(ans)

// let update={...data};
// console.log(update)

// let updated={...data,...data2};
// console.log(updated)

// let update=Object.assign({},data,data2);
// console.log(update)

// console.log(Object.keys(data).length===0)

// function printt(data) {
//     console.log(data)
// }
// printt(data);

// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
//   email: "abc@gmaiul.com",
//   rollno: 123,
//   id: 4,

// };
// let ans = Object.values(data).reduce((acc, curr) => {
//   if (typeof curr === "number") {
//     return acc + curr;
//   }
//   return acc;
// }, 0);

// console.log(ans);

// let data = {
//   name: "hemant",
//   age: 20,
//   employe: "regex",
//   email: "abc@gmail.com",
//   address: {
//     city: "Jaipur",
//     state: "Rajasthan",
//     pincode: 302001,
//   },
//   skills: {
//     frontend: ["HTML", "CSS", "JS"],
//     backend: {
//       language: "Node.js",
//       database: "MongoDB",
//     },
//   },
// };

// let ans = {
//   ...data,
//   ...data.skills,
//   ...data.skills.backend,
//   language: data.skills.backend.language ?? "JS",
// };
// console.log(ans);

//------------optional chaining---------------------
// console.log(data?.skills?.backend?.language);

// Object.freeze sirf single level pe kaam krta h ye sirf top-level object freeze karta hai nested nhi krta

// Object.freeze(data);
// data.name = "okkkk";
// console.log(data);
// console.log(Object.isFrozen(data))// ye check krta h ki freeze h ya nhi

// Object.seal(data);
// data.name = "okkkk";
// console.log(data);
// console.log(Object.isSealed(data))

// let data = {
//   name: "Hemant",
//   age: 20,
// };

// console.log(Object.isExtensible(data)); // true ✅

// Object.preventExtensions(data); // ab data me naye properties add nahi kar sakte
// console.log(Object.isExtensible(data)); // false ❌

// let obj = {
//   name: "react",
//   age: 25,
// };

// let obj2 = {
//   name: "fghjk",
//   age: 25,
// };

// let ans = Object.assign({}, obj, obj2);
// let ans={...obj,...obj2}
// console.log(ans);

// let obj = {
//   name: "react",
//   age: 25,
// };

// let ans = { ...obj };
// ans.name = "ghjkl";
// console.log(ans);
// console.log(obj);

// let arr = [
//   { name: "react", age: 25 },
//   { area: "fghj", no: 54 },
// ];
// // let ans = arr.reduce((acc, curr) => {
// //   return { ...acc, ...curr };
// // }, {});

// let ans = arr.reduce((acc, curr) => {
//   Object.assign(acc, curr); // acc me curr ki properties add
//   return acc;
// }, {});

// console.log(ans);

// const obj = { name: "abc", age: 25 };

// const queryString = new URLSearchParams(obj).toString();
// console.log(queryString);

// let obj = {
//   name: "react",
//   age: 25,
// };
// let ans = { ...obj, fullname: obj.name };
// console.log(ans);
//--------------or-------------

// obj.fullname = obj.name;
// delete obj.name;
// console.log(obj);

let obj = {
  name: "react",
  age: 25,
  val: null,
  abc: undefined,
};


let ans = Object.fromEntries(obj).filter(value => value !== null && value !== undefined);

console.log(ans);
