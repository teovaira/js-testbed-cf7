const greet = (username) => `Hello ${username}!`  //οταν εχουμε μια παραμετρο δεν χρειαζονται οι παρενθεσεις
//δηλαδη θα ηταν: const greet = username => `Hello ${username}!`
const sayHello = () => console.log('Hello!!!!!')  //οταν δεν εχουμε καμια παραμετρο τις χρειαζομαστε και ας ειναι κενες

console.log(greet("Anna"))
sayHello()