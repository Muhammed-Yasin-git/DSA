class QueueUsingStack {
    constructor() {
        this.stack1 = []; // Primary stack for enqueue operation
        this.stack2 = []; // Auxiliary stack for dequeue operation
    }

    // Enqueue operation
    enqueue(value) {
        // Move all elements from stack1 to stack2
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }

        // Push the new element onto stack1
        this.stack1.push(value);

        // Move all elements back to stack1 from stack2
        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    // Dequeue operation
    dequeue() {
        // If stack1 is empty, return null
        if (this.stack1.length === 0) {
            return null;
        }
        // Pop and return the top element from stack1
        return this.stack1.pop();
    }

    // Peek operation
    peek() {
        // If stack1 is empty, return null
        if (this.stack1.length === 0) {
            return null;
        }
        // Return the top element of stack1
        return this.stack1[this.stack1.length - 1];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.stack1.length === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.stack1.length;
    }

    // Print the elements of the queue
    print() {
        console.log("Queue elements:");
        console.log(this.stack1.join(' '));
    }
}

// Example usage:
const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print(); // Output: 1 2 3


