class maxHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    parent(index) {
        return this.heap[Math.floor((index - 1) / 2)];
    }

    leftChild(index) {
        return this.heap[index * 2 + 1];
    }

    rightChild(index) {
        return this.heap[index * 2 + 2];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    add(value) {
        this.heap.push(value);
        this.size++;
        this.HeapifyUp();
    }

    poll() {
        if (this.size === 0) return null;
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.size--;
        this.HeapifyDown();
        return root;
    }

    HeapifyUp() {
        let index = this.size - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            [this.heap[this.getParentIndex(index)], this.heap[index]] = [this.heap[index], this.heap[this.getParentIndex(index)]];
            index = this.getParentIndex(index);
        }
    }

    HeapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let bigChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                bigChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[bigChildIndex]) {
                [this.heap[index], this.heap[bigChildIndex]] = [this.heap[bigChildIndex], this.heap[index]];
                index = bigChildIndex;
            } else {
                break;
            }
        }
    }

    display() {
        console.log(this.heap);
    }
}

const maxheap = new maxHeap();

maxheap.add(5);
maxheap.add(3);
maxheap.add(1);
maxheap.add(10);
maxheap.add(40);
maxheap.add(20);

maxheap.display();
maxheap.poll();

console.log('\nafter remove first value :');
maxheap.display();
