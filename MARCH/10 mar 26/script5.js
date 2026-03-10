// const patients = [
//   { name: "John", meds: ["Paracetamol", "Ibuprofen"] },
//   { name: "Alice", meds: ["Amoxicillin"] },
//   { name: "Michael", meds: ["Metformin", "Atorvastatin"] },
//   { name: "Elena", meds: ["Lisinopril"] },
//   { name: "David", meds: ["Levothyroxine", "Vitamin D3", "Paracetamol"] },
//   { name: "Sophia", meds: ["Albuterol", "Fluticasone"] },
//   { name: "James", meds: ["Amlodipine", "Hydrochlorothiazide"] },
//   { name: "Isabella", meds: ["Sertraline"] },
//   { name: "Robert", meds: ["Gabapentin", "Naproxen", "Omeprazole"] },
//   { name: "Mia", meds: ["Losartan"] },
//   { name: "William", meds: ["Warfarin"] },
//   { name: "Charlotte", meds: ["Prednisone", "Azithromycin"] },
// ];
// let ansset = [...new Set(patients.flatMap((x) => x.meds))];
// let ans = patients.flatMap((x) => x.meds);
// console.log(ans);

//------------------------------------------------------------------------------

const patients = [
  { name: "John", meds: ["Paracetamol", "Ibuprofen", "Paracetamol"] },
  { name: "Alice", meds: ["Amoxicillin"] },
  { name: "Michael", meds: ["Metformin", "Atorvastatin"] },
  { name: "Elena", meds: ["Lisinopril"] },
  { name: "David", meds: ["Levothyroxine", "Vitamin D3", "Paracetamol"] },
  { name: "Sophia", meds: ["Albuterol", "Fluticasone"] },
  { name: "James", meds: ["Amlodipine", "Hydrochlorothiazide"] },
  { name: "Isabella", meds: ["Sertraline"] },
  { name: "Robert", meds: ["Gabapentin", "Naproxen", "Omeprazole"] },
  { name: "Mia", meds: ["Losartan"] },
  { name: "William", meds: ["Warfarin"] },
  { name: "Charlotte", meds: ["Prednisone", "Azithromycin"] },
];
let ansset = [...new Set(patients.flatMap((x) => x.meds))];
let ans = patients.flatMap((x) => x.meds);
console.log(ansset);
