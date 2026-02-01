function TaskManagementSys(username = "Guest", role = "user") {
  let Task = [];

  return {
    addTask: function (task) {
      if (role !== "admin") {
        console.log({
          message: "admins are only allowed to add task",
          success: 0,
        });
        return { message: "admins are only allowed to add task", success: 0 };
      }

      if (role === "admin") {
        Task.push(task);
        console.log({ message: "Task added successfully", success: 1 });
        return { message: "Task added successfully", success: 1 };
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
prajjal.addTask({ taskname: "homework submission", duedate: "24_10_2007" });
prajjal.viewTask();
prajjal.totalTask();

let shivam = TaskManagementSys("shivam", "admin");
shivam.addTask({ taskname: "check copy", duedate: "07_01_2004" });
shivam.viewTask();
shivam.totalTask();

let rohan = TaskManagementSys("rohan", "user");
let res = rohan.addTask({
  taskname: "prepare notes",
  duedate: "10_02_2026",
});
rohan.viewTask();
rohan.totalTask();
