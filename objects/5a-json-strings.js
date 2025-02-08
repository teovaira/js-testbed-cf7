const jsObj = {
  id: 1, 
  hobbies: [{id: 1, title: 'gym'}, {id: 2, title: 'music'}]
}

//Selialization
const jsonStr = JSON.stringify(jsObj)  //stringify γινονται τα keys μονο
console.log(jsonStr)

//Deserialization
const obj2 = JSON.parse(jsonStr)  // να σημειωσουμε εδω οτι και τα keys η ιδια η js τα θεωρει strings αλλα μας δινει τη συντακτικη ευκολια να μην τα βαζουμε σε εισαγωγικα
console.log(obj2) 

//η json δεν μπορει να μετατρεψει functions kai undefined