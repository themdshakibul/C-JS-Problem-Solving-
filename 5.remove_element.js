//! Problem 5: Remove Duplicates From Array

// Function name: removeDuplicates(arr)
// Statement:
// Return a new array where duplicate values are removed, keeping the original order.
// Test case 1
// Input:
// [5, 3, 5, 2, 3, 9, 2, 7]
// Output:
// [5, 3, 2, 9, 7]
// Test case 2
// Input:
// [1, 1, 1, 1]
// Output:
// [1]

//! Ans:

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let output = removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);
let output1 = removeDuplicates([1, 1, 1, 1]);

console.log(output);
console.log(output1);
