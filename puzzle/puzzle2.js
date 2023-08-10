/*
Write a JavaScript function called isAnagram that takes in two strings as parameters and returns true if the strings are anagrams of each other, and false otherwise. Anagrams are words or phrases formed by rearranging the letters of another, using all the original letters exactly once.

For example, if the input strings are "listen" and "silent", the function should return true, as these strings are anagrams of each other.

*/

// first solution from me

function isAnagram(str1, str2) {
  let sorted = str1
    .split('')
    .sort((s1, s2) => (s1 > s2 ? 1 : s1 < s2 ? -1 : 0))
    .join('');
  let sorted2 = str2
    .split('')
    .sort((s1, s2) => (s1 > s2 ? 1 : s1 < s2 ? -1 : 0))
    .join('');
  return sorted == sorted2;
}

// This solution has a time complexity of O(n log n) due to the sorting operation.

//better solution

function isAnagramBetter(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let charFrequency = {};

  for (let c of str1) {
    if (charFrequency[c]) {
      charFrequency[c] = charFrequency[c] + 1;
    } else {
      charFrequency[c] = 1;
    }
  }
  for (let ch of str2) {
    if (!charFrequency[ch]) {
      return false;
    }
    charFrequency[ch] = charFrequency[ch] - 1;
  }
  return true;
}

console.log(isAnagramBetter('listen22', 'silent22'));
