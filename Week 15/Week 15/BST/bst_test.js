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

    insert(value){
        const node = new Node(value);
        if(!this.root){
            this.root = node 
        }else{
            return this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(root.value>node.value){
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

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(root.value > value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
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
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue =[]
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

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left,prev)
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

const bst = new BST();

bst.insert(10)
bst.insert(8)
bst.insert(30)
bst.insert(25)
bst.insert(3)
bst.insert(9)
bst.insert(35)

// console.log(bst.root);

// console.log("search 10 : "+ bst.search(bst.root,10));
// console.log("search 11 : "+ bst.search(bst.root,11));

// console.log('preorder : ' );
// bst.preOrder(bst.root)

// console.log('Inorder : ' );
// bst.inOrder(bst.root)

// console.log('postorder : ' );
// bst.postOrder(bst.root)

// console.log('Levelorder : ' );
// bst.levelOrder()

// console.log(bst.min(bst.root));

console.log(bst.max(bst.root));