class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next =this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let last = this.head
            while(last.next){
                last = last.next
            }
            last.next = node
        }
        this.size++
        
    }
    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let pointer = this.head
            for(let i=0;i<index-1;i++){
                pointer = pointer.next
            }
            node.next = pointer.next
            pointer.next = node
        }
        this.size++

    }
    removeFrom(index){
        if(index < 0 || index > this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let last = this.head
            for(let i = 0 ;i < index-1;i++){
                last = last.next
            }
            removedNode = last.next
            last.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let last = this.head
            while(last.next && last.next.value !== value){
                last = last.next
                
            }
            if(last.next){
                let removedNode = last.next
                last.next = removedNode.next
                this.size--
                return value
            }else{
                return null 
            }
        } 
    }
    search(value){
        if(this.isEmpty()){
            return null
        }

        let i = 0;
        let pointer = this.head
        while(pointer){
            if(pointer.value === value){
                return i
            }
            pointer = pointer.next
            i++
        }
        return null
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print(){
        if(this.isEmpty()){
            console.log("List Is Empty");
        }else{ 
            let pointer = this.head
            let listValues = ""
            while(pointer){
                listValues += `${pointer.value} `
                pointer =pointer.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()



const values = [1, 2, 67, 89, 90];
for(let i=0;i<values.length;i++) {
    list.prepend(values[i]);
}
list.print()
console.log(list.getSize());


const nums = [5,10,15,20,25,30]
for(let i=nums.length-1;i>=0;i--){
    list.insert(nums[i],3)
}
list.print()


console.log(list.getSize());
console.log(list.removeFrom(6));

list.print()
console.log(list.getSize());


console.log("removed value" ,list.removeValue(1));

list.print()
console.log(list.getSize());

console.log("value found at : ",list.search(10));

list.print()
console.log(list.getSize());

list.reverse()
list.print()
console.log(list.getSize());


