function rotate(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        str1 = str1.slice(1) + str1[0]; // rotate string
        if (str1 === str2) {
            return true;
        }
    }

    return false; // no match found after full rotation
}

console.log(rotate("abc", "bca")); // true
console.log(rotate("abc", "cab")); // true
console.log(rotate("abc", "cba")); // false

// optimised way 

function rotateOptimized(str1, str2) {
    if (str1.length !== str2.length) return false;

    const doubled = str1 + str1;
    return doubled.includes(str2);
}

console.log(rotateOptimized("abc", "bca")); // true
console.log(rotateOptimized("abc", "cab")); // true
console.log(rotateOptimized("abc", "cba")); // false
