const c = [1, 2]
const d = [1, 2] 

console.log(c === d) 
//false because c and d are different objects in memory

const e = c
console.log(c === e) 
//true because c and e reference the same object in memory