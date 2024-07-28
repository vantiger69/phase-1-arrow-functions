// Define a function expression called `divide`
const divide = function () {
  return 2000 / 100;
};

// Define an arrow function called `square`
const square = (x) => x * x;

// Define an arrow function called `add`
const add = (a, b) => a + b;

// Testing the functions
console.log(divide()); // Output: 20
console.log(square(4)); // Output: 16
console.log(add(2, 3)); // Output: 5

// Additional tests for verification
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map((n) => n * n);
console.log(squaredNumbers); // Output: [1, 4, 9]
