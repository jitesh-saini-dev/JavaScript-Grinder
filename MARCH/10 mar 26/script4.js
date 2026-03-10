const assignments = [
  { title: "Module 8", due: "2025-06-01" },
  { title: "Module 2", due: "2025-04-10" },
  { title: "Final Submission", due: "2025-06-15" },
  { title: "Module 5", due: "2025-05-02" },
  { title: "Module 1", due: "2025-04-14" },
  { title: "Module 7", due: "2025-05-25" },
  { title: "Midterm Project", due: "2025-05-10" },
  { title: "Module 3", due: "2025-04-20" },
  { title: "Final Exam Prep", due: "2025-06-10" },
  { title: "Module 6", due: "2025-05-18" },
  { title: "Module 4", due: "2025-04-25" },
];
const items = assignments.sort((a, b) => new Date(a.due) - new Date(b.due));
console.log(items);