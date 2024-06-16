class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    peek(){
       if(!isEmpty()){
        return this.items[0]
       }else{
        return null
       }
    }
    isEmpty(){
        return this.items.length === 0
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }

}

const queue = new Queue()

queue.enqueue(8)
queue.enqueue(11)
queue.enqueue(10)
console.log("removed value",queue.dequeue());
queue.enqueue(8)
queue.enqueue(8)
queue.print()