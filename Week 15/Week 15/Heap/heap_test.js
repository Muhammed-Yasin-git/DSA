class Heap{
    constructor(){
        this.heap = []
        this.size = 0
    }

    add(value){
        this.heap.push(value)
        this.size++
        this.heapify()
    }


    parent(index){
        return this.heap[Math.floor((index-1)/2)]
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    hasParent(index){
        return this.getParentIndex(index)>=0
    }

    heapify(){
        let index = this.heap-1
        while(this.hasParent(index)&& this.parent(index)<this.heap[index]){
            [this.heap[this.getParentIndex(index)],this.heap[index]] = 
        }
    }
}