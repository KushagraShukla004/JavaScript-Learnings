console.log("Second.js: Loops and Stings");

//for-in loop
let student = {
  name: "Rahul",
  age: 20,
  marks: 80,
};

console.log("student.name :", student.name);
console.log('student["name"] :', student["name"]);

for (let i in student) {
  console.log("Key: ", i, ", Value: ", student[i]);
}
