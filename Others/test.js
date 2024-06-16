// function mergeSort(arr) {
//     if(arr.length<2) {
//         return arr
//     }
//     let mid = arr.length / 2
//     let leftArray = arr.slice(0, mid)
//     let rightArray = arr.slice(mid)
//     return join(mergeSort(leftArray), mergeSort(rightArray))
// }

// function join(leftArray, rightArray) {
//     let newArray = []
//     let i = 0
//     let j = 0
//     while (i < leftArray.length && j < rightArray.length) {
//         if (leftArray[i] < rightArray[j]) {
//             newArray.push(leftArray[i++])
//         } else {
//             newArray.push(rightArray[j++])
//         }
//     }

//     while (i < leftArray.length) {
//         newArray.push(leftArray[i++])
//     }

//     while (j < rightArray.length) {
//         newArray.push(rightArray[j++])
//     }

//     return newArray
// }

// const arr = [5, 4, 3, 2, 1]
// console.log(mergeSort(arr));




// class hashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value
//             } else {
//                 sameKeyItem.push([key, value])
//             }
//         }
//     }

//     get(key) {
//         let index = this.hash(key)
//         let bucket = this.table[index]

//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if (sameKeyItem) {
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if (sameKeyItem) {
//                 bucket.splice(bucket.indexOf(sameKeyItem), 1)
//             }
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// const table = new hashTable(10)

// table.set("name", "Hari")
// table.display()
// console.log(table.get('name'));
// table.remove("name")
// table.display()




// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     removeFromFront(){
//         if(this.isEmpty()){
//             return null
//         }
//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }

//     removeFromEnd() {
//         if(this.isEmpty()) {
//             return null
//         } 
//         const value = this.tail.value
//         if(this.size === 1){
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while (prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('Empty');
//         } else {
//             let listValues = ''
//             let curr = this.head
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }


// class Queue {
//     constructor() {
//         this.list = new linkedList()
//     }

//     enqueue(value) {
//         this.list.append(value)
//     }

//     dequeue() {
//         this.list.removeFromEnd()
//     }

//     print() {
//         return this.list.print()
//     }
// }

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()