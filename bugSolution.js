function foo(a, b) {
  // Type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input: arguments must be numbers.';
  }
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // Output: Invalid input: arguments must be numbers.