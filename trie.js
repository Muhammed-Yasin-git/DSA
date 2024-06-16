class Node{
    constructor(){
        this.children ={}
        this.isEnd =false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children)){
                curr.children[word[i]] = new Node()
            }
            curr = curr.children[word[i]]
        }
        curr.isEnd = true
    }
    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children)){
                return false
            }
            curr = curr.children[word[i]]
        }
        return curr.isEnd
    }
    searchPrefix(word){
        let curr = this.root
        let words =[]

        for(let i=0;i<word.length;i++){
            if(!(word[i] in curr.children)){
                return word
            }
            curr = curr.children[word[i]]
        }
        this.searchHelper(curr,word,words)
        return words
    }
    searchHelper(root,word,words){
        if(root.isEnd){
            words.push(word)
        }

        for(let child in root.children){
            this.searchHelper(root.children[child],word+child,words)
        }
    }
}

const trie = new Trie()

trie.insert("apple")
trie.insert("aple")
trie.insert("age")
trie.insert("aimee")

console.log(trie.searchPrefix("ap"));