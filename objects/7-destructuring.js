const [a, b] = [1, 2] //array destructure

const person = {
  firstname: 'Alice',
  age: 25,
  city: 'Athens',
}

//object destructure(keys)
const {firstname, age, city} = person
console.log(firstname, age, city)

const { firstname: first, age: newAge, city: myCity = 'Toronto'} = person //και μετονομασια
console.log(first, newAge, myCity)
console.log(myCity)



