class Node{
    constructor(){
        this.children = {};
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root

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


    remove(word) {
        this.removeHelper(this.root, word, 0);
    }

    removeHelper(node, word, index) {
        if (index === word.length) {
            if (node.isEnd) {
                node.isEnd = false;
            }
            return;
        }

        const char = word[index];
        if (!node.children[char]) {
            return;
        }

        this.removeHelper(node.children[char], word, index + 1);

        if (Object.keys(node.children[char].children).length === 0 && !node.children[char].isEnd) {
            delete node.children[char];
        }
    }
}

const trie = new Trie()

trie.insert('Samanway')
trie.insert('Samyukth')

console.log('Before :'+ trie.search('Samyukth'));

trie.remove('Samyukth')

console.log('After :'+trie.search('Samyukth'));