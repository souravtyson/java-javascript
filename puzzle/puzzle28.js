/**
 * Write a function to find the longest substring without repeating characters in a given string. Return the length of this substring.
 * 
Input: "abcabcbb"  
Output: 3 (The substring is "abc")  

Input: "bbbbb"  
Output: 1 (The substring is "b")  

 */

function longestSubstringWithoutRepeating(input) {
    let charSet = new Set();
    let maxSubtring = 0; 
    let left = 0
    for(let right=0; right < input.length; right++) {
        while(charSet.has(input[right])) {
            charSet.delete(input[left])
            left++
        }
        charSet.add(input[right]);
        maxSubtring = Math.max(maxSubtring, charSet.size)
    }
    return maxSubtring;
}


// other solution 

function longestSubstringWithoutRepeating2(input) {
    let charSet = new Set();
    let maxSubtring = 0; 
    let left = 0
    for(let right=0; right < input.length; right++) {
        while(charSet.has(input[right])) {
            charSet.delete(input[left])
            left++
        }
        charSet.add(input[right]);
        maxSubtring = Math.max(maxSubtring, right - left + 1)
    }
    return maxSubtring;
}



console.log(longestSubstringWithoutRepeating("abcbabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeating("abcbdabcbb"));
console.log(longestSubstringWithoutRepeating("abcabcbb"));
console.log(longestSubstringWithoutRepeating("bbbbb"));
console.log(longestSubstringWithoutRepeating("pwwkew"));
console.log(longestSubstringWithoutRepeating(""));
console.log(longestSubstringWithoutRepeating("dvdfabcdabcdefg"));
console.log(longestSubstringWithoutRepeating("abcdef"))

