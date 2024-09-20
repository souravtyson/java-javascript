/*
Problem statement
Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.

Digits mean numbers, not places! That is, if the given integer is "132456", even digits are 2, 4, and 6, and odd digits are 1, 3, and 5.

Constraints
0<= 'n' <=10000

Example :
Input: 'n' = 132456

Output: 12 9

Explanation:
The sum of even digits = 2 + 4 + 6 = 12
The sum of odd digits = 1 + 3 + 5 = 9
*/

function even_odd_sum(num) {

    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output array */

    //Return an array of evensum & oddsum like {evensum , oddsum};
    const digits = num.toString().split('').map(Number);
    const { evensum, oddsum } = digits.reduce((acc, d) => {
        if (d % 2 === 0) {
            acc.evensum += d
        } else {
            acc.oddsum += d
        }
        return acc;
    }, {evensum:0, oddsum:0});

    return [evensum, oddsum]
}


function even_odd_sum_2(num){
    let evensum = 0;
    let oddsum = 0;
    while (num != 0) {
        let remainder = num % 10;
        if ((remainder % 2) === 0) {
            evensum += remainder;
        } else {
            oddsum += remainder;
        }
        num = Math.floor(num / 10);
    }

    return [evensum, oddsum];
}

console.log(even_odd_sum(430))
console.log(even_odd_sum(228900))
console.log(even_odd_sum(49901999))