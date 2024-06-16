class Heap{
    constructor(){
        this.heap = []
    }
    add(value){
        this.heap.push(value);
        this.heapify(this.heap.length-1)
    }

    heapify(currentIndex){
        if(currentIndex){
            if(currentIndex<=0)return 
            let parentIndex = Math.floor((currentIndex - 1)/2);
            if(this.heap[currentIndex]>this.heap[parentIndex]){
                [this.heap[currentIndex],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[currentIndex]];
                this.heapify(parentIndex)
            }
        }
    }

    print(){
        console.log(this.heap);
    }
}

const heap = new Heap();

heap.add(4)
heap.add(8)
heap.add(7)
heap.add(6)
heap.add(5)
heap.add(9)
heap.add(2)

heap.print()
