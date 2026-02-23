// 1.create a outer function pass array in paramter that only accecpt no. and inner fucntion accept arra and return merge array pass in outer and inner

function outer(arr1) {
    function inner(arr2) {
        let merge = [...arr1, ...arr2];
        return merge;
    }
    return inner;
}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = outer(arr1)(arr2);
console.log(result);



// function outer(arr1) {
//   return function inner(arr2) {
//     return [...arr1, ...arr2];
//   };
// }
// let ans = outer([1, 2, 3]);
// let res = ans([4, 5, 6]);
// console.log(res);
