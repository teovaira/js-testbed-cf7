const users = [
  {id: 1, firstname: 'Alice', email: 'alice@aueb.gr', isActive: true},
  {id: 2, firstname: 'Bob', email: 'bob@aueb.gr', isActive: false },
  {id: 3, firstname: 'Costas', email: 'costas@aueb.gr', isActive: true},
]

users.forEach(u => console.log(u))

const emails = users.map(u =>  u.email)
console.log(emails)

const activeUsers = users.filter(u => u.isActive)
console.log(activeUsers)

const cart = [
  {title: 'laptop', price: 1000, stock: 10},
  {title: 'mouse', price: 50, stock: 0},
  {title: 'keyboard', price: 80, stock: 20}
]

const totalSum = cart.reduce((acc, item) => acc + item.price, 0)  
console.log(totalSum)

const user = users.find(user => user.email === 'alice@aueb.gr') //επιστρεφει το στοιχειο η find και οχι πινακα. αν θελουμε πινακα τοτε filter
const userIndex = users.findIndex(user => user.email === 'alice@aueb.gr')

console.log(user)
console.log(userIndex)

const isOutOfStock = cart.some(item => item.stock === 0)
console.log(isOutOfStock)  //true

const isAllOutOfStock = cart.every(item => item.stock === 0)
console.log(isAllOutOfStock)

const posts = [
  {title: 'post1', tags:['js', 'web']},
  {title: 'post2', tags:['node.js', 'backend']},
  {title: 'post3', tags:['react', 'frontend']}
]

const allTags = posts.flatMap(post => post.tags) //δεν χρησιμοποιουμε το map γιατι θα επεστρεφε εναν δισδιαστατο πινακα.
console.log(allTags) //ενω το flatmap επιστρεφει σε εναν πινακα τα στοιχεια ολα οσα ηταν σε υποπινακες.

const fruits = ['apples', 'oranges']
for (const [index, fruit] of fruits.entries()) {
  console.log(`Index: ${index}, Fruit: ${fruit}`)
}

