const arr = [1, 2, 3, 4]
delete arr[0]  //καθολου καλη πρακτικη διοτι δημιουργει εναν sparse array

console.log(arr)

arr.push(5)  //η push τροποποιει τον αρχικο array
arr.push(6, 7)
console.log(arr)