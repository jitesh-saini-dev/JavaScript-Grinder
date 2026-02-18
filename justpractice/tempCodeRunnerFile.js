let arr=[1,2,3,4,5];
let arr2=[4,8,9,45,2];
let arr3=[...new Set([...arr,...arr2]]);
console.log(arr3)