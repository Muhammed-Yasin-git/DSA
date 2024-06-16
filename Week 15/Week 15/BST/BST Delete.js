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
        if(!this.root){
            this.root = node
        }else{
            return this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
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
    min(root){
        if(!this.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!this.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if (value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right,root.value)
            }
        }
        return root
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst);

bst.delete(15)

console.log(bst);