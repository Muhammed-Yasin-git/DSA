// Stack Implementation with linked List

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
    
    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}
class Stack {
    constructor() {
        this.list = new linkedList()
    }

    push(value) {
        this.list.append(value)
    }

    pop() {
        this.list.removeFromEnd()
    }

    peek() {
        return this.list.head.value
    }
    print() {
        return this.list.print()
    }
}
const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
stack.print()







//Stack implementation array

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// const stack = new Stack();

// stack.push(20);
// stack.push(10);
// stack.push(30);

// stack.print();
// stack.pop()

// stack.print();
