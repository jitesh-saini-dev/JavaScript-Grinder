let promise1 = Promise.reject(700);
let promise2 = Promise.resolve(78);
let promise3 = Promise.reject(400);
let promise4 = Promise.resolve(708);
// Promise.all([promise1, promise2, promise3]).then((val) => console.log(val));
// Promise.allSettled([promise1, promise2, promise3]).then((val) =>
//   console.log(val),
// );
// Promise.race([promise1, promise2, promise3]).then((val) => console.log(val));
Promise.any([promise1, promise2, promise3, promise4]).then((val) =>
  console.log(val),
);