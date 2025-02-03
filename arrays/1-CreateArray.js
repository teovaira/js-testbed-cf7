const arr = []   //κενος πινακας
const arr1 = [1, 2, 3, 4, 5]    // και populate
const arr2 = [1, 'alice', 3.4, true]
const spareArr = [1, , 3]  //sparse array. το length ειναι μεγαλυτερο απο τον αριθμο των στοιχειων
const arr3 = [,,,]  //sparse array με trailing comma. εχει length 3. undefined
const arr4 = Array(2)  // δημιουργουμε ενα array δυο στοχειων. σπανιο. undefined
const grid = [[1, 2], [3, 4], [5, 6, 7]]  //grid.length = 3, και καθε element του grid  --> grid[].length
const objArr = [{id: 1}, {id: 2}, {id: 3}]

console.log(arr1[0])

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}
for (const el of arr1) {
  console.log(el)
}

for (let i = 0; i < grid.length; i++) {
  for(let j = 0; j <grid[i].length; j++) {
    console.log(grid[1], [j])
  }
}

for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}





