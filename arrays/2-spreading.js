const initial = [1, 2, 3]
const copy = [...initial]  //ο spread operator δινει ως output μια λιστα των στοιχειων του πινακα.
                          //κανει extract τα στοιχεια του πινακα
//ειναι αντιγραφο. shallow copy. δειχνει σε διαφορετικο μερος του heap
//δινει ενα fresh copy το οποιο ειναι shallow ομως. αν ειχε δηλαδη ο initial μεσα objects μεσα σε objects 
//θα αντεγραφε μονο τους δεικτες και οχι τα περιεχομενα. μονο βιβλιοθηκες μας δινουν deep copies
const extended = [0, ...initial, 4]
const chars = [...'hello']  //μπορουμε να κανουμε και αυτο γιατι τα strings ειναι iterables. θα κανει spread τα στοιχεια του string
//υπενθυμιζουμε οτι αν αλλαξουμε τους δεικτες του shallow copy επηρρεαζουμε και τον αρχικο
console.log(copy)
console.log(extended)
console.log(chars)


