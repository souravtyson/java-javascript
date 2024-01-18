/*
Write a JavaScript function called findSubstrings that takes a string as input and returns an array containing all possible substrings of the input string.

For example:
findSubstrings('abc'); // Should return ['a', 'ab', 'abc', 'b', 'bc', 'c'], all possible substrings
findSubstrings('hello'); // Should return ['h', 'he', 'hel', 'hell', 'hello', 'e', 'el', 'ell', 'ello', 'l', 'll', 'llo', 'l', 'lo', 'o'], all possible substrings

*/

// my solution
/*
function findSubstrings(str) {
    const substr = []
    for(let i = 0; i < str.length; i++) {
        for (let k = i; k < str.length; k++) {
            substr.push(str.substring(i, k + 1))
        }
    }
    return substr
}
*/

// recommended solution 
function findSubstrings(str) {
    const substr = [];
    for (let i = 0; i < str.length; i++) {
        for (let k = i; k < str.length; k++) {
            substr.push(str.slice(i, k + 1));
        }
    }
    return substr;
}

  
console.log(findSubstrings('abc'))
console.log(findSubstrings('hello'))