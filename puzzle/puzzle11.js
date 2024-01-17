/*
Write a JavaScript function called removeDuplicates that takes an array as input and returns a new array with all duplicate elements removed, leaving only the unique elements in the order they first appeared.

For example:
removeDuplicates([1, 2, 3, 4, 5]); // Should return [1, 2, 3, 4, 5], as all elements are unique
removeDuplicates([1, 2, 3, 4, 2]); // Should return [1, 2, 3, 4], removing the duplicate (2)
removeDuplicates(['apple', 'orange', 'banana', 'apple']); // Should return ['apple', 'orange', 'banana'], removing the duplicate 'apple'

*/

function removeDuplicates(arr) {
    if(arr.length === 0) {
        return []
    }
    return [...(new Set([...arr]))]
}

console.log(removeDuplicates([1, 2, 3, 4, 5]));
console.log(removeDuplicates([1, 2, 3, 4, 2]));