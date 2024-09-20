/*
Problem statement
Given three values - Start Fahrenheit Value (S), End Fahrenheit value (E) and Step Size (W), 
you need to convert all Fahrenheit values from Start to End at the gap of W, into their corresponding Celsius 
values and print the table.

Constraints :
0 <= S <= 90
S <= E <=  900
0 <= W <= 80 
Sample Input 1:
0 
100 
20
Sample Output 1:
0   -17
20  -6
40  4
60  15
80  26
100 37

*/


function Fahrenheit_to_Celsius(start , end , step){
		
    /* Write your code here
   No need to specify return type 
   Input is already taken care of, you have to print the output statements accordingly */
   for (let i = start; i <= end; i = i + step){
       let celcius = ((i - 32) * 5) / 9;
       console.log(i + " " + parseInt(celcius));
   }
}

Fahrenheit_to_Celsius(36,618,78);
Fahrenheit_to_Celsius(29,221,55);
Fahrenheit_to_Celsius(90,432,31);