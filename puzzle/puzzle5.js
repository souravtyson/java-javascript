/*
Write a JavaScript function called reverseArray that takes an array as input and returns a new array with the elements reversed. The original array should remain unchanged.

For example, if the input array is [1, 2, 3, 4, 5], the function should return [5, 4, 3, 2, 1], leaving the original array [1, 2, 3, 4, 5] unchanged.
*/

function reverseArray(arr) {
  // Your code goes here
  const revArray = [];
  for (let x = arr.length - 1; x >= 0; x--) {
    revArray.push(arr[x]);
  }
  return revArray;
}

const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));
