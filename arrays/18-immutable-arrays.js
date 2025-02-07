const numbers = [1, 2, 3, 4]

//Modifies the initial array και αν ημασταν στη react αυτο θα ηταν προβλημα
numbers.push(5)
numbers.splice(4, 0, 5) //στη θεση 4, διαγραφουμε 0 στοιχεια και προσθετουμε το 5


//τα 2 παρακατω funtions ειναι fresh copies => επιστρεφουν δηλαδη νεο πινακα οποτε react check
function addToArrayEnd(arr, num) {
  return [...arr, num]
}

function addToArrayStart(arr, num) {
  return [num, ...arr]
}

//shallow copy τοποθετησαμε σε συγκεκριμενο index μια τιμη χωρις να πειραξουμε τον αρχικο, ωσαν να ηταν immutable
function addToArrayAtIndex (arr, num, index) {
  return [...arr.slice(0, index), num, ...arr.slice(index)]
}

//Updatesτωρα θα δουμε πε γινεται να εχουμε immutable updates
numbers.splice(3, 1, 8) //μονο που και η splice κανει modify τον αρχικο πινακα
console.log(numbers)

const updateArray = (arr, newValue) => arr.map(item => newValue)
console.log(updateArray(numbers, 5))

//και αυτο FRESH COPY
const updateOneItem = (arr, index, newValue) => 
  arr.map((item, i) => (i === index) ? newValue : item)

console.log(updateOneItem(numbers, 1, 10))
console.log(numbers)

//για να μην τον πειραξουμε οπως ειπαμε δεν κανουμε το console.log το ακριβως απο πανω αλλα
const updatedNumbers = updateOneItem(numbers, 2, 17)
console.log(updatedNumbers)


//και τωρα να το δουμε και σε delete πως επιστρεφουμε νεο πινακα χωρις να πειραξουμε τον αρχικο
let index = numbers.indexOf(1) 
if (index !== -1) numbers.splice(index, 1)  //ΠΡΙΝ ΚΑΝΟΥΜΕ DELETE ΚΑΙ UPDATE παντα ελεγχουμε αν υπαρχει το στοιχειο που θελουμε να τροποιησουμε
//δεν το θελουμε γιατι κανει modify τον initial array

//Fresh copy of deleted array
const deleteFromArray = (arr, num) => arr.filter(item => item !== num)

const deleteByIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)]


