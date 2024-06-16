class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey = bucket.find(item=>item[0] === key)
            if(sameKey){
                samekey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(item=>item[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }return undefined
    }
    remove(key){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new HashTable(50)
table.set("name","hello")
table.set("nmae","haiii")
table.set("good","bad")
table.set("pepsi","cola")
table.set(1,1000)
table.set(2,2000)
table.set("pespi","coooola")
table.display()
console.log(table.get("pespi"));
table.remove("pespi")
table.display()