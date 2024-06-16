function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numbertoInsert =arr[i]
        let j = i-1
        while(j>=0 && arr[j]> numbertoInsert){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numbertoInsert
    }
}

let arr = [4,5,2,1,7,9,8,6,8]

insertionSort(arr)

// console.log(arr);

/////////////////////////////////

function insertionSortDescending(){
  for(let i = 1;i<arr.length;i++){
    let numbertoInsert = arr[i]
    let j = i-1
    while(j>=0 && arr[j]<numbertoInsert){
        arr[j+1] = arr[j]
        j = j-1
    }arr[j+1] = numbertoInsert
  }   
}
insertionSortDescending(arr);
// console.log(arr);

///////////////////////////////////