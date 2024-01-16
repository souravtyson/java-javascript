/*

Write a JavaScript function called hasDuplicates that takes an array as input and returns true if the array contains any duplicate elements, and false otherwise.

For example:
console.log(hasDuplicates([])); // Should return false, an empty array has no duplicates
console.log(hasDuplicates([1])); // Should return false, an array with a single element has no duplicates
console.log(hasDuplicates([1, 2, 3, 4, 5])); // Should return false, all elements are unique
console.log(hasDuplicates([1, 2, 3, 4, 2])); // Should return true, there's a duplicate (2) in the array
console.log(hasDuplicates(['apple', 'orange', 'banana', 'apple'])); // Should return true, 'apple' is duplicated
console.log(hasDuplicates([true, false, true])); // Should return true, true is duplicated
console.log(hasDuplicates(['cat', 'dog', 'bird', 'dog'])); // Should return true, 'dog' is duplicated


*/

function hasDuplicates(arr) {
  const freq = {}
  for(let i of arr) {
    if(freq[i] && freq[i] > 0) {
        return true
    } else {
        freq[i] = 1
    }
  }
  return false;
}

console.log(hasDuplicates([1, 2, 3, 4, 5]))
console.log(hasDuplicates([1, 2, 3, 4, 2]))
console.log(hasDuplicates(['apple', 'orange', 'banana', 'apple']))
console.log(hasDuplicates([]));
console.log(hasDuplicates([1]));
console.log(hasDuplicates([true, false, true]));
console.log(hasDuplicates(['cat', 'dog', 'bird', 'dog']));