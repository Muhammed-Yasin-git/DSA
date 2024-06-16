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
//         }else{
//             let sameKey = bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 sameKey[1] = value
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
//                 return sameKey[1]
//             }
//         } return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         } return undefined
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
// table.set("yasin","life")
// table.set("yasni","lie")
// table.display()


///////////////////////SORTING//////////////////////////////////////////////////////////////


// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//             }
//         }
        
//     } while (swapped);
// }

// bubbleSort(arr);


///////////////////////////////////////////////////////////
// function mergeSort(arr){
     
//     if(arr.length<2){
//         return arr
//     }

//      let mid = Math.floor(arr.length/2)
//      let left = arr.slice(0,mid)
//      let right = arr.slice(mid)

//      return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sortedArr =[]
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }

//     return [...sortedArr,...left,...right]
// }


/////////////////////////////////////////////////

// function quickSort(arr) {
//     if(arr.length<2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left =[]
//     let right =[]
    
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }

//     }
//         return [...quickSort(left),pivot,...quickSort(right)]

// }


///////////////////////////////////////////////

// function selectionSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         [arr[min],arr[i]] = [arr[i],arr[min]]

//     }return arr
// }


/////////////////////////////////////////////////

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let numbertoInsert = arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoInsert){
//             arr[j+1] =arr[j]
//             j=j-1
//         }
//         arr[j+1] = numbertoInsert
//     } return arr
// }



// let arr = [8,10,2,4,1,7,5,3,6]
// console.log(insertionSort(arr));


///////////////////HASH TABLE////////////////////////////


// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         let bucket =this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKey = bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 sameKey[1] = value
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
//                 return sameKey[1]
//             }
//         }return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKey = bucket.find(item=>item[0]===key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
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
// table.set("yasin","helloWorld")
// table.set("yasni","hed")
// table.set("yaisn","helrld")
// table.display()
// table.remove("yasni")
// table.display()
// console.log(table.get("yaisn"));


/////////////////LINKED LIST////////////////////////////////

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(data){
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(!this.top){
            return console.log('Stack underflow');
        }
        const currentValue = this.top.data;
        this.top = this.top.next;
        return currentValue;
    }
    

    display(){
        if(!this.top){
            return console.log('Stack underflow');
        }
        let currentNode = this.top;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

class Queue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(data){
        this.s1.push(data);
    }

    dequeue(){
        if(this.s1.top && !this.s2.top){
            while(this.s1.top){
                this.s2.push(this.s1.pop());
            }
        }

        if(!this.s2.top){
            return console.log('List is empty');
        }

        return this.s2.pop();
    }

    display(){
        if(this.s1.top && !this.s2.top){
            while(this.s1.top){
                this.s2.push(this.s1.pop());
            }
        }

        if(!this.s2.top){
            return console.log('List is empty');
        }

        this.s2.display();
    }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

console.log(queue.dequeue());
queue.enqueue(8);
// console.log(queue.dequeue());

queue.display();