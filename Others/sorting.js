function bubbleSort(array){
    let swapped;
    do{
         swapped = false;
        for(let i=0 ; i<array.length ; i++){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true

            }
        }

    }while(swapped === true)
}

function insertionSort(array){
    for(let i=1 ; i<array.length ; i++){
        let numberToInsert = array[i];
        let j;
       for( j=i-1; j>=0 && array[j] > numberToInsert ; j--){
            array[j+1] = array[j]
       }
       array[j+1] = numberToInsert
        
    }
}



function selectionSort(array){
    for(let i=0 ; i<array.length ; i++ ){
        let minIndex = i;
        for(let j=i ; j<array.length ; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        [array[i],array[minIndex]] = [array[minIndex],array[i]]
    }
    return array;
}


function quickSort(array){
    while(array.length < 2){
        return array
    }
    let pivot = array[0];
    let leftArray = [];
    let rightArray = [];
    for(let i=1 ; i<array.length ; i++){
        if(array[i] < pivot){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
}


function mergedSort(array){
    if(array.length < 2){
        return array;
    }
    let mid = array.length/2;
    let leftArray = array.slice(0,mid)
    let rightArray = array.slice(mid);
    return join(mergedSort(leftArray),mergedSort(rightArray));
}

function join(leftArray,rightArray){
    let newArray = [];
    let i=0;
    let j=0;

    while(i<leftArray.length && j<leftArray.length){
        if(leftArray[i] < rightArray[j]){
            newArray.push(leftArray[i++]);
        }else{
            newArray.push(rightArray[j++]);
        }
    }

    while(i<leftArray.length){
        newArray.push(leftArray[i++]);
    }

    while(j<rightArray.length){
        newArray.push(rightArray[j++]);
    }

    return newArray;
}

let array = [12,10,100,90,150,-40,-70,1.5];
let sortedArray = mergedSort(array)
console.log(sortedArray);


