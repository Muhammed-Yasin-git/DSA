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
    insert(value,index){
        if(index<0 || index > this.size){
            return null
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
        
    }
    removeFromStart(){
        if(this.isEmpty()){
            return null
        }else{
            let removedValue = this.head.value
            this.head = this.head.next
            this.size--
            return removedValue
        }
    }   
    removeFromEnd(){
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let curr = this.head
            while(curr.next !== this.tail){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
        this.size--
        return value

    }   
     print(){
       if(this.isEmpty()){
        return null
       }else{
        let curr = this.head
        let values = ''
        while(curr){
            values += `${curr.value} ,`
            curr = curr.next
        }
        console.log(values);
       }
    }
}

const list = new LinkedList()

list.prepend(0)

let nums = [2,4,6,8,10,12]
for(value of nums){
    list.prepend(value)
}

console.log(list.getSize());
list.print()
let valus = [1,3,5,7,9,11]
for(value of valus){
    list.append(value)
}

console.log(list.getSize());
list.print()

console.log("removed value : ",list.removeFromStart());
list.print()
console.log(list.getSize());


list.insert(500,5)
list.print()
console.log(list.getSize());