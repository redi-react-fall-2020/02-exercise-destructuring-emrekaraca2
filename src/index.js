const core = require("./../student/index")

const stringInput = "Hello World!"
const arrayInput = [1,2,3]
const objectInput = {name: "Max", age: 30, city: "Berlin"}


console.log('#####################')
console.log('Exercise 0')
console.log('Input: ', stringInput)
console.log('Result: ', core.returnTheString(stringInput))
console.log('#####################')
console.log('Exercise 1')
console.log('Input: ', arrayInput)
console.log('Result: ', core.returnFirstElement(arrayInput))
console.log('#####################')
console.log('Exercise 2')
console.log('Input: ', objectInput)
console.log('Result: ', core.returnAgeProperty(objectInput))