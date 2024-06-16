function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }   
            [arr[min],arr[i]] = [arr[i],arr[min]]      
    }
    return arr
}

const arr =[32,12,33,36,7,89]

console.log(selectionSort(arr));