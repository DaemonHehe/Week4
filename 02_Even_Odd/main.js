class NumberChecker {
  constructor(input) {
    this.input = input;
  }

  // Polymorphic function to check if numbers are odd or even
  checkOddEven(input) {
    // Write function description
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (typeof input === "number") {
      return input % 2 === 0 ? "Even" : "Odd";
    } else if (Array.isArray(input)) {
      return input.map((num) => {
        if (typeof num === "number") {
          return num % 2 === 0 ? "Even" : "Odd";
        } else {
          return "Invalid input";
        }
      });
    } else {
      return "Invalid input";
    }
  }
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven("Hello"));
// Expected Output: Invalid input
