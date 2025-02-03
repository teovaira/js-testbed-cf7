const arr = [1, 2, 3, 4]
console.log(arr.join(', '))  //επιστρεφει ενα string συνενωνοντας βασει ενος delimiter τα στοιχεια ενος πινακα

let out = ''
for (const item of arr) {  //το ιδιο αλλα πολυ verbose
  out += item + ", "
}

console.log(out)