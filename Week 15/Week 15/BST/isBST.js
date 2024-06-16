class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
}

function newNode(value){
    let node = new Node(value);
    return node;
}

function maxValue(node){
    if(node === null) return Number.MIN_VALUE;
    let value = node.value;
    let leftMax = maxValue(node.left)
    let rightMax = maxValue(node.right)

    return Math.max(value, Math.max(leftMax, rightMax));
}

function minValue(node){
    if(node === null) return Number.MAX_VALUE;
    let value = node.value;
    let leftMax = minValue(node.left)
    let rightMax = minValue(node.right)

    return Math.min(value, Math.min(leftMax, rightMax))
}

function isBST(node){
    if(node === null) return 1; 
    if(node.left != null && maxValue(node.left) > node.value){
        return 0
    }
    if(node.right != null && minValue(node.right)< node.value){
        return 0;
    }
    if(!isBST(node.left) || !isBST(node.right)){
        return 0
    }
    return 1;
}

let root = newNode(4)
root.left = newNode(5)
root.right = newNode(2)

root.left.left = newNode(1)
root.left.right = newNode(3)

if(isBST(root)){
    console.log('Is BST');
}else{
    console.log('Not a BST');
}