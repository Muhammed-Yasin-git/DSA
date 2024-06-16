// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head ;
//             this.head=node;
//         }
//         this.size++;
//     }

//     append(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             let prev = this.head;
//             while(prev.next){
//                 prev = prev.next;
//             }
//             prev.next = node;
//         }
//         this.size++;
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             return null;
//         }else{
//             let curr = this.head ;
//             this.head = curr.next;
//             curr.next = null;
//             this.size--;
//         }
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null;
//         }
//         if(this.size === 1){
//             this.head = null;
//         }else{
//             let prev = this.head;
//             while(prev.next.next){
//                 prev=prev.next;
//             }
//             prev.next = null ;
//         }
//         this.size--;
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let element = '';
//             let curr = this.head;
//             while(curr){
//                 element += curr.value + ' ';
//                 curr = curr.next
//             }
//             console.log(element);
//         }
       
//     }
// }


// class LinkedListStack{
//     constructor(){
//         this.list = new LinkedList();
//     }

//     push(value){
//         this.list.prepend(value);
//     }

//     pop(){
//         return this.list.removeFromStart();
//     }

//     peek(){
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.list.head.value;
//     }
//     isEmpty(){
//         return this.list.isEmpty();
//     }

//     getSize(){
//         return this.list.getSize();
//     }

//     print(){
//         return this.list.print();
//     }



// }



// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print();
// stack.pop();
// stack.print()
// console.log(stack.getSize());
// console.log(stack.peek());


class Stack{
    constructor(){
        this.items = [];
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    push(element){
        this.items[this.size++] = element;
    }

    pop(){
        if(this.isEmpty()){
            return 'underflow';
        }else{
            this.items[this.size-1] = undefined;
            this.size--;
        }
      
    }

    peek(){
        if(this.isEmpty()){
            return 'empty';
        }else{
            return this.items[this.size-1];
        }
        
    }

    print(){
        if(this.size === 0){
            console.log(undefined);
        }
        let element = ''
        for(let i=0 ; i<this.size ; i++){
            element += this.items[i]+' ';
        }
        console.log(element);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
stack.pop();
stack.pop();
stack.pop()
stack.print()
console.log(stack.getSize());
console.log(stack.peek());
