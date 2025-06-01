function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(palindrome("Orbexa")); // false
console.log(palindrome("racecar")); // true

// now we can test the function with more examples intger
function testPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

console.log(testPalindrome(121)); // true
console.log(testPalindrome(123)); // false
