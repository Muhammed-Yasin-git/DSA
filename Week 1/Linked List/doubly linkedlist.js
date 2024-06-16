class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList{
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
            this.head.prev = node
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
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    removeStart(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return value
    }
    print(){
        let curr = this.head
        let values = ''
        while(curr){
            values += `${curr.value} ,`
            curr = curr.next
        }
        console.log(values);
    }
    printReverse(){
        let curr = this.tail
        let values = ''
        while(curr){
            values += `${curr.value} ,`
            curr = curr.prev
        }
        console.log(values);
    }
}

const list = new DoublyLinkedList()


let nums = [10,9,8,7,6,5]
for(i=nums.length-1;i>=0;i--){
    list.append(nums[i])
}
let numbers = [2,3,4,5,6,7]
for(i=numbers.length-1;i>=0;i--){
    list.prepend(numbers[i])
}
list.print()
list.printReverse()