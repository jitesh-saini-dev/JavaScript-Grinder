// const word = "hello";
// console.log(word.split("").reverse().join(""));

// const num = "1234";
// const ans = num.split("").reduce((acc, x) => Number(x) * acc, 1);
// console.log(ans);

// const abc = ["hi", "hello", "buddy", "whats", "up"];
// const ans = abc.reduce((acc, x) => x + acc, "");
// console.log(ans);

// const str = "I love India";
// console.log(
//   str
//     .split(" ")
//     .reverse()
//     .map((x) => x.split("").reverse().join(""))
//     .join(" "),
// );

// const arr = [1, 2, 78, 96, 12, 36, 45];
// const ans = arr.reduce((acc, x) => (acc < x ? (acc = x) : acc), arr[0]);
// console.log(ans);

// const arr = [
//   [1, 2, 78, 96, 12, 36, 45],
//   [4, 7, 8, 9, 5, 4, 6, 21, 36, 78],
//   [7, 4, 5, 6, 9, 41, 52, 63, 78, 98, 45],
//   [-7, -80, -89, -74, -75, -5, , -4, -9],
// ];
// const ans = arr.map((vec) =>
//   vec.reduce((acc, item) => (acc < item ? (acc = item) : acc), vec[0]),
// );
// console.log(ans);

const arr = [
  [
    [1, 2, 4, 7, 0, 89, 52, 6], //89
    [1, 4, 5, 67, 8, 9, 41], //67
  ],
  [
    [7, 8, 5, 9, 6, 4, 1, 2, 3], //9
    [19, 4, 5, 96, 78, 90, 56], //96
  ],
  [
    [7, 1, 8, 9, 3, 5, 96, 9, 54, 65], //96
    [36, 4, 5, 6, 78, 9, 5, 9, 45], //78
  ],
];

// [
// [89,67],
// [9, 96],
// [96,78]
//  ]
const ans = arr.map((twodarr) =>
  twodarr.map((vec) =>
    vec.reduce((acc, item) => (acc < item ? (acc = item) : acc), vec[0]),
  ),
);
console.log(ans);
