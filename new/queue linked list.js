class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }
    removeFromStart(){
        if(this.isEmpty()){
            return null
        }

        const removed = this.front.value
        if(this.size === 1){
            this.front = null
            this.rear = null
        }else{
            this.front = this.front.next
        }
        this.size--
        return removed
    }
    print(){
        let curr = this.front
        let values =''
        while(curr){
            values+=`${curr.value} `
            curr = curr.next
        }
        console.log(values);
    }
}

class Queue{
    constructor(){
        this.items = new linkedList()
    }
    enqueue(value){
        this.items.append(value)
    }
    dequeue(){
        return this.items.removeFromStart()
    }
    peek(){
        if(this.items.isEmpty()){
            return null 
        } return this.items.front.value
    }
    print(){
        this.items.print()
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

queue.print()
console.log("deleted",queue.dequeue());
console.log("peek",queue.peek());