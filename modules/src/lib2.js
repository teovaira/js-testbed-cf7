 //named exports
 
 const PI = 3.14
 const EPSILON = 0.000005
 const API_URL = "https://codingfactory.aueb.gr"

 //default export  - only one default export
const SEC_PER_MINUTE = 60       // δεν κανουμε απευθειας export default. ενα μονο μπορει να ειναι default export
export default SEC_PER_MINUTE

export { PI, EPSILON, API_URL}   //μονο για τα named exports μπορουμε να εχουμε αυτη τη συνταξη στο τελος