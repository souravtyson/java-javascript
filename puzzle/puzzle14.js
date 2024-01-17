/*
Write a JavaScript function called capitalizeWords that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized.

For example:
capitalizeWords('hello world'); // Should return 'Hello World'
capitalizeWords('this is a test'); // Should return 'This Is A Test'

*/

function capitalizeWords(sentence) {
    if (!sentence) {
        return sentence
    }
    const sentenceToArr = sentence.split(" ")
    if (sentenceToArr.length > 0) {
        return sentenceToArr.map(word => word[0].toUpperCase() + word.substring(1, word.length)).join(" ")
    }
    return sentence;
}

console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('this is a test'))
console.log(capitalizeWords('a'));
console.log(capitalizeWords(''));
console.log(capitalizeWords('JavaScript is awesome'));
console.log(capitalizeWords());