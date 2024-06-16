// Queue implementation in array

// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue() {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString());
//     }
// }
// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.dequeue()
// queue.print()







// Queue implementation in Object


// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element) {
//         this.items[this.rear] = element
//         this.rear++
//     }


//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     size() {
//         return this.rear - this.front
//     }

//     isEmpty() {
//         return this.rear - this.front === 0
//     }

//     print(){
//         console.log(this.items);
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty());

// queue.enqueue(40)
// queue.enqueue(50)
// queue.enqueue(60)

// queue.print()





// Queue implementation with linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromStart() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    print() {
        if (this.isEmpty()) {
            console.log('list is Empty');
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}
class Queue {
    constructor() {
        this.list = new linkedList()
    }

    enqueue(value) {
        this.list.append(value)
    }

    dequeue() {
        this.list.removeFromStart()
    }

    print() {
        return this.list.print()
    }
}
const queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.print()
queue.dequeue()
queue.print()
