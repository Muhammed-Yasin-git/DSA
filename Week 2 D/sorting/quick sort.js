function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let centre = arr[arr.length-1]
    let left = []
    let right =[]

    for(i=0;i<arr.length-1;i++){
        if(arr[i]<centre){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),centre,...quickSort(right)]
}

let arr=[3,2,1,6,4,3,2,6,9,23]
console.log(quickSort(arr));