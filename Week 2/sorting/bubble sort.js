function bubbleSort() {
    let swapped
    do{
        swapped = false
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = true
        }
       }
    }while(swapped)
    
}

// let arr = [2, 17, 1, 54, 21, 22, 2]
// bubbleSort(arr)
// console.log(arr);

/////////////////////////////////////

function bubbleSortReversed(){
    let swapped
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i] 
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
    }while(swapped)
}

let arr = [2, 17, 1, 54, 21, 22, 2]
bubbleSortReversed(arr)
console.log(arr);