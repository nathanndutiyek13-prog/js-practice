// 1. Template Literals & Multi-line strings
const user = "Nathan";
const system = "Node.js";
const message = `Welcome back, ${user}!
You are currently executing scripts on the ${system} engine.
This is a clean, multi-line template literal string structure.`;
console.log(message);

// 2. Default Parameters
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log("\n--- Default Parameters Test ---");
console.log("No arguments:", greet());
console.log("One argument:", greet("Alice"));
console.log("Two arguments:", greet("Bob", "Welcome"));
console.log("With undefined:", greet(undefined, "Hi")); // Triggers default value
console.log("With null:", greet(null, "Hi")); // Does NOT trigger default value

// 3. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log("\n--- Rest Parameters Test ---");
console.log("Adding 4 numbers (1,2,3,4):", sum(1, 2, 3, 4));
console.log("Adding 6 numbers:", sum(10, 20, 30, 40, 50, 60));

// 4. Object Options with Default Values
function createConfig({ theme = "dark", debug = true, retries = 3 } = {}) {
  console.log(
    `System Specs -> Theme: ${theme}, Debugging Mode: ${debug}, Retries Left: ${retries}`,
  );
}
console.log("\n--- Object Options Defaults Test ---");
createConfig({ theme: "light" }); // Changing just one option
createConfig(); // Works with zero options provided
