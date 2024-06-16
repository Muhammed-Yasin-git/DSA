class HashTable{
    constructor(size){
        this.size = size;
        this.bucket = new Array(size).fill(null).map(()=> [])
    }

    hash(key){
        key = key.toString();
        let value = 0 ;
        for(let i=0 ; i<key.length ; i++){
            value += key.charCodeAt(i);
        }
        return value % this.size;
    }

    set(key,value){
        const index = this.hash(key);
        let bucket = this.bucket[index];
        for(let i=0; i<bucket.length;i++){
            const [storedKey] = bucket[i];
            if(storedKey == key){
                 bucket[i] = [key,value];
                 return
            }
        }
        bucket.push([key,value]);
    }

    get(key){
        const index = this.hash(key);
        let bucket = this.bucket[index];
        for(let i=0 ; i<bucket.length; i++){
            const [storedKey, storedValue] = bucket[i]
            if(key === storedKey){
                return storedValue;
            }
        }
        return null;
    }

    remove(key){
        const index = this.hash(key);
        let bucket = this.bucket[index];
        for (let i = 0; i < bucket.length; i++) {
            const [storedKey, storedValue] = bucket[i];
            if(key === storedKey){
                bucket.splice(i,1);
                return;
            }
        }
        
    }

    clear() {
        for (let i = 0; i < this.bucket.length; i++) {
            this.bucket[i] = []; 
        }
    }
   containsValue(value){
    for(let i=0 ; i<this.bucket.length ; i++){
        const bucket = this.bucket[i];
        for(let j=0 ; j<bucket.length ; j++){
            const [,storedValue] = bucket[j];
            if(storedValue === value){
                return true;
            }
        }
    }
    return false;
   }

   containsKey(key){
    const index = this.hash(key);
    const bucket = this.bucket[index];
    for(let i=0 ; i<bucket.length; i++){
        const [storedKey] = bucket[i];
        if(key === storedKey){
            return true;
        }
    }
    return false;
   }

   key(){
    let allKey = [];
    for(let i=0 ; i< this.bucket.length ; i++){
        const bucket = this.bucket[i];
        for(let j=0 ; j<bucket.length ; j++){
            const [storedKey] = bucket[j];
            allKey.push(storedKey);
        }
    }
    return allKey;
   }

   value(){
    let allValue = [];
    for(let i=0 ; i<this.bucket.length ; i++){
        const bucket = this.bucket[i];
        for(let j=0 ; j<bucket.length ; j++){
            const [storedValue] = bucket[j];
            allValue.push(storedValue);
        }
    }
    return allValue;
   }

    print(){
        for(let i=0 ; i< this.bucket.length ; i++){
            if(this.bucket[i].length > 0){
                console.log(i,this.bucket[i]);
            }
        }
    }
}
    





const hash = new HashTable(4);
hash.set('name','Ahamed');
hash.set('mane','player');
hash.set('age',23);
hash.set(123,"lalu")
// hash.print()
// console.log(hash.containsValue('player'));
// console.log(hash.key());
// console.log(hash.value());

console.log(hash.bucket);