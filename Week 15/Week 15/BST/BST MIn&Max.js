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

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                return this.insertNode(root.left, node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                return this.insertNode(root.right, node)
            }
        }
    }

    // min(root){
    //     if(!root.left){
    //         return root.value
    //     }else{
    //         return this.min(root.left)
    //     }
    // }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    
    Secmax(root,prev){
        if(!root.right){
            return prev
        }else{
            prev = root.value
            // console.log(prev);
            return this.max(root.right,prev)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log(bst.Secmax(bst.root,0));

