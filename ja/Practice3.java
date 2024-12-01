// Question: How could you use the CalculateSum interface in a Java Stream to calculate the sum of integers in a list?

import java.util.Arrays;
import java.util.List;

@FunctionalInterface
interface CalculateSum {
   abstract int sum(int a, int b);
}


public class Practice3 {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1,2,3,4,5);
    }
}
