const arr = [4, 1, 4, 2];
let index = arr.indexOf(4);
let updated = [...arr.slice(0, index), ...arr.slice(index + 1)];
console.log(arr);
console.log(updated);