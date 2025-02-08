const obj = {
  id: 1,
  firstname: 'Alice'
}

// Add properties

// Modify the object
obj.lastname = 'W.'
console.log(obj) //κανουμε modify το ιδιο το object. αν θελαμε να επιστρεψουμε copy για να μπορει να λειτουργησει η react


// Immutable - fresh copy
const addToObj = (obj, field, value) => {return {...obj, field: value}}  //δεν πρεπει να βαλουμε σκετο το field
//γιατι αυτο σημαινει οτι για key θα χουμε τη λεξη field ενω εμεις δεν θελουμε τη λεξη αλλα τη μεταβλητη
//ειναι οπως το δολαριο στα μπακτικς. το αντιστοιχο εδω στα objects ειναι τα brackets[].  κανουν interpolation στην ουσια
//αν δηλαδη δωσουμε παραμετρο εισοδου για field(lastname) και δεν βαλουμε μπρακετς στο field τοτε θα παρουμε field και οχι lastname
const addToObj2 = (obj, field, value) => ( {...obj, [field]: value})  //το ιδιο πραγμα με το αποπανω 
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)


// Update
obj.firstname = 'Athana'
console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => { return {...obj, [field]: newVal}}
console.log(updateObj(obj, 'firstname', 'Theodore'))


// Delete a property of an object

// Immutable delete  (η ιδεα ειναι να κανουμε destructure αγνοωντας ενα property)
const deleteIdFromObj = (obj, field) => {
  const {[field]: _, ...objToReturn} = obj
  return objToReturn
} //rest operator συλλεγει τα εναπομειναντα πεδια

// console.log(deleteFromObj(obj, 'id'))

const deleteFromObj = deleteIdFromObj(obj, 'id')
console.log(deleteFromObj)


