function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let center = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<center){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),center,...quickSort(right)]
}

let arr = [-1,10,2,47,25,2,3,4]
// console.log(quickSort(arr));

function quickSortDescending(arr){
    if(arr.length<2){
        return arr
    }
     let center = arr[arr.length-1]
     let left = []
     let right = []

     for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>center){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
     }
     return [...quickSortDescending(left),center,...quickSortDescending(right)]
}

console.log(quickSortDescending(arr));