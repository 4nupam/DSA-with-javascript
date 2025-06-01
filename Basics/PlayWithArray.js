// =========================================
// Array Utility Functions
// Author: Anupam 
// =========================================

// ---------- Largest Value ----------
function getLargestValue(arr) {
  return Math.max(...arr);
}
console.log(getLargestValue([3, 2, 1, 4, 98, 123, 45, 67, 89])); // 123

// ---------- Smallest Value ----------
function getSmallestValue(arr) {
  return Math.min(...arr);
}
console.log(getSmallestValue([3, 2, 1, 4, 98, 123, 45, 67, 89])); // 1

// ---------- Sort Ascending ----------
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
console.log(sortAscending([3, 2, 1, 4, 98, 123, 45, 67, 89]));

// ---------- Sort Descending ----------
function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
console.log(sortDescending([3, 2, 1, 4, 98, 123, 45, 67, 89]));

// ---------- Remove Duplicates ----------
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([3, 2, 1, 4, 89, 67, 4, 67, 89, 3, 2]));

// ---------- Sort Without Built-in Method (Bubble Sort) ----------
function bubbleSort(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}
console.log(bubbleSort([3, 2, 1, 4, 98, 123, 45, 67, 89]));

// ---------- Reverse Array ----------
function reverseArray(arr) {
  return [...arr].reverse();
}
console.log(reverseArray([3, 2, 1, 4, 98, 123, 45, 67, 89]));

// ---------- Sum of Elements ----------
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([3, 2, 1, 4, 98, 123, 45, 67, 89])); // 432

// ---------- Move All Zeros to End ----------
function moveZerosToEnd(arr) {
  return arr.filter(num => num !== 0).concat(arr.filter(num => num === 0));
}
console.log(moveZerosToEnd([2, 3, 0, 5, 34, 0, 0, 44, 0]));

// ---------- Rotate Array Right by 1 ----------
function rotateRight(arr) {
  if (arr.length === 0) return [];
  const newArr = [...arr];
  const last = newArr.pop();
  newArr.unshift(last);
  return newArr;
}
console.log(rotateRight([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]

// ---------- Rotate Array Left by 1 ----------
function rotateLeft(arr) {
  return arr.slice(1).concat(arr[0]);
}
console.log(rotateLeft([9, 3, 2, 1, 3, 4, 1, 0]));

// ---------- Find Kth Largest & Smallest ----------
function findKthElements(arr, kLargest, kSmallest) {
  const sorted = [...arr].sort((a, b) => a - b);
  return {
    kthLargest: sorted[sorted.length - kLargest],
    kthSmallest: sorted[kSmallest - 1],
  };
}
console.log(findKthElements([4, 3, 2, 5, 1], 2, 1)); // { kthLargest: 4, kthSmallest: 1 }

// ---------- Count Occurrences of Element ----------
function countOccurrences(arr, target) {
  return arr.filter(item => item === target).length;
}
console.log(countOccurrences([1, 2, 2, 3, 4, 5, 5, 5, 5, 6, 2, 6, 1], 5)); // 4
console.log(countOccurrences([1, 2, 2, 3, 4, 5, 5, 5, 5, 6, 2, 6, 1], 9)); // 0

// ---------- Check Array Equality (Ignoring Order) ----------
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort((a, b) => a - b);
  const sorted2 = [...arr2].sort((a, b) => a - b);
  return sorted1.every((val, index) => val === sorted2[index]);
}
console.log(areArraysEqual([2, 1, 4], [4, 1, 2])); // true
console.log(areArraysEqual([2, 1, 4], [4, 1, 3])); // false
