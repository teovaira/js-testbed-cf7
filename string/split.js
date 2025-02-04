const s = "Apples,Oranges,Milk"
const items = s.split(",")   //η split επιστρεφει παντα πινακα

console.log(items)

const newStr = items.join(" | ")

console.log(newStr)