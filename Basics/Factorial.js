// Factorial of the number
function Factorial(num){
if(num === 0 || num === 1){
    return num
}
else{
    var result = 1;
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}
}
console.log(Factorial(5)); // 120
console.log(Factorial(0)); // 1
console.log(Factorial(1)); // 1
console.log(Factorial(10)); // 3628800