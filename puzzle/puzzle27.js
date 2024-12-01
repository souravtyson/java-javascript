/*
Write a function to find the first non-repeating character in a string and return its index. If all characters repeat, return -1.
Input: "loveleetcode"
Output: 2 (The first non-repeating character is 'v')

*/ 

function firstNonRepeatingCharacter(input) {
    for(let i = 0; i < input.length; i++) {
        let char = input[i];
        let currentIndex = input.indexOf(char);
        let latterIndex = input.indexOf(char, currentIndex + 1);
        if(latterIndex === -1) {
            return currentIndex;
        }
    }
    return -1;
}

const input = "loelveetcode";

console.log(firstNonRepeatingCharacter(input));
console.log(firstNonRepeatingCharacter("loveleetcode"));
console.log(firstNonRepeatingCharacter("aabbcc"));
console.log(firstNonRepeatingCharacter("a"));
console.log(firstNonRepeatingCharacter(""));
console.log(firstNonRepeatingCharacter("abcdef"));
console.log(firstNonRepeatingCharacter("abcabc"));
console.log(firstNonRepeatingCharacter("abcabcabc"));
console.log(firstNonRepeatingCharacter("oooooo"));
console.log(firstNonRepeatingCharacter("abcabcabcabc"));