function abc(data = { name: "sourabh", age: 25 }) {
  return data;
}
let ans = abc({
  name: "aj",
  age: 21,
});
console.log(ans);

let ans2 = abc({});
console.log(ans2);

let ans3 = abc();
console.log(ans3); //yha undefined jyga toh isse bchne k liye default object parameter me de diye...
