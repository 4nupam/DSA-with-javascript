//Find the subarray with a given sum (positive numbers)
function subarray(arr, target) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log(arr[i], arr[j]);
                found = true;
            }
        }
    }
    if (!found) {
        console.log(false);
    }
}

subarray([1, 2, 3, 4, 5, 6], 10);


// Kadane’s Algorithm – Maximum Subarray Sum
function Kadane(arr){
    let res = arr[0] + arr[1]; // Start with first pair
    for(let i = 1; i < arr.length - 1; i++){
        let sum = arr[i] + arr[i+1];
        if(sum > res){
            res = sum;
        }
    }
    return res;
}
console.log(Kadane([2, -1, 3, -5, 3, 7])); // Output: 10 (3 + 7)

// Find the longest subarray with sum = 0
function longestZeroSumSubarray(arr) {
    let map = new Map();
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            maxLen = i + 1;
        }

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxLen;
}


// Find the missing number in an array from 1 to N
function sun(arr) {
    var res = arr.sort((a, b) => a - b);
    for (var i = 0; i < res.length - 1; i++) {
        if (res[i] + 1 !== res[i + 1]) {
            return res[i] + 1; // Missing number
        }
    }
    return false; // No missing number found in sequence
}

console.log(sun([6, 3, 2, 4,  1, 9, 8, 7]));  // Output: 5 

