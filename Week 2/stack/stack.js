
// class Stack{
//     constructor(){
//         this.list = []
//     }
//     push(value){
//         this.list.push(value)
//     }
//     pop(){
//        return this.list.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             return this.list[0]
//         }
//     }
//     isEmpty(){
//         return this.list.length === 0
//     }
//     getSize(){
//         return this.list.length
//     }
//     print(){
//         console.log(this.list.toString())
//     }
//     min(){
//         return Math.min(...this.list)
//     }
// }



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const removedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return removedValue;
    }

    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    print() {
        let curr = this.top;
        let values = '';
        while (curr) {
            values += `${curr.value} `;
            curr = curr.next;
        }
        console.log(values);
    }
}

const stack = new Stack()

stack.push(8)
stack.push(9)
stack.push(7)
stack.push(6)
stack.push(1)
stack.push(3)
stack.push(2)
console.log("deleted",stack.pop());
console.log("deleted",stack.pop());
stack.push(10)
stack.print()

// console.log(stack.min());