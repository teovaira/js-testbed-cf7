
// 1. Basic function definition

// console.log(greet('Alice')) μπορουσαμε κι εδω πανω και λειτουργει διοτι στα functions εχουμε hoisting
function greet(name) {
  return `Hello, ${name}`
}

function add(a, b) {
  return a + b
}

console.log(greet('Alice')) //λεγεται callable επειδη ειναι μεσα σε παρενθεσεις σε αλλη συναρτηση

// 2. Function expressions   Δεν ιχυει το ιδιο εδω με το hoisting. εδω θα γινοταν hoisted ως undefined(οποτε να θυμαμαι μονο στο basic format ισχυει)
const mul = function (a, b) {
  return a * b
}

let result = mul(3, 5)

// 3. Arrow functions
const div = (a, b) => a / b