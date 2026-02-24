//2nd-Level destructuring------------------------------
// const user = {
//   id: 1,
//   phonenumber: 867976434,
//   profile: {
//     city: "Jaipur",
//   },
// };

// let updateuser = {
//   ...user,
//   profile: { ...user.profile },
// };

// updateuser.profile.city = "Kolkata";

// console.log(user);
// console.log(updateuser);

//3rd-Level destructuring------------------------------

// const user = {
//   id: 1,
//   phonenumber: 867976434,
//   profile: {
//     name: "John Doe",
//     city: "Jaipur",
//     address: {
//         localaddress: "mansarovar",
//         officeaddress: "malviya nagar"
//   },
// }
// };

// let updateuser = {
//     ...user,
//     profile: {
//         ...user.profile,
//         address: {
//             ...user.profile.address ,officeaddress: "Gopalpura"//yha direct bhi kr skte h
//         }
//     }
// };

// // updateuser.profile.address.officeaddress = "Gopalpura";

// console.log(user);
// console.log(updateuser);

// const arr = ["hii", "hello"];
// let newarr = [...arr, "welcome"];
// console.log(newarr);

//-----------------------------
// 👉 Remove role and add accessLevel: "super" in one statement.

// const user = {
//   id: 1,
//   username: "prajjal",
//   role: "admin",
// };

// let updateuser = {
//   ...user,
//   accessLevel: "super",
// };
// console.log(updateuser);

// const state = {
//   users: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
//   ]
// };

// let updateState = {
//     ...state,
//     {
//         ...state.users,

//     }
// }

// 9️⃣ Add Item at Beginning of Array
// const messages = ["Hello", "How are you?"];
// const newMessage = "Good Morning";

// 👉 Add new message at the beginning using spread.

// const messages = ["Hello", "How are you?"];
// const newMessage = "Good Morning";

// //---by unshift method--add element at the beginning of array
// // messages.unshift(newMessage);

// //-------------by spread operator--------------
// let updatedMessages = [newMessage, ...messages];

// console.log(messages);
// console.log(updatedMessages);

// 🔟 Combine Two Arrays with Condition
// const freeCourses = ["HTML", "CSS"];
// const premiumCourses = ["React", "Node"];
// const isPremiumUser = true;

// 👉 If premium user, combine both arrays using spread.
//  Else return only freeCourses.

// const freeCourses = ["HTML", "CSS"];
// const premiumCourses = ["React", "Node"];
// const isPremiumUser = true;
// let courses = isPremiumUser ? [...freeCourses, ...premiumCourses] : freeCourses;
// console.log(courses);

// 1️⃣1️⃣ Remove Object Property and Add New One Simultaneously
// const user = {
//   id: 1,
//   username: "prajjal",
//   role: "admin"
// };

// 👉 Remove role and add accessLevel: "super" in one statement.

// const user = {
//   id: 1,
//   username: "prajjal",
//   role: "admin",
// };

// const { role, ...updatedUser } = user;
// let newuser = {
//   ...updatedUser,
//   accessLevel: "super",
// };
// // updatedUser.accessLevel = "super";

// console.log(user);
// console.log(newuser);

// 1️⃣2️⃣ Deep Nested Array Update
// const state = {
//   users: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
//   ]
// };

// const targetId = 2;

// 👉 Update name of user with id 2 to "Prajjal" immutably.

// const state = {
//   location: "Jaipur",
//   users: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" },
//   ],
// };

// const targetId = 2;

// const updatedUsers = {
//   ...state,
//   users: state.users.map((user) =>
//     user.id === targetId ? { ...user, name: "prajjal" } : user,
//   ),
// };

// console.log(updatedUsers);

// 1️⃣3️⃣ Add Conditional Property Only If Exists
// const product = {
//   id: 1,
//   name: "Phone"
// };

// const discount = 10;

// 👉 Add discount property only if discount > 0 using spread.

// const product = {
//   id: 1,
//   name: "Phone",
// };

// const discount = 10;

// let updatedProduct = {
//   ...product,
//   ...(discount > 0 && { discount }),
// };
// console.log(product);
// console.log(updatedProduct);
