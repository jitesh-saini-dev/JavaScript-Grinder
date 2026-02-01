//hoisting : accesing variable's value before initialisation if declared by VAR

// variable hoisting-
// console.log(a); //you have used and accesed it before declaration
var a = 4; //declaration
// console.log(a); //access
// line 4 : undefined
// line 6 : 4

// function hoisting : only possible with named function(normal function/regular function)
// expresion function me variable toh hoist ho jata h uski value undefined aati h or undefined ko call krne pr typeError aata h
// same with other function also
//in case of let and const toh vo hoist toh ho jate h pr vo temporal dead zone me chle jate h TDZ me.

// ---Expressional function : function la refrence ek expression me store kiya gaya h. Expression ko call karne se function invoke ho jyga.

// var abc = function(){};
// let abc = function(){};
// const abc = function(){};

function outer(count = 0) {
  return function () {
    return ++count;
  };
}

let res1 = new outer(0);//new word used for Heap it consume heap memoery and its heap data 

console.log(res1());
console.log(res1());

let res2 = outer(100);
console.log(res2());

let res3 = outer();
console.log(res3());
