// // class Heap{
// //     constructor(){
// //         this.data = []
// //     }
// //     getParent(i){
// //         return Math.floor((i-1)/2)
// //     }
// //     getLeftChild(i){
// //         return i*2+1
// //     }
// //     getRightChild(i){
// //         return i*2+2
// //     }
// //     swap(i1,i2){
// //         [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
// //     }
// //     push(value){
// //         this.data[this.data.length] = value
// //         this.heapifyUp()
// //     }
// //     heapifyUp(){
// //         let curr = this.data.length-1
        
// //         while(this.data[curr] < this.data[this.getParent(curr)]){
// //             this.swap(curr,this.getParent(curr))
// //             curr = this.getParent(curr)
// //         }
// //     }
// //     pull(){
// //         const value = this.data[0]
// //         this.data[0] = this.data[this.data.length-1]
// //         this.data.length--
// //         this.heapifyDown()
// //         return value
// //     }
// //     heapifyDown(){
// //         let curr = 0

// //         while(this.data[curr] > this.data[this.getLeftChild(curr)]){
// //             let smIndex = this.getLeftChild(curr)

// //             if(this.data[this.getRightChild(curr)] !== undefined &&
// //         this.data[this.getLeftChild(curr)] > this.data[this.getRightChild(curr)]){
// //             smIndex = this.getRightChild(curr) 
// //         }

// //         if(this.data[curr] > this.data[smIndex]){
// //             this.swap(curr,smIndex)
// //             curr = smIndex
// //         }
// //         }
// //     }

// // }

// // const heap = new Heap()

// // heap.push(10)
// // heap.push(5)
// // heap.push(15)
// // heap.push(17)
// // heap.push(1)
// // heap.push(8)
// // heap.push(4)

// // console.log(heap.data);

// // console.log("deleted",heap.pull());

// // console.log(heap.data);


// // class Node{
// //     constructor(){
// //         this.children ={}
// //         this.isEnd = false
// //     }
// // }

// // class Trie{
// //     constructor(){
// //         this.root = new Node()
// //     }
// //     insert(word){
// //         let curr = this.root
// //         for(let i=0;i<word.length;i++){
// //             if(!(word[i] in curr.children)){
// //                 curr.children[word[i]] = new Node()
// //             }
// //             curr = curr.children[word[i]]
// //         }
// //         curr.isEnd = true
// //     }
// //     search(word){
// //         let curr = this.root
// //         for(let i=0;i<word.length;i++){
// //             if(!(word[i] in curr.children)){
// //                 return false

// //             }
// //             curr = curr.children[word[i]]
// //         }
// //         return curr.isEnd
// //     }
// //     searchPrefix(word){
// //         let curr = this.root
// //         let words = []

// //         for(let i=0;i<word.length;i++){
// //             if(!(word[i] in curr.children)){
// //                 return word
// //             }
// //             curr = curr.children[word[i]]
// //         }
// //         this.searchHelper(curr,word,words)
// //         return words
// //     }
// //     searchHelper(root,word,words){
// //         if(root.isEnd){
// //             words.push(word)
// //         }

// //         for(let child in root.children){
// //             this.searchHelper(root.children[child],word+child,words)
// //         }
// //     }

// // }

// // const trie = new Trie()

// // trie.insert("yasin")
// // trie.insert("ya")
// // trie.insert("in")

// // console.log(trie.searchPrefix("i"));


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right =null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null

//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left= newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     levelOrder(){
//         let queue =[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);

//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             this.min(root.left)
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root === null){
//             return root
//         }
//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         } else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
// }

// const bst = new BST()

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// bst.levelOrder()

// bst.delete(5)
// console.log("delete");
// bst.preOrder(bst.root)


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode

            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

bst.preOrder(bst.root)