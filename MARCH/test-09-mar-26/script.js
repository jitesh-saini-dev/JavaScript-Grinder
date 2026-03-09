//take an array and remove duplicates
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// let ans = removeDuplicates([1, 1, 3, 2, 2, 4, 5, 4]);
// console.log(ans);

// let arr=[1, 1, 3, 2, 2, 4, 5, 4]
// let updated=[...new Set(arr)];
// console.log(updated)

//take an array add first element to last and second element to second last element and print final array

let arr = [1, 2, 3, 4, 5, 6];
let newarr = [];
let i = 0;
let j = arr.length - 1;

while (i < j) {
  arr[i] = arr[i] + arr[j];
  newarr = [...newarr, arr[i]];
  i++;
  j--;
}
arr % 2 != 0 ? (newarr = [...newarr, arr[i]]) : newarr;

console.log(newarr);
