const cities = ['Athens', 'London', 'New York']
console.log('Position of Athens is: ' + cities.indexOf('Athens'))  //αν δεν υπαρχει η τιμη τοτε επιστρεφει -1

if (cities.includes('Athens')) {  
  console.log('Athens exists')
} else {
  console.log('Athens doesnt exist')
}

//οποτε η indexOf και η includes, περα απο τα strings χρησιμοποιειται και στα arrays

