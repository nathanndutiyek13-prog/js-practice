// Prediction: The var loop will print 3 three times because it shares one global variable.
// The let loop will print 0, 1, 2 because it creates a fresh variable for every single loop run.

console.log("--- Starting var loop ---");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i is:", i), 0);
}

// A tiny delay helper so the outputs don't mix together
setTimeout(() => {
  console.log("--- Starting let loop ---");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j is:", j), 0);
  }
}, 100);
