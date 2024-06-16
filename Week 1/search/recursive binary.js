function recursiveBinary(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex) {
    if(leftIndex>rightIndex){
        return null
    }

    let mid = Math.floor((leftIndex+rightIndex)/2)
    if(target === arr[mid]){
        return mid
    }
    if(target<arr[mid]){
       return search(arr,target,leftIndex,mid-1)
    }else{
       return search(arr,target,mid+1,rightIndex)
    }

}

let arr = [2,3,4,5,6,7,8,9]

console.log("target found at :",recursiveBinary(arr,7));