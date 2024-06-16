class Node{
    constructor(){
        this.children = {}
        this.isEnd = null
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node =  this.root
        for(let char of word){
            if(!node.children[char])node.children[char] = new Node()
            node = node.children[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char])return false
            node = node.children[char]
        }
        return node.isEnd
    }
    searchPrefix(prefix){
        let node = this.root
        let words =[]
        for(let char of prefix){
            if(!node.children[char])return false
            node = node.children[char]
        }
        this.collectWords(node, prefix, words)
        return words
    }
    collectWords(node, prefix, words){
        if(node.isEnd){
            words.push(prefix)
        }
        for(let char in node.children){
            this.collectWords(node.children[char], prefix+char , words)
        }
    }
}

const trie = new Trie()

trie.insert('Samanway')
trie.insert('Samyukth')

console.log(trie.root.children);

console.log(trie.searchPrefix('Sam'));

// console.log(trie.search('Samanway'));