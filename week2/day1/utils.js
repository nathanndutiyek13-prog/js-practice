// 1. Greet Utility Function
function greet(name = "User", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// 2. Rest Parameter Sum Utility
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 3. Implicit Return IsEven Arrow Function
const isEven = (n) => n % 2 === 0;

// 4. String Capitalization Utility
function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// 5. Index-Driven Loop Callback Utility
function repeat(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
}

// 6. Stretch Goal: Closure State Counter Factory
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// --- Live Execution Diagnostics Testing ---
console.log("1. Greet Test:", greet("Nathan", "Welcome"));
console.log("2. Sum Test:", sum(5, 10, 15, 20));
console.log("3. isEven Test (Is 88 even?):", isEven(88));
console.log("4. Capitalize Test:", capitalize("nAtHaN"));

console.log("5. Repeat Utility Active:");
repeat(3, (index) => console.log(`   Running loop step at index: ${index}`));

console.log("6. Closure Counter Instantiated:");
const counter = makeCounter();
console.log("   Call 1:", counter());
console.log("   Call 2:", counter());
console.log("   Call 3:", counter());
