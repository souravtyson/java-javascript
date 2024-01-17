/*
Write a JavaScript function called findMissingNumber that takes an array of integers from 1 to N (inclusive), where N is the length of the array plus one, and returns the missing number.

For example:
findMissingNumber([1, 2, 4, 5, 6]); // Should return 3, as 3 is the missing number
findMissingNumber([1, 2, 3, 4, 6]); // Should return 5, as 5 is the missing number

*/

function findMissingNumber(nums) {
    if(nums.length > 1) {
        let nthElement = nums[nums.length - 1]
        let sum = (nthElement * (nthElement + 1)) / 2
        let acc = 0
        let total = nums.reduce((acc, elem) => {acc = acc + elem; return acc;}, acc)
        return sum - total
    } 
}

console.log(findMissingNumber([1, 2, 4,5, 6]));
console.log(findMissingNumber([1, 2, 3, 4, 6]));
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Should return 3
console.log(findMissingNumber([1, 2, 3, 4, 6])); // Should return 5
console.log(findMissingNumber([1])); // Should return undefined, as there's no missing number
console.log(findMissingNumber([])); // Should return undefined, as there's no missing number
console.log(findMissingNumber([2, 3, 4, 5, 6])); // Should return 1, as 1 is the missing number
console.log(findMissingNumber([1, 3, 4, 5, 6])); // Should return 2, as 2 is the missing number
