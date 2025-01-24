const calc = {
  add: function(a, b) {
    return a + b
  },
  sub(a, b) {                //instead of key: and keyword function
    return a - b
  }
}

console.log(calc.add) //we can also do that - without paramerters - it will print a reference to this function because it is a property of the obj

console.log(calc.sub(10, 4))  //this is a callable. we can call a function only if we pass parameters, otherwise its just a reference
//we call with a callable