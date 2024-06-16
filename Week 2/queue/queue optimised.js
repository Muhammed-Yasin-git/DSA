// class Queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
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
//         return this.rear - this.front
//     }
//     display(){
//         const values = Object.values(this.items)
//         console.log(...values);
//     }
// }

// const queue = new Queue()

// queue.enqueue(8)
// queue.enqueue(10)
// queue.enqueue(18)
// queue.enqueue(64)
// queue.enqueue(28)
// queue.display()


class Queue{
    constructor(){
        this.items ={}
        this.rear =0
        this.front =0 
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        let deleted = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return deleted
    }
    peek(){
        return this.items[this.front]
    }
    isEmpty(){
        return this.rear-this.front ===0
    }
    getSize(){
        return this.rear- this.front
    }
    display(){
        let values = Object.values(this.items)
        console.log(values);
    }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(5)
queue.dequeue(5)
queue.display()
console.log(queue.peek());