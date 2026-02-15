//1. Write a lambda function to return the sum of two numbers.

// let sum = (a, b) => a + b;
// console.log(sum(5, 6));

//2. Write a lambda function to check if a number is even.

// let isEven = (num) => num % 2 === 0;
// console.log(isEven(4));
// console.log(isEven(7));

//3.Write a lambda function to return the square of a number.

// let sqr=(n)=>n*n;
// console.log(sqr(2));

//4.Write a lambda function that returns the cube of a number.

// let cube=(n)=>n*n*n;
// console.log(cube(2));

//5. Write a lambda function that converts Celsius to Fahrenheit.

// const cToF = c => (c * 9/5) + 32;
// console.log(cToF(37));

//6.Write a lambda function that returns the maximum of two numbers.

// let max = (a, b) => (a > b ? a : b);
// console.log(max(5, 11));

//7.Write a lambda function that returns “positive” if a number > 0 if num==0 then “ZERO” else “negative”.

// let checkNum = (num) => (num > 0 ? "positive" : num === 0 ? "ZERO" :"negative");
// console.log(checkNum(5));
// console.log(checkNum(0));
// console.log(checkNum(-3));

//8.Write a lambda function to calculate area of a circle.
// let area = (r) => Math.floor(Math.PI * r * r);
// console.log(area(5));

//9.Write a lambda function that returns the length of a string.

// let str=(s)=>s.length;
// console.log(str("hello"));

//10.Write a lambda function that converts a string to uppercase.

// let str=(s)=>s.toUpperCase();
// console.log(str("hello"));

// 11.Write a lambda function that checks if a string includes “JS”.

// let check=(str)=>str.includes("JS");
// console.log(check("hello JS"));

//12. Write a lambda function that reverses a string using string methods.
// let reverse=(s)=>s.split("").reverse().join("");
// console.log(reverse("hello"));

//13.Write a lambda function that returns the first element of an array.

// let arr1=(arr)=>arr[0];
// console.log(arr1([17,23,4,5,55]));

//14.Write a lambda function that returns the last element of an array.

// let arr1=(arr)=>arr[arr.length-1];
// console.log(arr1([17,23,4,5,55]));

//15.Write a lambda function that joins array elements with commas.
// let arr1=(arr)=>arr.join(",");
// console.log(arr1([17,23,4,5,55]));

//16.Write a lambda function that checks if an array includes the number 5.
// let arr1=(arr)=>arr.includes(5);
// console.log(arr1([1,2,5,7,4,3]));

//17.Write a lambda function that returns the total number of characters in an string.

// let str=(s)=>s.length;
// console.log(str("hello"));

// 18.Write a lambda function that returns true if an array is empty.
// let arr1=(arr)=>arr.length===0;
// console.log(arr1([]));
// console.log(arr1([1,2,3]));

// 19.Write a lambda function that checks if a year is a leap year.
// let isLeapYear=(year)=>(year%4===0 && year%100!==0) || (year%400===0);
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2021));

//20.Write a lambda function that rounds a decimal to two places.
// const roundTwo = num => Number(num.toFixed(2));
// console.log(roundTwo(3.14159));

//21.Write a lambda function that returns the absolute value of a number.
// let abs=(n)=>Math.abs(n);
// console.log(abs(-5));

// 22. Write a lambda function to check if two strings are equal by length and by letters.
// let isEqual = (a, b) => a.length === b.length && a === b;
// console.log(isEqual("abc", "abc"));
// console.log(isEqual("abc", "ab"));

// 23. Write a lambda function that takes a string and parse it into float upto two decimal places.
// let parseFloatTwo = s => Number(parseFloat(s).toFixed(2));
// console.log(parseFloatTwo("3.14159"));

// 24. Write a lambda function that takes a string and parse into integer.
// let parseIntStr = s => parseInt(s, 10);
// console.log(parseIntStr("123"));

//25.Count number of words from a string
// const countWords = (s) => s.trim().split(/\s+/).length;
// console.log(countWords("hello world bhai"));

// 26. Reverse the string word wise.
// let reverseWords = s => s.split(" ").reverse().join(" ");
// console.log(reverseWords("hello how are you"));

//27.Count vowels in a string
// const countVowels = s =>
//   [...s].filter(c => "aeiouAEIOU".includes(c)).length;
// console.log(countVowels("education"));

// 28. Remove duplicate characters.
// let removeDuplicates = (s) => [...new Set(s)].join("");
// console.log(removeDuplicates("programming"));

//29.Find the first repeating character
// const checkfirst = (str) => str.split('').find((char, index, arr) => arr.indexOf(char) !== index);
// console.log(checkfirst("programming"));

//30.Find the longest word in a sentence without using split().
// let longestWord = (s) => {
//   let longest = "";
//   let current = "";

//   [...s].forEach((ch) => {
//     if (ch !== " ") {
//       current += ch;
//       if (current.length > longest.length) {
//         longest = current;
//       }
//     } else {
//       current = "";
//     }
//   });

//   return longest;
// };
// console.log(longestWord("I love Javascript"));

// 31. Remove all spaces without using replace().
// let removeSpaces = s => s.split(" ").join("");
// console.log(removeSpaces("hello world js"));

//32. Extract all digits from a string and form a new string.

// const extractDigits = s =>
//   [...s].filter(ch => ch >= '0' && ch <= '9').join("");
// console.log(extractDigits("a1b2c3d4e5"));

// 33.Check if a string contains only alphabets (A–Z, a–z).

// const isAlphaOnly = s => /^[a-zA-Z]+$/.test(s);
// console.log(isAlphaOnly("hello"));

// 59.Square Root of a Number using Binary Search
const sqrtBinary = (n) => {
  if (n < 0) return -1;

  let left = 0,
    right = n,
    ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === n) return mid;

    if (mid * mid < n) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};
console.log(sqrtBinary(16));

//61.Pallindrome and reverse of number.
// let isPalindromeNum = (n) => {
//   let original = n;
//   let rev = 0;

//   while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }

//   return original === rev;
// };

//62.Merge two arrays (using spread operator)
// let mergeArrays = (a, b) => [...a, ...b];

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 63.Take 2 sorted array merge and output should be sorted
// const mergeSortedLazy = (arr1, arr2) =>
//   [...arr1, ...arr2].sort((a, b) => a - b);
// const a1 = [1, 3, 5, 7];
// const a2 = [2, 4, 6, 8];
// console.log(mergeSortedLazy(a1, a2));
