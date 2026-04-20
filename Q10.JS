// BONUS: Write a function called summarizeStudent that accepts an array of student objects (each with name and score). The function should return a new array of strings in this format:
// 'Amara scored 88 — Grade: B'

const students = [
    { name: "Ifeoma", score: 97 },
    { name: "Onyinye", score: 72 },
    { name: "Amara", score: 88 },
    {name:"Habeeb", score: 64 },
    {name:"Kelvin", score: 50}
]

function summarizeStudent(students) {
  let results = [];

  for (let i = 0; i < students.length; i++) {
    let name = students[i].name;
    let score = students[i].score;
    let grade;

    if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    results.push(name + " scored " + score + " - Grade: " + grade);

  }

  return results;
}
console.log(summarizeStudent(students)[2])
