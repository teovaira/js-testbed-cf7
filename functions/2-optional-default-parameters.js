function greet(name) {
  if (name === undefined)
    name = 'Guest'
  console.log(`Hello, ${name}`)
}

greet()

//απ την ecmascript 6 και μετα εχουμε default parameters δηλ μπορουμε να function add(a = 0, b = 0) 
//για να αποφυγουμε το undefined

//Default params

function getUser (name = 'Guest', age = 18) {
  return {name: name, age: age}  // η return {name, age}
}  
  const obj = getUser() // καλο ειναι οταν χρησιμοποιουμε το basic format μιας συναρτησης να την αποδιδουμε επειτα σε μεταβλητη
  console.log(obj)



  // ΣΕ ολες τις γλωσσες η Date και η DateTime ειναι στην πραγματικοτητα αριθμοι απο 1/1/1970. το θεμα ειναι πως θα τον αναπαραστησουμε
  //αυτον τον αριθμο σε string και τι μορφη θα του δωσουμε
function getFormattedDateAndTime(
  locale = 'en-US', // θα μπορουσε να ειναι 'el-GR'
  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
) {
  const now = new Date()
  return now.toLocaleString(locale, options) //η localeString μετατρεπει ενα date σε format-string. παιρνει 2 παραμετρους. διαφερει η αναπαρασταση απο χωρα σε χωρα
}
