const person = {
  firstname: 'Alice',
  age: 25,
  city: 'Athens',
  isStudent: false
}

const keys = Object.keys(person)
console.log(keys)

// Object.keys().forEach(key => console.log(`key: ${key}, value: ${person[key]}`))

keys.forEach(key => console.log(`key: ${key}, value: ${person[key]}`))

console.log(Object.values(person))

const scores = {maths: 8, science: 10, history: 5}
const total = Object.values(scores).reduce((sum, val) => sum + val, 0)
console.log(total)
// let average = total / scores.length δινει ΝαΝ γιατι το scores δεν ειναι πινακαας

// let numberOfKeys = Object.keys(scores).length
let average = (total / Object.keys(scores).length).toFixed(2)

console.log(average)

//SOS Object.keys() h values() επισδτρεφει παντα εναν πινακα και τοτε μπορουμε να χρησιμοποιησουμε τη length ιδιοτητα