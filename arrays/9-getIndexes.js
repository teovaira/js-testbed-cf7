const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 8, 9, 2]

//function που να επιστρεφει εναν πινακα με τις θεσεις
//στις οποιες βρισκεται ενας συγκεκριμενος αριθμος


const getIndexes = (arr, val) => {
  const indexes = []

  // arr.forEach((v, index) => {   //η forEach μπορει να εχει ως τρεις παραμετρους. μας το δινει αυτο αυτοματα η js για το callback που
  //   if (v === val) {            //περιμενει η forEach. η μεταβλητη, η θεση της μεταβλητης και μπορουμε και τον πινακα για την 3η
  //     indexes.push(index)
  //   }
  // } )

  arr.forEach(function(v, index) {
    if (v === val) {
      indexes.push(index)
    }
  })

  return indexes
}

console.log(getIndexes(arr, 2))