const s = 'coding factory'
const s2 = 'CODING factory'
const s3 = s.replace('coding', 'code')
const lower = s.toLocaleLowerCase()
const upper = s.toUpperCase()

if (s.toLowerCase() === s2.toLowerCase()) {  //δεν εχει οπως στη java την ignoreToCase. πρεπει να κανουμε normalization
  console.log('EQUALITY')                                      //με toLowerCase η upperToCase και συγκρινουμε παντα με ===
}

const firstname = 'alice    '
console.log(firstname)
if (firstname === 'alice') {
  console.log(firstname)
} else {
  console.log('firstname not found')
}

if (firstname.trim() === 'alice') {    //υπαρχει και η trimStart() και η trimEnd()
  console.log('firstname found')
}

console.log('coding '.repeat(5))
console.log(s3, lower, upper)
const concat = s + s2 + 'goodnight'
const concat2 = s.concat(s2).concat(s3).concat('bye')
console.log(concat, concat2)