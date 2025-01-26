console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY) // 12/0
console.log(Number.NEGATIVE_INFINITY) //-12/0

if (Number.isInteger('12')) {
  console.log('Is integer')
} else {
  console.log('Not an integer')
}

console.log(Number.isInteger('12'))
console.log(Number.isNaN('AUEB'))

if (Number.isNaN('Hello')) {     // 10 / 'AUEB'  δεν κανει coerce. δινει false διοτι το hello ειναι string και δεν το αξιολογει καν ως number
  console.log('true')
} else {
  console.log('False')
}

if (isNaN('Hello')) {  // εκτος απο την isNaN του Number, εχουμε και την global isNaN που κανει coerce πρωτα οποτε εδω δινει true
  console.log('Is NaN')  //πιο ασφαλης η global απο το function του number λογω του coerce
} else {
  console.log('Not a NaN')
}

console.log(Number.parseInt('44'))
console.log(parseInt('44'))          //global object

console.log(Number.parseFloat('44.8'))
console.log(parseFloat('44.8'))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatingPointw(a, b) {
  return Math.abs(a - b) < Number.EPSILON    // μπορουμε να ορισουμε και δικο μας epsilon
}

console.log(compareFloatingPointw(num1, num2))

