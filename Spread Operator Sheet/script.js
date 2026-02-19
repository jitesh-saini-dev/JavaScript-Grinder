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

// 1️⃣4️⃣ Clone Object and Override Multiple Keys
// const settings = {
//   theme: "dark",
//   language: "en",
//   notifications: true
// };

// 👉 Change theme to "light" and notifications to false using spread.

// const settings = {
//   theme: "dark",
//   language: "en",
//   notifications: true
// };

// let updatedSettings = {
//   ...settings,
//   theme: "light",
//   notifications: false
// };
// console.log(settings);
// console.log(updatedSettings);

// 1️⃣5️⃣ Create Utility Function – Generic Update
// Create function:
// updateField(obj, key, value)

// 👉 It should return updated object using spread and computed key.

// function updateField(obj, key, value) {
//   return {
//     ...obj,
//     [key]: value,
//   };
// }

// const user = {
//   id: 1,
//   name: "Prajjal",
//   role: "admin",
// };
// const updatedUser = updateField(user, "role", "super");
// console.log(user);
// console.log(updatedUser);

// 1️⃣6️⃣ Add Item Only If Not Exists
// const cart = [
//   { id: 1, name: "Laptop" }
// ];

// const newItem = { id: 1, name: "Laptop" };

// 👉 Add only if item id not already present. Use spread.

// const cart = [{ id: 1, name: "Laptop" }];

// const newItem = { id: 1, name: "Laptop" };

// const isItemPresent = cart.every((item) => item.id !== newItem.id);
// const updatedCart = isItemPresent ? [...cart, newItem] : cart;

// console.log(cart);
// console.log(updatedCart);

// 1️⃣7️⃣ Remove Item from Array by ID (Immutable)
// const cart = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 }
// ];

// const idToRemove = 2;

// 👉 Remove immutably.

const cart = [{ id: 1 }, { id: 2 }, { id: 3 }];

const idToRemove = 2;

const updatedCart = cart.filter((item) => item.id !== idToRemove);
console.log(updatedCart);
