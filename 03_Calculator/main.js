class SimpleCalculator {
  constructor(operation, num1, num2) {
    this.operation = operation;
    this.num1 = num1;
    this.num2 = num2;
  }

  // Polymorphic function to perform arithmetic calculations
  calculate(operation, num1, num2) {
    // Write function description
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "Invalid input: num1 and num2 must be numbers";
    }

    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return Math.floor(num1 / num2);
      case "modulus":
        return num1 % num2;
      default:
        return "Invalid operation";
    }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
  }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const calculator = new SimpleCalculator();

console.log(calculator.calculate("add", 5, 3));
// Expected Output: 8
console.log(calculator.calculate("subtract", 10, 4));
// Expected Output: 6
console.log(calculator.calculate("multiply", 6, 7));
// Expected Output: 42
console.log(calculator.calculate("divide", 8, 2));
// Expected Output: 4
console.log(calculator.calculate("divide", 9, 2));
// Expected Output: 4
console.log(calculator.calculate("divide", 8, 0));
// Expected Output: Cannot divide by zero
console.log(calculator.calculate("modulus", 8, 3));
// Expected Output: 2
console.log(calculator.calculate("add", 5, "three"));
// Expected Output: Invalid input: num1 and num2 must be numbers
