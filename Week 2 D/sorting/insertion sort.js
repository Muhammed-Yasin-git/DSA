function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numbertoInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>numbertoInsert ){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numbertoInsert
    }
    return arr
}
let arr = [3,2,1,7,54,3,4]

console.log(insertionSort(arr));