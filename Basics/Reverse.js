// --------------------- Reverse Entire String ---------------------
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse String:", reverseString("Orbexa")); 
// Output: "axebrO"

// --------------------- Reverse Word Order in Sentence ---------------------
function reverseWordsOrder(str) {
    return str.split(" ").reverse().join(" ");
}
console.log("Reverse Word Order:", reverseWordsOrder("orbexa is a good agency with a lot of experience")); 
// Output: "experience of lot a with agency good a is orbexa"

// --------------------- Capitalize First Letter of Each Word ---------------------
function capitalizeFirstChar(str) {
    return str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}
console.log("Capitalize First Char:", capitalizeFirstChar("orbexa is a good agency")); 
// Output: "Orbexa Is A Good Agency"

// --------------------- Capitalize Last Letter of Each Word ---------------------
function capitalizeLastChar(str) {
    return str.split(" ").map(function (word) {
        if (word.length === 0) return "";
        var lastChar = word.charAt(word.length - 1).toUpperCase();
        return word.slice(0, word.length - 1) + lastChar;
    }).join(" ");
}
console.log("Capitalize Last Char:", capitalizeLastChar("orbexa is a good agency with a lot of experience")); 
// Output: "orbexA iS a gooD agencY witH A loT oF experiencE"

// --------------------- Reverse Each Word in Sentence ---------------------
function reverseEachWord(str) {
    return str.split(" ").map(function (word) {
        return word.split("").reverse().join("");
    }).join(" ");
}
console.log("Reverse Each Word:", reverseEachWord("orbexa is a good agency with a lot of experience")); 
// Output: "axebro si a doog ycnega htiw a tol fo ecneirepxe"
