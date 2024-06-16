//    BST


// insert
// search
// BST or NOT
// Delete node
// traversal



// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearhTree {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const newNode = new Node(value)
//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertNode(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false
//         } else {
//             if (root.value === value) {
//                 return true
//             } else if (value < root.value) {
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }

//     max(root) {
//         if (!root.right) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }


//     isValidBST() {
//         return this.checkBST(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
//     }

//     checkBST(root, min, max) {
//         if (root === null) {
//             return true
//         }
//         if (root.value <= min || root.value >= max) {
//             return false
//         }
//         return (this.checkBST(root.left, min, root.value) && this.checkBST(root.right, root.value, max))
//     }

//     delete(value) {
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value) {
//         if (root === null) {
//             return root
//         }
//         if (value < root.value) {
//             root.left = this.deleteNode(root.left, value)
//         } else if (value > root.value) {
//             root.right = this.deleteNode(root.right, value)
//         } else {
//             if (!root.left && !root.right) {
//                 return null
//             }
//             if (!root.left) {
//                 return root.right
//             } else if (!root.right) {
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }
// }

// const bst = new binarySearhTree()

// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(8)
// bst.insert(13)
// bst.insert(17)

// console.log(bst.search(8));

// console.log('BEFORE DELETE');
// bst.inOrder(bst.root)

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.delete(15)
// console.log('AFTER DELETE');
// bst.inOrder(bst.root)

// console.log('VALID BST OR NOT : ', bst.isValidBST());




//   MIN HEAP

// class Heap {
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

//         while (this.data[current] < this.data[this.getParentChild(current)]) {
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
//         while (this.data[current] > this.data[this.getLeftChild(current)]) {
//             let smallestIndex = this.getLeftChild(current)

//             if (this.data[this.getRightChild(current)] !==undefined && this.data[this.getLeftChild(current)] > this.data[this.getRightChild(current)] ) {
//                 smallestIndex = this.getRightChild(current)
//             }

//             if (this.data[current] > this.data[smallestIndex]) {
//                 this.swap(current, smallestIndex)
//                 current = smallestIndex
//             }
//         }

//     }
// }

// const heap = new Heap()

// heap.push(10)
// heap.push(14)
// heap.push(5)
// heap.push(8)
// heap.push(18)
// heap.push(7)
// heap.push(20)

// console.log(heap.data);

// heap.poll()

// console.log(heap.data);




// MAX HEAP

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

// function heapSort(array) {
//     const heap1 = new maxHeap()
//     let sortedArray = []

//     for (let i = 0; i < array.length; i++) {
//         heap1.push(array[i])
//     }

//     for (let i = 0; i < array.length; i++) {
//         sortedArray.unshift(heap1.poll())
//     }

//     return sortedArray
// }

// const maxheap = new maxHeap()

// maxheap.push(10)
// maxheap.push(14)
// maxheap.push(5)
// maxheap.push(8)
// maxheap.push(18)
// maxheap.push(7)
// maxheap.push(20)


// console.log(maxheap.data);

// maxheap.poll()

// console.log(maxheap.data);

// let array = [20, 14, 18, 8, 10, 5, 7]
// let sorted = heapSort(array)
// console.log(sorted);



// class Node {
//     constructor() {
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node()
//     }

//     insert(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 curr.children[word[i]] = new Node()
//             }
//             curr = curr.children[word[i]]
//         }
//         curr.isWordEnd = true
//     }

//     search(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 return false
//             }
//             curr = curr.children[word[i]]
//         }
//         return curr.isWordEnd
//     }
// }


// const trie = new Trie()

// trie.insert("Hari")
// trie.insert("Hai")
// trie.insert("Happy")
// trie.insert("Has")
// trie.insert("Hariram")

// console.log(trie.search("Hai"));



// class Node {
//     constructor() {
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node()
//     }

//     insert(word) {
//         let curr = this.root

//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 curr.children[word[i]] = new Node()
//             }
//             curr = curr.children[word[i]]
//         }
//         curr.isWordEnd = true
//     }

//     search(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 return false
//             }
//             curr = curr.children[word[i]]
//         }
//         return curr.isWordEnd
//     }

//     searchPrefix(word) {
//         let curr = this.root
//         let words = []

//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 return word
//             }
//             curr = curr.children[word[i]]
//         }
//         this.searchHelper(curr, word, words)
//         return words
//     }

//     searchHelper(root, word, words) {
//         if (root.isWordEnd) {
//             words.push(word)
//         }

//         for(let child in root.children){
//             this.searchHelper(root.children[child],word+child, words)
//         }
//     }
// }


// const trie = new Trie()

// trie.insert("Hai")
// trie.insert("Hari")
// trie.insert("Hariram")
// trie.insert("Harikrishnan")
// trie.insert("Has")
// trie.insert("Happy")

// console.log(trie.search("Hari"));

// console.log(trie.searchPrefix("Har"));




// class Node {
//     constructor() {
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node()
//     }

//     insert(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 curr.children[word[i]] = new Node()
//             }
//             curr = curr.children[word[i]]
//         }
//         curr.isWordEnd = true
//     }

//     search(word) {
//         let curr = this.root
//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 return false
//             }
//             curr = curr.children[word[i]]
//         }
//         return curr.isWordEnd
//     }

//     searchPrefix(word) {
//         let curr = this.root
//         let words = []
//         for (let i = 0; i < word.length; i++) {
//             if (!(word[i] in curr.children)) {
//                 return word
//             }
//             curr = curr.children[word[i]]
//         }
//         this.searchHelper(curr, word, words)
//         return words
//     }

//     searchHelper(root, word, words) {
//         if (root.isWordEnd) {
//             words.push(word)
//         }

//         for (let child in root.children) {
//             this.searchHelper(root.children[child], word + child, words)
//         }
//     }


// }

// const trie = new Trie()

// trie.insert("Hari")
// trie.insert("HariKrishnan")
// trie.insert("Happy")
// trie.insert("Has")


// console.log(trie.search("Hari"));
// console.log(trie.searchPrefix("Har"));



// class Graph {
//     constructor() {
//         this.adjacencyList = {}
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     display() {
//         for (let vertex in this.adjacencyList) {
//            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
//         }
//     }
// }


// const graph = new Graph()

// graph.addVertex(35)
// graph.addVertex(30)
// graph.addVertex(10)
// graph.addVertex(25)
// graph.addVertex(15)

// graph.addEdge(35,30)
// graph.addEdge(10,30)
// graph.addEdge(35,25)
// graph.addEdge(35,15)
// graph.addEdge(15,10)

// graph.display()



class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return false
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex) 
        }
        delete this.adjacencyList[vertex]
    }
}


const graph = new Graph()

graph.addVertex(10)
graph.addVertex(20)

graph.addEdge(20,10)


graph.display()

console.log( graph.hasEdge(20, 10));