function recursiveFibonnacci(n){

    if(n<2){
        return n
    }
    return recursiveFibonnacci(n-1)+recursiveFibonnacci(n-2)
}

console.log(recursiveFibonnacci(6));


