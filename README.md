# Unexpected Type Coercion in JavaScript

This example demonstrates a common JavaScript issue: type coercion leading to unexpected results.  The `foo` function intends to add two numbers, but due to JavaScript's dynamic typing, it performs string concatenation when one of the arguments is a string.

## Bug
The `bug.js` file shows the erroneous behavior. The function `foo` incorrectly concatenates a number and string.

## Solution
The `bugSolution.js` provides a solution using explicit type checking or conversion to ensure addition instead of concatenation.