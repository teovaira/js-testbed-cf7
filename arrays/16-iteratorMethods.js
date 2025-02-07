const students = ['Alice', 'Andreas', 'Bob', 'Costas']

students.forEach(function(stu, index, arr) {  // (stu, _, arr) αν θελαμε πχ να κανουμε ignore τη 2η παραμετρο
  console.log(stu, index, arr)
}) 

let filtered = students.filter(student => student === 'Andreas')  //επιστρεφει νεο πινακα. στην ουσια ειναι boolean context
console.log(filtered)

let mapped =students.map(student => 'Student: ' + student)
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)  //η reduce παιρνει πριν απο την παραμετρο εναν accumulator και μετα το arrow ακολουθει η συνθηκη και η αρχικη τιμη του val ως δευτερη παραμετρος
console.log(sum)

//Ολες οι iterative μεθοδοι μπορουν να παρουν μεχρι 3 παραμετρους εκτος απ τη reduce οπου μπορει και 4η(accumulator)


