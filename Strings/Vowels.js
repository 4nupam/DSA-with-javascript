//  code to check number of vowels in a string
function vowelsCheck(str) {
    const vowels = "aeiouAEIOU";
    let count = 0
    let total_words = 26

    for (var i = 0; i <= vowels.length; i++) {
        if (str.includes(vowels[i])) {
            count++;
        }
    }
    console.log("Total Vowels:", count);
    console.log("total consonent:-", total_words - count);
    return count;

}
console.log("Vowels Count:", vowelsCheck("anupam"));