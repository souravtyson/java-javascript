/*
 * Can you show how you would use a functional interface in Java with a practical example? You can use a lambda expression for implementation.
 */


@FunctionalInterface
interface CalculateSum {
   abstract int sum(int a, int b);
}


public class Practice2 {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        CalculateSum x = (a, b) -> a + b;

        System.out.println(x.sum(1,2));
    }
 }