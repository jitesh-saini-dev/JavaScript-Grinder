// //-------------Lexical-Scope------------------------

// // function outer(){
// //     let outerVar = 'I am from outer function';
// //     function inner(){
// //         let innerVar = 'I am from inner function';
// //         console.log(outerVar); // Accessing outer function variable
// //     }
// //     inner();
// //     // console.log(innerVar); // This will throw an error as innerVar is not accessible here
// // }
// // outer();

// //--------------------

// function outer(){
//     var a = 20;
//     function inner(){
//         console.log(a);
//     }
//     inner()
// }
// outer()

//-------------Lexical-Scope------------------------

// function outer(){
//     let outerVar = 'I am from outer function';
//     function inner(){
//         let innerVar = 'I am from inner function';
//         console.log(outerVar); // Accessing outer function variable
//     }
//     inner();
//     // console.log(innerVar); // This will throw an error as innerVar is not accessible here
// }
// outer();

//--------------------

// function outer(){
//     var a = 20;
//     function inner(){
//         console.log(a);
//     }
//     return inner();
// }
// outer()

//-----------------------

// function outer() {
//   var a = 20;
//   return function () {
//     console.log(a);
//   };
// }
// console.log(outer());

//--------QUESTion-------------------------------------
// Problem 1: Request-Specific User Context Requirement A backend service receives multiple HTTP requests simultaneously. For each request, the system must: Read the userId from the request Fetch user data from a database Perform validation Return the user’s name Constraints No request should ever see another request’s user data Requests may overlap in time The service must be safe under high traffic Task Design the function logic so that: User data is isolated per request The returned response is always correct Return the user’s name as a string.

// Core Design Principle (Backend Reality)
// In a backend system:
// Each HTTP request must have its own execution context

// Any data derived from a request must live inside that request’s scope

// Shared/global variables are forbidden for request-specific data

// If this rule is violated, Request A can leak into Request B under concurrency.

// function ContextApi(userinfo) {
//   return function userContext() {
// console.log(userinfo);

//   };
// }
// let res1 = ContextApi("user-1");
// res1();
// let res2 = ContextApi("user-2");
// res2();
// let res3 = ContextApi("user-3");
// res3();
// console.log(userinfo);
//upar is syntax me likhna data driven kahlaata h



// -----------------------------------------------------------

// function userContext(users){
//     return users;
// }
// let ans = userContext(["u1","u2","u3"]);
// console.log(ans);


//-------------hoisting---------------------    
// console.log(a);
// var a = {
//     user:"abc"
// }


console.log(c);//undefined due to hoisting
c();//type error c is not a function
var c = function(){
    console.log("hello");
};
c();
