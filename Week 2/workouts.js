// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }

// let arr = [3,1,2,7,4,3,2]
// bubbleSort(arr)
// console.log(arr);

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min=i
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         if(min!==i){
//             [arr[i],arr[min]] = [arr[min],arr[i]]
//         }
//     }return arr
// }
// let arr = [3,1,2,7,4,3,2]

// console.log(selectionSort(arr));

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numtoInsert = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>numtoInsert){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1] = numtoInsert
//     }
// }
// let arr = [3,1,2,7,4,3,2]
// insertionSort(arr)
// console.log(arr);

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))

// }

// function merge(left,right){
//     let sortedArr = []
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortedArr.push(left.shift())
//         } else {
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }

// let arr = [3,1,2,7,4,3,2]
// console.log(mergeSort(arr));

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let center = arr[arr.length-1]
//     let left =[]
//     let right =[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<center){
//             left.push(arr[i])
//         } else{
//             right.push(arr[i])                
//         }
    
//     }
//     return [...quickSort(left),center,...quickSort(right)]

// }


// let arr = [3,1,2,7,4,3,2]
// console.log(quickSort(arr));


///////////////////////////////////////////

class Stack{
    constructor(){
        this.list = []
       
    }
    push(element){
        this.list.push(element)
        
    }
    pop(){
        return this.list.pop()
    }
    isEmpty(){
        return this.list.length === 0
    }
    peek(){
        if(!this.isEmpty){
            return this.list[0]
        } else {
            return null
        }
    }
    display(){
        console.log(this.list.toString());
    }

}



function reverseString(str) {
    const stack = new Stack();
    // Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedString = '';
    // Pop each character from the stack to construct the reversed string
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }
    return reversedString;
}

console.log(reverseString("helllloo hiiii"));
////////////////////////////////////////////////

// class Queue{
//     constructor(){
//         this.items =[]
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         } else{
//             return null
//         }
//     }
//     isEmpty(){
//         this.items.length === 0
//     }
//     print(){
//         console.log(this.items.toString());
//     }
    
// }

// const queue = new Queue()

// queue.enqueue(8)
// queue.enqueue(8)
// queue.enqueue(8)
// queue.enqueue(8)
// queue.print()
// console.log(queue.dequeue());

/////////////////////////////////////////////
// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }

//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear++
//     }
//     dequeue(){
//         const deleted = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return deleted
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     isEmpty(){
//         return this.rear - this.front === 0
//     }
//     getSize(){
//         return this.rear-this.front
//     }
//     display(){
//         console.log(this.items);
//     }
// }

// const queue = new Queue()

// queue.enqueue(7)
// queue.enqueue(7)
// queue.enqueue(7)
// queue.display()


////////////////////////////////////////////////////

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         } else{
//             let sameKey = bucket.find(item=>item[0]=== key)
//             if(sameKey){
//                 samekey[1]= value
//             }else{
//                 bucket.push([key,value])
//             }
//         } 
//     }
//     get(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 return samkey[1]
//             }
//         } return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0] === key)
//             if(samekey){
//                 bucket.splice(bucket.indexof(sameKey),1)
//             }
//         }return undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table = new HashTable(50)

// table.set("name","Yasin")
// table.set("naem","Hello")
// table.display()

///////////////////////////////////////////////////////

// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0;
//         this.rear = 0;
//     }
//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear++
//     }
//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     peek(){
//         return this.items[this.front]
//     }

// }





///////////////////////////////////////////

// function quickSort(arr)hgygygyugiug
//     if(arr.length<2){
//         return arr
//     }

//     let center = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<center){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),center,...quickSort(right)]
// }

// let arr =[2,5,3,2,4,5]
// console.log(quickSort(arr));