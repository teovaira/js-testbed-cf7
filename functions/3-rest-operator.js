function max(...numbers) {
  let maxVal = -Infinity

  for (n of numbers) {
    if (n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}

console.log(max(1, 6, 9, 3, 88))  // ο λογος που χρησιμοποιουμε rest ειναι για να περασουμε μεμονωμενες μεταβλητες
//στην πραγματικοτητα ομως ειναι πινακας

function sum(...rest) {     //αφου στην πραγματικοτητα ειναι πινακας μπορουμε απευθειας να χρησιμοποιησουμε iterative methods
  return rest.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 7, 9, 22))


function greet(message, ...names) {     //μπορει να παρει και αλλες παραμετρους αλλα πρεπει να ναι παντα η τλεευταια γιατι η rest ειναι αυτο
 console.log(message + ", " + names.join(", "))                                         //που απομενει και συλλεγει ολα τα προηγουμενα
}

greet('hello', 'alice', 'costas', 'bob')