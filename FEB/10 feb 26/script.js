const formadata = (username, email, phnum, message) => {
  return {
    username,
    email,
    phnum,
    message,
  };
};

const updatephone = (user, newphonenum) => {
  return {
    ...user,
    phnum: newphonenum,
  };
};

let user = formadata(
  "prajal",
  "prajal.dhar@gmail.com",
  "6464646476",
  "please dont call me",
);

console.log(user);

user = updatephone(user, 6464979758);

console.log(user);
