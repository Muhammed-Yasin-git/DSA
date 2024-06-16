class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    countNodes(node) {
        if (node === null) {
            return 0;
        }
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

const tree = new BinaryTree();

tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.insert(1);
tree.insert(5);
tree.insert(3);

const numberOfNodes = tree.countNodes(tree.root);
console.log("Number of nodes:", numberOfNodes);
