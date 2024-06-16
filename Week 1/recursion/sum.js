function sum(arr,index=0){
  if(index===arr.length){
    return 0
  }
    return (arr[index]%2!== 0 ? arr[index]:0)+sum(arr,index+1)
}
let arr = [2,3,4,6,8]
console.log((sum(arr)));