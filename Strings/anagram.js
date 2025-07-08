// check for anagram

function isAnagram(str1, str2) {
    var sortedstr1 = str1.split("").sort().join("");
    var sortedstr2 = str2.split("").sort().join("");
    return sortedstr1 === sortedstr2;

}
console.log("Is Anagram:", isAnagram("listen", "silent")); // Output: true
console.log("Is Anagram:", isAnagram("hello", "world")); // Output: false