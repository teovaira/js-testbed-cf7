let temp = 40
const s = 'Hello'   //empty string, undefined and null are falsy values in boolean concept. The same applies to zero (Number).

if (temp) {
  console.log('Non-Zero')
} else {
  console.log('Temp is zero')
}

let str = (s) ? 'Str is empty' : 'Str is non-empty'
console.log(str)