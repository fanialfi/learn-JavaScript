const X = "Declared outside the function";

exampleFunction();

function exampleFunction() {
  console.log("Inside Function");
  console.log(X);
}

console.log("Outside Function");
console.log(X);
