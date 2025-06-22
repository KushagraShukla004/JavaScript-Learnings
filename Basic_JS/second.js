console.log("Second.js: Loops and Stings");

//for-in loop
let student = {
  name: "Rahul",
  age: 20,
  marks: 80,
  ["key with spaces"]: "yes",
};

console.log("student.name :", student.name);
console.log('student["name"] :', student["name"]);
console.log('student["key with spaces"] :', student["key with spaces"]);

for (let i in student) {
  console.log("Key: ", i, ", Value: ", student[i]);
}
