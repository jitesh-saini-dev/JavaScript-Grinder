// let obj1={
//     isadmin:"true",
// }
// let obj2={
//     isadmin:"false",
// }
// function sum(){
//     let a=15;
//     console.log(a);

// }
// obj1.isadmin==="true" && sum();

//------------------------------------------------------

// function abc(user){
//     let count=0;
//     return function xyz(msg){
//         console.log(`${user} has message: ${msg}`);
//         count++;
//         console.log(`${user}'s message count is: ${count}`);

//     }
// }
// let rahul=abc("rahul")
// rahul("hello")
// rahul("hello")

// let akshay=abc("akshay")
// akshay("ok")

//------------------------------------------------------

// function fetchdata(num) {
//   if (typeof num !== "number") return { data: null, msg: 0 };
//   return num === 0 ? { data: num, msg: 1 } : { data: null, msg: 0 };
// }

// // console.log(fetchdata(0));
// // console.log(fetchdata(5));
// let res1 = fetchdata(0); //true
// console.log(res1);
// let data1 = res1.data;
// console.log(data1);

// let res2 = fetchdata();
// console.log(res2);
// let data2 = res2.data ?? 0;
// console.log(data2);

// let res3 = fetchdata(null);
// console.log(res3);
// let data3 = res3.data ?? 0;
// console.log(data3);

//------------------------------------------------------

// function fetchdata(arr) {
//   if (!Array.isArray(arr)) return { data: null, msg: 0 };

//   if (arr.length === 0) return { data: null, msg: 0 };

//   return arr ? { data: arr, msg: 1 } : { data: null, msg: 0 };
// }

// let res1 = fetchdata([1, 2, 3, 4]); //true

// console.log(res1);

// let data1 = res1.data ?? [5, 4, 3, 70];

// let res2 = fetchdata();

// let data2 = res2.data ?? [4, 7, 8, 9];

// console.log(res2);

// let res3 = fetchdata(null);

// console.log(res3);

// let data3 = res3.data ?? [8, 7, 9, 2, 6];

// let res4 = fetchdata(0);

// console.log(res4);

// let res5 = fetchdata("");

// console.log(res5);

// let res6 = fetchdata(false);

// console.log(res6);

// let res7 = fetchdata([]);

// let data7 = res7.data ?? [7, 9, 2, 0, 1, 78];

// console.log(data7);

// let res8 = fetchdata(" ");

// console.log(res8);

// let res9 = fetchdata(1);

// console.log(res9);

// let res10 = fetchdata(true);

// console.log(res10);

// let res11 = fetchdata({});

// console.log(res11);

//------------------------------------------------------

function TaskManagementSys(username = "Guest", role = "user") {
  let Task = [];
  return {
    addTask: function (task) {
      if (role !== "admin")
        return {
          message: "admins are only allowed to add task",
          success: 0,
        };

      if (role === "admin") {
        Task.push(task);
        // console.log(Task);
        return {
          message: "Task added successfully",
          success: 1,
        };
      }
    },

    viewTask: function () {
      if (Task.length === 0) {
        console.log("No task to view");
        return;
      }
      console.log(Task);
    },

    totalTask: function () {
      console.log(Task.length);
    },
  };
}

let prajjal = TaskManagementSys("prajjal", "admin");
let res1 = prajjal.addTask({
  taskname: "homework submission",
  duedate: "24_10_2007",
});
console.log(res1);

let res3 = prajjal.addTask({
  taskname: "homework submission",
  duedate: "24_10_2007",
});
console.log(res3);

prajjal.viewTask();
prajjal.totalTask();

let shivam = TaskManagementSys("shivam", "admin");
let res2 = shivam.addTask({ taskName: "check copy", duedate: "07_01_2004" });
console.log(res2);
shivam.viewTask();
shivam.totalTask();
