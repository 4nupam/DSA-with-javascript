// =======================
// Largest Value in Array
// =======================
function largestValue(arr) {
    return Math.max(...arr);
}
console.log(largestValue([3, 2, 1, 4, 98, 123, 45, 67, 89])); // 123

// =======================
// Smallest Value in Array
// =======================
function smallestValue(arr) {
    return Math.min(...arr);
}
console.log(smallestValue([3, 2, 1, 4, 98, 123, 45, 67, 89])); // 1

// =======================
// Sort Array in Ascending Order
// =======================
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([3, 2, 1, 4, 98, 123, 45, 67, 89]));
// [1, 2, 3, 4, 45, 67, 89, 98, 123]

// =======================
// Sort Array in Descending Order
// =======================
function sortArrayDesc(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortArrayDesc([3, 2, 1, 4, 98, 123, 45, 67, 89]));
// [123, 98, 89, 67, 45, 4, 3, 2, 1]

// =======================
// Remove Duplicates from Array
// =======================
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([3, 2, 1, 4, 89, 67, 4, 67, 89, 3, 2]));
// [3, 2, 1, 4, 89, 67]

// =======================
// Sort Without Built-in Sort Method (Bubble Sort)
// =======================
function sortWithoutBuiltIn(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}
console.log(sortWithoutBuiltIn([3, 2, 1, 4, 98, 123, 45, 67, 89]));
// [1, 2, 3, 4, 45, 67, 89, 98, 123]

// =======================
// Reverse an Array
// =======================
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([3, 2, 1, 4, 98, 123, 45, 67, 89]));
// [89, 67, 45, 123, 98, 4, 1, 2, 3]

// =======================
// Sum of All Elements in Array
// =======================
function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfArray([3, 2, 1, 4, 98, 123, 45, 67, 89]));
// 432
