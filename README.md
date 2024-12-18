# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The error occurs when attempting to increment a counter field using a string value instead of a number.

## Bug
The `bug.js` file contains code that attempts to increment a counter field using `$inc` with a string value ('1').  This will cause an error.

## Solution
The `bugSolution.js` file provides a corrected version of the code which uses the numeric value 1.  This will correctly increment the counter field.

## How to Reproduce
1. Clone this repository
2. Create a MongoDB collection named `counters`.
3. Run `bug.js` and note the error.  Then run `bugSolution.js` and observe the successful incrementation of the counter.
