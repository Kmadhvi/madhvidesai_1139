// 1. Student Report System

let students = [
  { name: "Madhvi", marks: [80, 70, 90] },
  { name: "Riya", marks: [40, 55, 50] },
  { name: "Ayaan", marks: [30, 35, 25] }
];

let studentReport = students.map(student => {
  let total = student.marks.reduce((sum, mark) => sum + mark, 0);
  let average = total / student.marks.length;

  let result = "";
  if (average >= 75) {
    result = "Distinction";
  } else if (average >= 50) {
    result = "Pass";
  } else {
    result = "Fail";
  }

  return {
    ...student,
    average: average,
    result: result
  };
});

console.log(studentReport);
