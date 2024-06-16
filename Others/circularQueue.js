class CicrularQueue{
    constructor(limit){
        this.items = new Array(limit);
        this.limit=limit;
        this.size = 0 ;
    }

    enqueue(value){
        this.items[this.size]=value;
        this.size = this.size + 1 % this.limit; 
    }

    dequeue(){
        this.items[this.size-1] = null;
        this.size = this.size -1 % this.limit;
    }

    getSize(){
        return this.limit-this.size;
    }

    isEmpty(){
        return this.size === 0 ;
    }

    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let element = '';
        this.items.forEach(item =>{
            element += item + ' '
        })
        console.log(element);
        }
        
    }

}

const cq = new CicrularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.print()
cq.dequeue();
cq.print()