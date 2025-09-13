function firstNonRepeatedChar(str) {
 // Write your code here
	// Step 1: Create a count object
    const charCount = {};

    // Step 2: Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 3: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
		return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
