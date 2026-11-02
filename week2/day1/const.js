// Prediction: Reassigning a number will crash.
// Changing an object property WILL work.
// Reassigning the whole object variable will crash.

// 1. Try to reassign a number
const price = 100;
try {
  price = 200;
} catch (error) {
  console.log("Reassigning primitive error:", error.message);
}

// 2. Try to change a property of an object
const user = { name: "Nathan" };
user.name = "John";
console.log("Modified object property works:", user.name);

// 3. Try to reassign the object itself
try {
  user = { name: "Sarah" };
} catch (error) {
  console.log("Reassigning entire object error:", error.message);
}
