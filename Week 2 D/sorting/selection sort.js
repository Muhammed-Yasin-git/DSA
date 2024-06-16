function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
             [arr[min],arr[i]] = [arr[i],arr[min]]
    } return arr
}

let arr=[3,8,5,1,2,4,78,0]
console.log(selectionSort(arr));