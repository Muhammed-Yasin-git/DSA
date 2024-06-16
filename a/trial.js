// class maxHeap {
//     constructor() {
//         this.data = []
//     }

//     getParentChild(i) {
//         return Math.floor((i - 1) / 2)
//     }

//     getLeftChild(i) {
//         return i * 2 + 1
//     }

//     getRightChild(i) {
//         return i * 2 + 2
//     }

//     swap(i1, i2) {
//         [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]]
//     }

//     push(value) {
//         this.data[this.data.length] = value
//         this.heapifyUp()
//     }

//     heapifyUp() {
//         let current = this.data.length - 1
//         while (this.data[current] > this.data[this.getParentChild(current)]) {
//             this.swap(current, this.getParentChild(current))

//             current = this.getParentChild(current)
//         }
//     }

//     poll() {
//         let value = this.data[0]
//         this.data[0] = this.data[this.data.length - 1]
//         this.data.length--
//         this.heapifyDown()
//         return value
//     }

//     heapifyDown() {
//         let current = 0

//         while (this.data[current] < this.data[this.getLeftChild(current)]) {
//             let biggestIndex = this.getLeftChild(current)

//             if (this.getRightChild(current) < this.data.length && this.data[this.getRightChild(current)] > this.data[this.getLeftChild(current)]) {
//                 biggestIndex = this.getRightChild(current)
//             }

//             if (this.data[current] < this.data[biggestIndex]) {
//                 this.swap(current, biggestIndex)
//                 current = biggestIndex
//             } else {
//                 return
//             }
//         }
//     }
// }

// const maxheap = new maxHeap()
// maxheap.push(10)
// maxheap.push(15)
// maxheap.push(5)
// maxheap.push(3)
// maxheap.push(7)
// maxheap.push(12)
// maxheap.push(17)

// console.log(maxheap.data);

// maxheap.poll()

// console.log(maxheap.data);



class Node {
    constructor() {
        this.children = {}
        this.isWordEnd = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                curr.children[word[i]] = new Node()
            }
            curr = curr.children[word[i]]
        }
        curr.isWordEnd = true
    }

    search(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                return false
            }
            curr = curr.children[word[i]]
        }
        return curr.isWordEnd
    }
}


const trie = new Trie()
trie.insert("Hari")
trie.insert("HariKrishnan")
trie.insert("Hariram")
trie.insert("Happy")

console.log(trie.search("Hari"));