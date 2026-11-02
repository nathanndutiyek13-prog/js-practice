// Prediction: 'a' (var) will be undefined due to hoisting,
// but 'b' (let) will crash the program with a ReferenceError.

console.log(a);
var a = "I am a var";

console.log(b);
let b = "I am a let";
