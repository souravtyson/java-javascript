/*

Write a JavaScript function called sumOfPrimes that takes in a number n as a parameter and returns the sum of the first n prime numbers.

For example, if the input is 5, the function should return 28, because the sum of the first 5 prime numbers (2 + 3 + 5 + 7 + 11) is 28.

*/

function isPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (n == i) {
      return true;
    }
    if (n % i == 0) {
      return false;
    }
  }
}

function sumOfPrimes(n) {
  let count = 1;
  let sum = 0;
  let number = 2;
  while (count <= n) {
    if (isPrime(number)) {
      count++;
      sum = sum + number;
    }
    number = number + 1;
  }
  return sum;
}

console.log(sumOfPrimes(2));
