/*
Write a JavaScript function called sortByStringLength that takes an array of strings as input and returns a new array of strings sorted by their length, from shortest to longest.

For example:

sortByStringLength(['apple', 'banana', 'kiwi', 'orange']); // Should return ['kiwi', 'apple', 'orange', 'banana']
sortByStringLength(['dog', 'cat', 'elephant', 'lion']); // Should return ['cat', 'dog', 'lion', 'elephant']

*/

/*

earlier solution

export const sortByStringLength = (strings) => {
    if (strings.length <= 1) {
      return strings;
    }
  
    const middle = Math.floor(strings.length / 2);
    const left = strings.slice(0, middle);
    const right = strings.slice(middle);
  
    return merge(sortByStringLength(left), sortByStringLength(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].length < right[rightIndex].length) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
*/


function sortByStringLength(strings) {
    return strings.sort((s1, s2) => s1.length - s2.length)
}

console.log(sortByStringLength(['apple', 'banana', 'kiwi', 'orange'])); // Should return ['kiwi', 'apple', 'orange', 'banana']
console.log(sortByStringLength(['dog', 'cat', 'elephant', 'lion'])); // Should return ['cat', 'dog', 'lion', 'elephant']
console.log(sortByStringLength(['a', 'bb', 'ccc', 'dddd'])); // Should return ['a', 'bb', 'ccc', 'dddd']
console.log(sortByStringLength([])); // Should return an empty array, as there are no strings
console.log(sortByStringLength(['xyz'])); // Should return ['xyz'], as there's only one string
