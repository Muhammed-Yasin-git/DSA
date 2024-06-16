class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i =0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        let arr = this.table[index]
        if(!arr){
            this.table[index] =[[key,value]] 
        }else {
            let sameKey = arr.find(item=>item[0]===key)
            if(sameKey){
                sameKey[1] = value
            }else{
                arr.push([key,value])
            }
        } return undefined
    }
    get(key){
        let index = this.hash(key)
        let arr = this.table[index]
        if(arr){
            let sameKey = arr.find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        } return undefined
    }
    remove(key){
        let index = this.hash(key)
        let arr = this.table[index]
        if(arr){
            let sameKey = arr.find(item=>item[0]===key)
            if(sameKey){
                arr.splice(arr.indexOf(sameKey),1)
            }
        } return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new HashTable(30)
table.set("name","helllo")
table.set("naem","hAIIII")
table.set("age",19)
table.remove("name")
table.display()