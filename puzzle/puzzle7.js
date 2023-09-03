/*
Write a JavaScript function called findDuplicates that takes an array as input and returns an array containing all the duplicate elements from the input array. The order of elements in the output array doesn't matter, and each duplicate element should appear only once.

For example, if the input array is [1, 2, 2, 3, 4, 4, 5], the function should return [2, 4].

*/

// 1st approach
function findDuplicates(arr) {
  // Your code goes here
  let set = new Set();
  const a = [];
  if (arr.length == 0 || arr.length == 1) {
    return a;
  }
  for (let x of arr) {
    if (set.has(x)) {
      a.push(x);
    } else {
      set.add(x);
    }
  }
  return a;
}

// 2nd approach
function findDuplicates2(arr) {
  const a = [];
  const obj = arr.reduce((acc, elem) => {
    if (acc.hasOwnProperty(elem)) {
      a.push(elem);
      acc[elem] = acc[elem] + 1;
    } else {
      acc[elem] = 1;
    }
    return acc;
  }, {});
  return a;
}

const array = [1, 2, 2, 3, 4, 4, 5];
console.log(findDuplicates(array));
console.log(findDuplicates2(array));
