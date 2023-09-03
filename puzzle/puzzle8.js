/*
Write a JavaScript function called flattenArray that takes a nested array as input and returns a new array with all the elements flattened, such that there are no nested arrays within the result. The order of elements in the output array should follow a depth-first traversal of the input nested array.

For example, if the input is [1, [2, [3, 4], 5], 6], the function should return [1, 2, 3, 4, 5, 6].

*/

//1st approach
function flattenArray(arr) {
  // Your code goes here
  return arr.flat(Infinity);
}

//2nd approach
const flatArray = [];
function flattenArray2(arr) {
  for (let x of arr) {
    if (Array.isArray(x)) {
      flattenArray2(x);
    } else {
      flatArray.push(x);
    }
  }
}



const array = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(array));
flattenArray2(array);
console.log(flatArray);





// 3rd approach
function flatterArray3(arr, []) {
  return arr.reduce((acc, elem) => {
    if (Array.isArray(elem)) {
      flatterArray3(elem, acc);
    } else {
      acc.push(elem);
    }
  }, []);
}
console.log(flatterArray3(array,[]``))