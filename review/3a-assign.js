let age = 25
let distance = 10.5
let bigTimeMillis = 12345678n

bigTimeMillis++
++bigTimeMillis   //The prefix ++ has the second highest priority after the parenthesis.
age = age + 2  // age += 2
distance -= 5

console.log(age, distance, bigTimeMillis)