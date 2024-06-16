

function linear(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
            return i
        }
    }
    return -1
}
let array = [1,2,3,4,5,6]
console.log("target found at position : ",linear(array,1));

