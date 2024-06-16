// Node 
// Trie
//   insert
//   contains
//   startsWithPrefix


class Node {
    constructor() {
        this.children = {}
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                curr.children[word[i]] = new Node()
            }
            curr = curr.children[word[i]]
        }
        curr.isWordEnd = true
    }

    search(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                return false
            }
            curr = curr.children[word[i]]
        }
        return curr.isWordEnd
    }


    searchPrefix(word) {
        let curr = this.root
        let words = []
        for(let i=0; i<word.length; i++){
            if (!(word[i] in curr.children)) {
                return word
            }
            curr = curr.children[word[i]]
        }
        this.searchHelper(curr,word,words)
        return words
    }

    searchHelper(root,word,words) {
        if (root.isWordEnd) {
            words.push(word)
        }

        for(let child in root.children) {
            this.searchHelper(root.children[child],word+child,words)
        }
    }

    delete(word) {
        this.deleteNode(this.root,word,0)
    }

    deleteNode(root,word,index) {
        if (!root) {
            return false
        }

        if (index === word.length) {
            if (!root.isWordEnd) {
                return false
            }
            root.isWordEnd = false
            return Object.keys(root.children).length === 0
        }
        let char = word[index]
        if (this.deleteNode(root.children[char],word,index+1)) {
            delete root.children[char]
            return Object.keys(root.children).length === 0
        }
    }
}


const trie = new Trie()

trie.insert("harikrishnan")
trie.insert("hari")
trie.insert("happy")
trie.insert("ha")
trie.insert("hariram")

console.log(trie.search("happy"));
trie.delete("ha")
console.log(trie.searchPrefix("ha"));