class maxHeap{
    constructor(){
        this.data = []
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
        while(this.data[curr]>this.data[this.getParent(curr)]){
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
        while(this.data[curr]<this.data[this.getLeftChild(curr)]){
            let biggest = this.getLeftChild(curr)
            
            if(this.data[this.getRightChild(curr)]<this.data.length && this.data[this.getRightChild(curr)] > this.data[this.getLeftChild(curr)]){
                biggest = this.getRightChild(curr)
            }
            if(this.data[curr] < this.data[biggest]){
                this.swap(curr,biggest)
                curr = biggest
            }
        }
    }

}

const MaxHeap = new maxHeap()

MaxHeap.push(10)
MaxHeap.push(3)
MaxHeap.push(20)
MaxHeap.push(18)
MaxHeap.push(14)
MaxHeap.push(5)

console.log(MaxHeap.data);

MaxHeap.pull()
console.log(MaxHeap.data);