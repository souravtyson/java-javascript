/*
Write a program to find the factorial of a number.

Factorial of n is:

n! = n * (n-1) * (n-2) * (n-3)....* 1

Output the factorial of 'n'. If it does not exist, output 'Error'.

    Constraints:
        -10 <= n <= 12

        Sample Input 1 :
            5
        Sample Output 1 :
            120
            
            Explanation of Sample Input 1:
                5!=5*4*3*2*1=120

                Sample Input 2 :

                0

                Sample Output 2 :

                1

                Explanation of Sample Input 2:

                Its a fact that 0!=1

                Sample Input 3 :

                -2

                Sample Output 3 :

                Error

                Explanation of Sample Input 3:

                It's a fact that we can't find the factorial of a negative number.

*/


function fact(n){
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return "Error";
    }
    return n * fact(n-1)
}


console.log(fact(10));
console.log(fact(5));