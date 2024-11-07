// Students write their code between these lines.
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output.
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // num is divisible by i, not prime
  }
  return true; // num is prime

  // students must use polymorphic messageFormatter function to display answer
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (Array.isArray(start) && start.length === 2) {
    let primesInRange = [];
    for (let num = start[0]; num <= start[1]; num++) {
      if (checkPrimeNum(num)) primesInRange.push(num);
    }
    messageFormatter(primesInRange, "range"); // Correctly format range output
  } else if (typeof start === "number" && typeof end === "number") {
    let primesInRange = [];
    for (let num = start; num <= end; num++) {
      if (checkPrimeNum(num)) primesInRange.push(num);
    }
    messageFormatter(primesInRange, "range"); // Correctly format range output
  } else {
    messageFormatter(null, "invalid"); // Handle invalid input
  }
  // reuse isPrime() function here

  // students must use polymorphic messageFormatter function to display answer
  messageFormatter();
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Polymorphic messageFormatter function
function messageFormatter(input) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  if (typeof input === "range") {
    if (input && input.length > 0) {
      console.log(`${input.join(", ")} are prime numbers.`);
    } else {
      console.log("No primes found in the specified range.");
    }
  } else if (typeof input === "invalid") {
    console.log(
      "Invalid input. Please provide a number or a valid range (array of two numbers)."
    );
  } else {
    console.log(
      `${input} is ${checkPrimeNum(input) ? "a prime" : "NOT a prime"} number.`
    );
  }
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange("test"));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
