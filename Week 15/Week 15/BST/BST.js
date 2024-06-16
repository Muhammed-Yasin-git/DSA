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
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }

    inOreder(root){
        if(root){
            this.inOreder(root.left)
            console.log(root.value);
            this.inOreder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    // levelOrder(){
    //     const queue = []
    //     queue.push(this.root);
    //     while(queue.length){
    //         let curr = queue.shift()
    //         console.log(curr.value)
    //         if(curr.left){
    //             queue.push(curr.left)
    //         }
    //         if(curr.right){
    //             queue.push(curr.right)
    //         }
    //     }
    // }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

}

const bst = new BST()

// console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(8)
bst.insert(15)
bst.insert(3)
bst.insert(7)


// console.log(bst);
// bst.preOrder(bst.root)
// bst.inOreder(bst.root)
bst.postOrder(bst.root)
// bst.levelOrder()

// console.log(bst.search(bst.root, 10));