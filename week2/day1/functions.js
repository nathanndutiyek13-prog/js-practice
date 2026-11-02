// Test calling each function BEFORE they are written down to see if they are hoisted!
try {
  console.log(sayHelloDeclaration());
} catch (e) {
  console.log("Declaration Hoisting Error:", e.message);
}
try {
  console.log(sayHelloExpression());
} catch (e) {
  console.log("Expression Hoisting Error:", e.message);
}
try {
  console.log(sayHelloArrow());
} catch (e) {
  console.log("Arrow Hoisting Error:", e.message);
}

// 1. Function Declaration
function sayHelloDeclaration() {
  return "Hello from a Function Declaration!";
}

// 2. Function Expression
const sayHelloExpression = function () {
  return "Hello from a Function Expression!";
};

// 3. Arrow Function
const sayHelloArrow = () => {
  return "Hello from an Arrow Function!";
};

console.log("\n--- Advanced Functions & Callbacks ---");

// 4. Arrow function with an implicit return (no curly braces, no return keyword)
const multiplyByTwo = (num) => num * 2;
console.log("Implicit return test (4 * 2):", multiplyByTwo(4));

// 5. Arrow function returning an object implicitly (wrapped in parentheses)
const makeUser = (id, username) => ({ id: id, name: username });
console.log("Implicit object return test:", makeUser(1, "Nathan"));

// 6. Pass a function as an argument to another function (a callback)
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
    action(i); // Calling the callback function and passing the current index
  }
}

// Running repeat and passing an arrow function as the action
repeat(3, (index) => {
  console.log(`Callback action executed at index: ${index}`);
});
