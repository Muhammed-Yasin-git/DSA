class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    removeFromStart(){
        if(this.isEmpty()){
            return null;
        }else{
            this.head = this.head.next ;
            this.size--;
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }

        if(this.size === 1){
            this.head = null
            this.size--;
        }else{
            let prev = this.head;
            while(prev.next.next){
                prev = prev.next;
            }
            prev.next = null;
            this.getSize--;
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let element = '';
            let curr = this.head;
            while(curr){
                element += curr.value + ' ';
                curr = curr.next
            }
            console.log(element);
        }
       
    }
}

const list = new LinkedList();
list.append(10)
list.append(20);
list.append(30);
list.prepend(90)
list.print()
list.removeFromEnd()
list.removeFromStart()
list.print()

class Queue{
    constructor(){
        this.items = new LinkedList();
    }

    enqueue(value){
        this.items.append(value);
    }

    dequeue(){
        return this.items.removeFromStart();
    }

    getSize(){
        return this.items.getSize()
    }

    isEmpty(){
        return this.items.isEmpty();
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items.head.value
    }

    print(){
        this.items.print();
    }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.peek());
q.print()
q.dequeue();
console.log(q.peek());
q.print();