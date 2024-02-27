/*
 * 
 * Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

    Examples:
        "Hey fellow warriors"  --> "Hey wollef sroirraw" 
        "This is a test        --> "This is a test" 
        "This is another test" --> "This is rehtona test"
 */

package puzzle;

public class Puzzle20 {
    public static void main(String[] args) {
        System.out.println(spinWords("Hey fellow warriors"));
        System.out.println(spinWords("This is a test"));
        System.out.println(spinWords("This is another test"));
    }    

    public static String spinWords(String sentence) {
        String[] spaceSplitter = sentence.split(" ");
        String finalReversedResult = "";
        if(spaceSplitter.length > 0) {
            for (String string : spaceSplitter) {
                finalReversedResult += (string.length() >= 5 ? new StringBuilder(string).reverse() : string) + " ";
            }
        }
        return finalReversedResult.trim();
    }
}
