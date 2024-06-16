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
        if(this.size==0){
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
        if(this.size==0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    removeFromStart(){
        if(this.size === 0){
            return null
        }else{
            let removedValue = this.head.value
            this.head = this.head.next
            this.size-- 
            return removedValue
        }
    }
    removeFromEnd(){
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let curr = this.head
            while(curr.next!=this.tail){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
        this.size--
        return value
    }
    print(){
        let curr = this.head
        let values =''
        while(curr){
            values +=`${curr.value} `
            curr = curr.next
        }
        console.log(values);
    }
}
module.exports = LinkedList
// const list = new LinkedList()
// list.prepend(2)
// list.prepend(3)
// list.append(3)
// list.print()
