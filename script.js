function firstNonRepeatedChar(str) {
 // Write your code here
	// Step 1: Create a count object
    const charCount = {};

    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with frequency 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
