// function for substring of a string
function substring(str){
    if(str.length ===0){
        return[]
    }
    if(str.length === 1){
        return [str]
    }
    let result = [];
    for(var i = 0 ;  i<=str.length ; i++){
        for(var j=i+1; j<= str.length ; j++){
            result.push(str.slice(i,j))
        }
    }
   return result

}
console.log("Substrings:", substring("abc")); // Output: [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]