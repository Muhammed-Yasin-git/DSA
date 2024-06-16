class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.top = null
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
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }

        const deleted = this.top.value
        this.top = this.top.next
        this.size--
        return deleted
    }
    
    print(){
        let curr = this.top
        let values =''
        while(curr){
            values+= `${curr.value} `
            curr = curr.next
        }
        console.log(values);
    }
}


class Stack{
    constructor(){
        this.list = new linkedList()
    }

    push(value){
        this.list.append(value)
    }
    pop(){
        return this.list.removeFromEnd()
    }
    peek(){
        if(this.list.isEmpty()){
            return null
        }else{
            return this.list.top.value
        }
    }
    print(){
        this.list.print()
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

stack.print()
console.log("popped",stack.pop());
stack.print()
console.log("peeked",stack.peek());