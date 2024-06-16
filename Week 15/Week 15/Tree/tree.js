class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorder(root, result = []) {
    if (root !== null) {
        inorder(root.left, result);
        result.push(root.value);
        inorder(root.right, result);
    }
    return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Inorder :", inorder(root));
