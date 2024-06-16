class MinHeap{
    constructor(){
        this.data =[]
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return i*2+1
    }
    getRightChild(i){
        return i*2+2
    }
    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }
    push(value){
         this.data[this.data.length] = value
        this.heapifyUp()
    }
    heapifyUp(){
        let curr = this.data.length-1
        while(this.data[curr] < this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))
            curr = this.getParent(curr)
        }
    }
    pull(){
        const value = this.data[0]
        this.data[0] = this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown()
        return value
    }
    heapifyDown(){
        let curr = 0
        while(this.data[curr] < this.data[this.getLeftChild(curr)]){
            let smallest = this.getLeftChild(curr)

            if(this.data[this.getRightChild]!== undefined && this.data[this.getLeftChild(curr)] > this.data[this.getRightChild(curr)]){
                smallest = this.getRightChild(curr)
            }
            if(this.data[curr] > this.data[smallest]){
                this.swap(curr,smallest)
                curr = smallest
            }
        }
    }
}

const minHeap = new MinHeap()

minHeap.push(80)
minHeap.push(15)
minHeap.push(5)
minHeap.push(2)
minHeap.push(27)
minHeap.push(34)

console.log(minHeap.data);