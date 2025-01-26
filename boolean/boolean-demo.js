console.log(Boolean())
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(''))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean('hello'))

while (1){
  console.log('HELLO')
  break;
}

do {
  console.log('one iteration')
} while(0)

for (let i = 1; 1; i++){
  console.log('in for')
  break;
}

let num = 10
while (num) {
  console.log(num)
  num--
}

// && || !

console.log('Coding ' && 7)  //truthy && truthy -> returns last truthy
console.log('Coding ' && 0) 

console.log('' || 'default')



