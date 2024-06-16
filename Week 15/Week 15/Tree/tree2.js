class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function Height(root) {
    if (root === null) {
        return 0;
    } else {
        return 1 + Math.max(Height(root.left), Height(root.right));
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of the tree:", Height(root));