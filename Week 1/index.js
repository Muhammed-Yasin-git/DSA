class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head 
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    middle(){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head
            for(let i=0;i<Math.floor(this.size/2)-1;i++){
                curr = curr.next
            }
            return curr.next.value
        }
        
    }
    deleteMiddle(){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head
            for(let i =0;i<Math.floor(this.size/2)-1;i++){
                curr = curr.next
            }
            let next = curr.next
            curr.next = next.next
            this.size--
        }
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }else{
            let curr = this.head
            while(curr.next && curr.next.value !== value){
                curr = curr.next
            }
            if(curr.next){
                let removedNode = curr.next
                curr.next = removedNode.next
                this.size--
                return value
            }else{
                return null
            }

        }
    }
    search(){
        let curr = this.head

    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues+=`${curr.value} ,`
            curr = curr.next
        }
        console.log(listValues);
    }
}

const list = new LinkedList()

let arra = [1,2,3,5]

for(let i=arr.length-1;i>=0;i--){
    list.prepend(arra[i])
}
console.log(list.getSize());
list.print()

console.log(list.middle());

let nums = [2,3,3,4,5]

for(let value of nums){
    list.append(value)
}

list.print()
console.log("size is",list.getSize());

console.log(list.removeValue(4));
list.print()


                              Binary //                          

function binary(arr,target){
    left = 0
    right = arr.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target === arr[mid]){
            return mid
        }else{
            if(target<arr[mid]){
                right = mid-1
            }else{
                left= mid+1
            }
        }
    } return -1
}

let num = [1,2,3,4,5,6,7]
console.log("value found at : ",binary(num,2));




function recursiveBinary(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    if(left>right){
        return null
    }

    let mid = Math.floor((left+right)/2)
    if(target === arr[mid]){
        return mid
    }
    if(target < arr[mid]){
        return search(arr,target,left,mid-1)
    }else{
        return search(arr,target,mid+1,right)
    }
}

let arr = [2,3,4,5,6,7,8,9]

console.log("target found at :",recursiveBinary(arr,7));

