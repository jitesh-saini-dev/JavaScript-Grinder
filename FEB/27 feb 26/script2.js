const date1 = new Date(new Date().toISOString().split("T")[0]);
const date2 = new Date("2026-03-07");

const differenceInMilliseconds = date2.getTime() - date1.getTime();
const millisecondsInADay = 1000 * 60 * 60 * 24;
const days = differenceInMilliseconds / millisecondsInADay;
console.log(days);