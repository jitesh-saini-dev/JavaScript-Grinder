const arr = ["prajjal", "abhay", "rajaram", "kishan"];
//{}
//{prajjal:2,abhay:2,rajaram:3,kishan:2};
// [7,5,7,6]
//{prajjal:7,abhay:5,rajaram:7,kishan:6}

//{prajjal:"prjjl",abhay:"bhy",rajaram:"rjrm",kishan:"kshn"}
// ["prjjl","bhy","rjrm","kshn"]

const vowels = "aeiouAEIOU";
// const ans = arr.reduce((acc, x) => {
//   acc[x] = [...x].reduce(
//     (acc, item) => (vowels.includes(item) ? (acc = acc + 1) : acc),
//     0,
//   );
//   return acc;
// }, {});
// console.log(ans);

// const ans = arr.map((x) => x.length);
// const ans = arr.reduce((acc, x) => {
//   acc[x] = x.length;
//   return acc;
// }, {});
// console.log(ans);

// const ans = arr.map((x) => [...x].filter((x) => !vowels.includes(x)).join(""));

// const ans = arr.reduce((acc, x) => {
//   acc[[...x].filter((x) => !vowels.includes(x)).join("")] = x;
//   return acc;
// }, {});

// console.log(ans);