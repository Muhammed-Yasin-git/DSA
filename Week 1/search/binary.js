function binarySearch(arr,target) {
    let left = 0
    let right = arr.length-1
    
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target === arr[mid]){
            return mid
        }
        if(target<arr[mid]){
            right = mid-1
        }else{
            left = mid+1
        }
    } return -1
}

let array = [2,4,5,6,7,8,9,10]

console.log("target found at : ",binarySearch(array,7));