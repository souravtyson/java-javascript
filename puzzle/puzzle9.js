/*
Write a JavaScript function called findCommonElements that takes in two arrays and returns a new array containing all the elements that are common between the two arrays. The order of the elements in the output array doesn't matter, and each element should appear only once.

For example, if the two input arrays are [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
*/

// this was my solution
function findCommonElements(arr1, arr2) {
  const common = [];
  if (arr1.length > arr2.length) {
    arr2.forEach((element) => {
      if (arr1.includes(element)) {
        common.push(element);
      }
    });
  } else {
    arr1.forEach((elem) => {
      if (arr2.includes(elem)) {
        common.push(elem);
      }
    });
  }
  return common;
}

// The advantage of using a Set is that it automatically ensures that only unique elements are stored, avoiding duplicates. Additionally, the Set has better lookup time complexity than using the includes method on an array. This results in a more efficient solution, especially when dealing with larger arrays.

function findCommonElements2(arr1, arr2) {
  const common = new Set();

  for (const element of arr1) {
    if (arr2.includes(element)) {
      common.add(element);
    }
  }

  return Array.from(common);
}

const a1 = [1, 2, 3, 4, 5, 22];
const a2 = [3, 4, 5, 6, 7, 22];
console.log(findCommonElements(a1, a2));
