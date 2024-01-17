/*
Write a JavaScript function called findPairs that takes an array of integers and a target sum as input, and returns an array of pairs of numbers that add up to the target sum. Each pair should be represented as an array.

For example:
findPairs([1, 2, 3, 4, 5], 6); // Should return [[1, 5], [2, 4]], as 1+5=6 and 2+4=6
findPairs([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10); // Should return [[1, 9], [4, 6], [5, 5]], as several pairs add up to 10

*/

function findPairs(arr, targetSum) {
    const numToIndex = {}
    let pairs = [];
    for (let i = 0;i < arr.length; i++) {
        let complementary = targetSum - arr[i]
        if(numToIndex[complementary] !== undefined) {
            pairs.push([complementary, arr[i]])
            delete numToIndex[arr[i]]
        } else {
            numToIndex[arr[i]] = i
        }
    }
    return pairs
}
  
console.log(findPairs([1, 2, 3, 4, 5], 6))
console.log(findPairs([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10))
console.log(findPairs([1, 2, 3, 4, 5], 10));
console.log(findPairs([2, 4, 6, 8, 10], 7));