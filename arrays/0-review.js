const cities = ['Athens', 'Paris', 'Toronto']

//Add
cities.push('London') //γινεται modify ο ιδιος ο πινακας

let city = cities[0]
console.log(city)

cities[1] = 'London'

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, 'en')) //λογικη της sort(το return a - b) =>δινει αυξουσα ταξινομηση. 
//παντα localecompare οταν εχουμε strings και θελουμε να κανουμε sort
//παιρνει και δευτερη παραμετρο τη γλωσσα-locale(ολα τα settings που εχουν να κανουν με το internalization)
//SOs η sort δεν δημιουργει copy του ιδιου του πινακα

const citiesSorted = cities.slice() //η slice χωρις παραμετρους δημιουργει ενα shallow copy

// const citiesSorted = cities.slice().sort((a, b => a.localeCompare(b, 'en')))  δημιουργουμε αντιγραφο και μετα σορταρουμε για να μην πειραξουμε τον αρχικο πινακα

//Copy --> deep copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))  //η json ειναι wrapper object το οποιο στην ουσια ειναι constructor function
//η JSON.stringify μετατρεπει ενα js object σε string και αυτα λεγονται json strings
//και μετα η parse ερχεται και μετατρεπει το string ξανα σε js object. αυτο δημιουργει ενα deep copy με καποιους περιορισμους οι οποιοι ειναι
//η json stringify δεν μπορει να χειριστει special objects της js οπως date και objects που εχουν undefined και 


const cities2 = structuredClone(cities)  //και αυτη deep copy αλλα πολυ πιο ασφαλης. ειναι μεθοδος του global object
//ειναι σα να λεμε window.structuredClone η globalThis.structureClone και δεν εχει τους περιορισμους της json.
//μπορει να χειριστει special objects οπως το date η objects που εχουν μεσα τους μεθοδους η undefined κλπ


//Shallow copy  με spread operator
const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)


