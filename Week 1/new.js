function recursiveBinary(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
   

if(left>right){
    return null
}
let mid  = Math.floor((left+right)/2)
if(target === arr[mid]){
    return mid
}

if(target<arr[mid]){
    return search(arr,target,left,mid-1)
}else{
    return search(arr,target,mid+1,right)
}
}

let arr =[1,2,3,4,5,6,7,8,9,10]

console.log(recursiveBinary(arr,5));

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.size==0){
//             this.head = node
//             this.tail =node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
    
// }