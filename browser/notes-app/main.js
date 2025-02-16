const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο', 'Κυριακή']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μάρτίου', 'Απρλίου', 'Μαΐους', 'Ιούνιος', 'Ιουλίου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {  //συστημικο event to DOMContentLoaded

  this.setInterval(printGRDate, 1000)


  this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
    onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').value.trim(), softDeleted: false})
  })  //το this υπαρχει μονο οταν εχουμε απλο function που εχει scope. αν ειχαμε arrow function, δεν θα υπηρχε scope

  this.document.querySelector('#inputNote').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      onInsertHandler({key: count + 1, note: event.target.value.trim(), softDeleted: false})
    }
    
  })
})