// Prediction: blockVar will print because var ignores if-blocks.
// blockLet and blockConst will crash because let/const are trapped inside blocks.

if (true) {
  var blockVar = "I am a var inside a block";
  let blockLet = "I am a let inside a block";
  const blockConst = "I am a const inside a block";
}

console.log(blockVar); // Will this work?

try {
  console.log(blockLet); // Will this work?
} catch (error) {
  console.log("blockLet Error:", error.message);
}

try {
  console.log(blockConst); // Will this work?
} catch (error) {
  console.log("blockConst Error:", error.message);
}
