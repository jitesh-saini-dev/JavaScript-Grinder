// 4️⃣ Doctor Management – Merge Two Objects
// 👉 Merge both objects using spread operator.

const doctorBasic = {
  name: "Dr. Sharma",
  specialization: "Cardiology"
};

const doctorExtra = {
  experience: 12,
  rating: 4.8
};

let updated={...doctorBasic,...doctorExtra};
console.log(updated);