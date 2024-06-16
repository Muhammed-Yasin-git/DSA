function recursiveFactorial(n){
    if(n === 0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(5));  

let value = 'malayalam'
let a =true;
for(i=0;i<=value.length/2;i++){
    if(value[i]!=value[value.length-1-i]){
        a= false
    }
}
// console.log(a);
 
function palindrome(value,index=0){

    if(index>value.length/2){
        return true
    }
   
    if(value[index]!=value[value.length-1-index]){
        return false
    }
    return palindrome(value,index+1)
}

console.log(palindrome('malayalam'));

