let arr1=[19,7,8,9,11,17]
let newElement =97




///////////////////////////////////////

function calculateSum(arr){
    let sum=0
    for (let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}

////////////////////////////////////////

function hello(arr) {
    let v;
    return v = arr[5]
}

///////////////////////////////////////

function twoArray(arr1,arr2) {
    let sum = []
    for(let i=0;i<arr1.length;i++){
        for (let j = i+1; j < arr1.length; j++) {
           sum.push(arr1[i]+arr1[j])     
        }
        
    }
    return sum
}     

/////////////////////////////////////////

function print(arr,newElement) {
        arr.shift(1)
    return arr
}

////////////////////////////////////////

function sumTen(arr){
    let newarr =[]
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==10){
                newarr.push(arr[i],arr[j])
            }
        }
    } return newarr.sort((a,b)=>a-b)
}
 
////////////////////////////////////////
function makeLast(arr) {
    let fives =arr.filter((value)=> value===5)
    let notfives =arr.filter((value)=> value!==5)

    return notfives.concat(fives)
}

///////////////////////////////////////
 
function fibonacci(n){
     const  fib =[0,1]
    for(let i=2;i<=n;i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib
}

// console.log(fibonacci(6));

//////////////////////////////////////

function factorial (n){
    let result =1
    for(i=2;i<=n;i++){
        result*=i
    } 
    return result

}
///////////////////////////////////////

function primeNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 1) {
            continue;
        }
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

///////////////////////////////////////

function powerOfTwo(arr) {
    let newarr =[]
   for(let i=0;i<arr.length;i++){ 
    let n = arr[i]
    if(n<1){
        continue
    }

    while(n>1){
        if(n%2!==0){
            break;
        }
        n=n/2
    }
    if(n===1){
        newarr.push(arr[i])
    }
 } return newarr
}


function powerEasy(n){

    let newarr =[]
    for(i=0;i<arr.length;i++){
        n=arr[i]
        if(n<1){
            continue
            
        }
       if((n & (n - 1)) === 0){
        newarr.push(arr[i])
       }
    } return newarr
    

}
// console.log(powerEasy(arr));

//////////////////////////////////////

function recursiveFibonnacci(n){

    if(n<2){
        return n
    }
    return recursiveFibonnacci(n-1)+recursiveFibonnacci(n-2)
}

console.log(recursiveFibonnacci(6));

///////////////////////////////////////////////////////////////

// let arr=[50,5,2,3,5,16,5,7,13,8,4,5]

// console.log(powerEasy(arr));

///////////////////////////////////////