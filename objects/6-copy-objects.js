const initial = {name: 'Alice', age: 30, address: {street: 'Patission', num: 76}}

//1. With spreading
const copyInitial = {...initial} //spreading is a fresh copy but a shallow one. we use it in both arrays and objects as it seems
console.log(copyInitial)

//2. Object type (με assign)
const copyInitial2 = Object.assign({}, initial) 
console.log(copyInitial2)
//1η παραμετρος το object στο οποιο θα αντιγραψουμε και 2η αυτο που θα αντιγραψουμε


//3. με συναρτηση JSON
const copyInitial3 = JSON.parse(JSON.stringify(initial))

const initial2 = {name: 'Alice', age: undefined, address: {street: 'Patission', num: 76}}
console.log(JSON.stringify(initial2)) //το μετατρεπει σε json sting αλλα λειπει το age λογω της undefined τιμης του

//4. Deep copy
const copyInitial4 = structuredClone(initial)  //δεν εχει περιορισμους αυτη η συναρτηση του global Object
console.log(copyInitial4)

//SPREAD AND STRUCTUREDCLONE THE BEST CHOICES