/*
Problem statement
You have been given a number 'N'. Your task is to find the sum of all even numbers from 1 to 'N' (both inclusive).

Example :

Given 'N' : 6
Sum of all even numbers till 'N' will be : 2 + 4 + 6 = 12
*/


function sum(n) {
    /* Write your code here, No need to specify return type Input and output already taken care of, you have to just return the output variable */
    let initial = 1;
    let sum = 0;
    while (initial <= n) {
        if (initial % 2 === 0) {
            sum = sum + initial;
        }
        initial++;
    }
    return sum;
}

console.log(sum(6));
console.log(sum(45));