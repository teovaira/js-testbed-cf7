const arr = [1, 2, 3, 2, 5, 2]

const deleteBackwards = (arr, val) => {  //αν το καναμε απο την αρχη μεχρι το τελος θα αναδιοργανωταν ο πινακας και ισως χαναμε ποιο ειναι το επομενο στοιχειο
  if (!arr) return      //ελεγχουμε αν ο πινακας ειναι falsy
  let i = arr.length

  while (i--) {
    if (arr[i] === val)
      arr.splice(i, 1)
    // i--
  }
}

deleteBackwards(arr, 2)
console.log(arr)