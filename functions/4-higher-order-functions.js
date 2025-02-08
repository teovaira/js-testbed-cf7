
//Higher order functions. οποια functions παιρνουν ως παραμετρο ενα function η επιστρεφουν ενα function, λεγονται higher order functions
//αλλος τροπος για να το δουμε ειναι σαν factory συναρτησεων
function createMultiplier(multiplier) {
  return function(num) {   //το ωραιο ειναι οτι το inner function εχει προσβαση στις μεταβλητες του outer scope
    return num + multiplier  //το multiplier ειναι μεταβλητη του outer scope
  }
}
const createMultiplier2 = (multiplier) => (num) => num * multiplier //πιο συντομη μορφη του απο κατω. και  παλι συναρτηση μεσα σε συναρτηση

const double = createMultiplier(2)   //ονομαζεται και closure γιατι αν και τελειωνει η κληση η εξωτερικη, εχει ακομα μνημη και κραταει το multiplier
const triple = createMultiplier(3)  // επαναχρησιμοποιηση του κωδικα. factory εργαλειων

console.log(double(5))
console.log(triple(10))  