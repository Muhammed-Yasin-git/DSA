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
        let node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root,node){
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
    inOrder(root,inorder){
        if(root){
            this.inOrder(root.left,inorder)
            // console.log(root.value);
            inorder.push(root.value)
            this.inOrder(root.right,inorder)
        }
        return inorder
    }


}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(18)

// console.log(bst);
// bst.inOreder(bst.root)

let inorder = bst.inOrder(bst.root,[])
console.log(inorder);
low = 7
high =15
let sum = 0
for(i=0;i<inorder.length;i++){
    if(inorder[i]>=low && inorder[i]<=high){
        sum = sum+inorder[i]
    }
}

console.log(sum);