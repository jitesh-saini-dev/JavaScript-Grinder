//---------clouser----------------

// function outer(count){
//     return function inner(){
//         return ++count;
//     }
// };

// let c=outer(0);
// let ans1=c();
// console.log(ans1);//1

// let ans2=c();
// console.log(ans2);//2

//----------------returning function-------------

//------1.function se number return karna--------

// function abc(){
//     return 5;
// }
// let ans = abc();
// console.log(ans);

//------2.function se string return karna--------

// function abc(){
//     return `its a string`;
// }
// let ans = abc();
// console.log(ans);

//------3.function se mixture of string and number return karna--------

// function abc(name, age) {
//   return `I'm ${name} & i'm ${age} years old.`;
// }
// function abc(name="xyz", age="xxx") {//default arguments
//   return `I'm ${name} & i'm ${age} years old.`;
// }
// let ans = abc();
// let ans1 = abc("jsk");
// let ans3 = abc("jsk", 22);
// let ans4 = abc("_", 22); //dummy variable bhejna

// console.log(ans);
// console.log(ans1);
// console.log(ans3);
// console.log(ans4);

// ARguments hmesha Positional way me hi jane chiye asa nhi ki ek ko chodkr dusra de diya  mtlb sbhi argument jaye

// ------------JAVASCRIPT FAULT--------------

// function abc(name = "xyz", age = "xxx") {
//   //default arguments
//   return `I'm ${name} & i'm ${age} years old.`;
// }
// let ans = abc(45,45);//name me 45 number bhi accept kr liya bcz ye user ko priority de rha h yha vse ye error h pr js ise accept krti h
// console.log(ans);

//------4.function ko boolean value pass karna--------

// function abc(IsToggle) {
//   if (!IsToggle) {
//     console.log("bulb is ON");
//   } else {
//     console.log("Bulb is OFF");
//   }
// }
// abc(true);
// abc(false);

// passing array to the function:
//array ==> hetrogenius

//             0       1       2       3       4
// let fruits = ["mango", "apple", "banana", "grapes", "kiwi"];
// function abc(fruits) {
//     return fruits[3];
// }

// let ans=abc(["mango", "apple", "banana", "grapes", "kiwi"])
// console.log(ans);

//2nd element return--

// function abc(fruits) {
//     return fruits[1];
// }

// let ans=abc(["mango", "apple", "banana", "grapes", "kiwi"])
// console.log(ans);

//return last element--

// function abc(fruits) {
//   return fruits[(fruits.length - 1)];
// }
// let ans=abc(["mango", "apple", "banana", "grapes", "kiwi"])
// console.log(ans);

//return first element--
// function abc(fruits) {
//   return fruits[0];
// }
// let ans=abc(["mango", "apple", "banana", "grapes", "kiwi"])
// console.log(ans);

// function abc(fruits=["mango", "apple", "banana", "grapes", "kiwi"]) {
//   return fruits[2];
// }
// let ans=abc()
// console.log(ans);

// function abc(fruits=["mango", "apple", "banana", "grapes", "kiwi"]) {
//   return fruits[1];
// }
// let ans=abc(["jio", "airtel", "vi", "bsnl", "MTS"])
// console.log(ans);

//que...agr argument bhej rhe h toh array ka 2nd element print ho wrna default ka 3rd print ho

// function abc(fruits = ["mango", "apple", "banana", "grapes", "kiwi"]) {
//   return fruits?.[1 ] ?? fruits[2];
// }
// let ans = abc(["jio", "airtel", "vi", "bsnl", "MTS"]);
// let ans2 = abc();
// console.log(ans);
// console.log(ans2);

function abc(fruits) {
  if (fruits === undefined) {
    fruits = ["mango", "apple", "banana", "grapes", "kiwi"];
    return fruits[3];
  } else {
    return fruits[2];
  }
}
let ans = abc(["jio", "airtel", "vi", "bsnl", "MTS"]);
let ans2 = abc();
console.log(ans);
console.log(ans2);
