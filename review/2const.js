/**
 * Javascript uses a dynamic policy, no datatypes needed.
 * Variables are camelcase.
 * JS is case-sensitive.
 * Avoid declaring with var.
 * Take care of the syntax. Spaces between operators/operands.
 */

const PI = 3.14            //Declares 'true' constants.
const maxThreads = 150     //Declares a 'contextual' variable, that's why we use camelcase and not uppercase.
let counter = 0            //Declares non-constant.
counter++

console.log(PI, typeof PI, maxThreads, counter)