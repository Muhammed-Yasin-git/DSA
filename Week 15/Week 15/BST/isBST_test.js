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
        let node = new Node(value);
        if(!this.root){
            this.root = node
        }else{
            return this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if(root.left<root.value){
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
    preOrder(root){
        var arr1 = []
        if(root){
            // console.log(root.value);
            arr1.push(root.value)
            arr1 = arr1.concat(this.preOrder(root.left))
            arr1 = arr1.concat(this.preOrder(root.right))
        }
        return arr1
    }
}

const bst = new BST()

bst.insert(10)
bst.insert(5)
bst.insert(15)

const bst2 = new BST()

bst2.insert(10)
bst2.insert(5)
bst2.insert(15)

console.log(bst);

console.log(bst.preOrder(bst.root));
console.log(bst2.preOrder(bst2.root));

arr1 = bst.preOrder(bst.root)
arr2 = bst2.preOrder(bst2.root)

console.log(check(arr1,arr2));
function check(arr1,arr2){
    for(i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
        if(i===arr1.length-1){
            return true
        }
    }
}


