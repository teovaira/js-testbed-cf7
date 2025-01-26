//οι μεταγλωττιστες λεγονται και parsers

const s = 'coding factory'

const substr = s.substring(0, 8)   //exclusive to endindex της substring. 
console.log(substr)

const mySlice = s.slice(7)
const mySlice2 = s.slice(7, 8)
console.log(mySlice)
console.log(mySlice2)

const copyStr = s.slice()   //χωρις παραμετρους επιστρεφει ενα copy του string
console.log(copyStr)
const mySlice3 = s.slice(-7)   //μετραει 7 χαρακτηρες απο το τελος(inclusive)
console.log(mySlice3)

const splitted = s.split(" ")  //επιστρεφει πινακα με elements διαχωρισμενα βασει του delimiter
console.log(splitted)

