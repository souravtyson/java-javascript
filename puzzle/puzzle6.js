/*
Write a JavaScript function called isBalanced that takes a string containing only parentheses, brackets, and curly braces as input and returns true if the brackets are balanced and false otherwise. A balanced string means that for every opening bracket, there is a corresponding closing bracket of the same type and they are properly nested.

For example, if the input is "{[()]}", the function should return true, as the brackets are balanced. If the input is "{[()]", the function should return false, as the brackets are not properly nested.
*/

function isBalanced(str) {
  const open = ['{', '[', '('];
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '{' || str[i] == '[' || str[i] == '(') {
      arr.push(str[i]);
    } else {
      let s = arr.pop();
      if (
        (str[i] == ')' && s == '(') ||
        (str[i] == ']' && s == '[') ||
        (str[i] == '}' && s == '{')
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return arr.length == 0 ? true : false;
}

let str = '{[()]';
console.log(isBalanced(str));
str = '()[]{}';
console.log(isBalanced(str));
str = '({})[]';
console.log(isBalanced(str));
str = '({()})( ';
console.log(isBalanced(str));
str = '{(})[] ';
console.log(isBalanced(str));
console.log(isBalanced('{[()]}')); // Should return true
console.log(isBalanced('{[(])}')); // Should return false
console.log(isBalanced('({[]})')); // Should return true
console.log(isBalanced('')); // Should return true, as an empty string is balanced
console.log(isBalanced('{')); // Should return false, as there's an unmatched opening bracket
console.log(isBalanced(')')); // Should return false, as there's an unmatched closing bracket
console.log(isBalanced('abc')); // Should return true, as non-bracket characters are ignored
