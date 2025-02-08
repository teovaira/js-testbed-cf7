function createCounter() {
  let counter = 0       //σαν τις κλασεις. ειναι σα να ναι private το state και προσβαση εχει μονο η εσωτερικη συναρτηση
 
  return function() {    //closure λεγεται το state και η συναρτηση η συναρτησεις τα οποια συνεχιζουν και υπαρχουν. σα να εχει μνημη
    counter++
    return counter
  }
}

const counter = createCounter()  //το  εσωτερικο function εχει προσβαση στο outer scope. τελειωνει δηλαδη η κληση προς την createCounter 
console.log(counter())           //και συνεχιζει να υπαρχει το state
console.log(counter())

//ειναι σα να ναι μια κανονικη κλαση το παραπανω


function createCounter2 () {   //ενα closure που εχει state και επισστρεφει συναρτησεις που μονο αυτες εχουν προσβαση στο state. σαν public API
  let count = 0

  return {
    increment: function () {
      count++
      return count
    },
    getCount: function () {
      return count
    }
  }
}

const counter2 = createCounter2()
console.log(counter2.increment())
console.log(counter2.getCount())


