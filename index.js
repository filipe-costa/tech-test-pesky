/**
 * Get key value from a given string path
 * @param {Object} obj the object to find key value
 * @param {String} path the path to find the key value
 */


const get = (obj, path) => {
   if(typeof obj !== "object" || obj === null) {
     return undefined
   }
	 
   const paths = path.split(".")
   const pathLength = paths.length
   let parentObj = obj
   for(let i = 0; i < pathLength; i++) {
    if(parentObj[paths[i]] && i === pathLength - 1) {
      return parentObj[paths[i]]
     } else if(parentObj[paths[i]]) {
      parentObj = parentObj[paths[i]]
     }
   }
  
  return undefined
}

const testObj = {
  "user": {
    "firstName": "Alice",
    "friends": [
      {
        "firstName": "Bob"
      }, 
      {
        "firstName": "Jim"
      }
    ]
  }
}

const testPath = "user.firstName"
const unknownPath = "user.lastName"
const jimPath = "user.friends.1.firstName"
const unhappyPath = "user.friends.3.firstName"
const unhappiestPath = "foo.bar"

console.log(get(testObj, testPath))
console.assert(get(testObj, testPath) === "Alice", "Is Equal")

console.log(get(testObj, unknownPath))
console.assert(get(testObj, unknownPath) === undefined, "Is Undefined")

console.log(get(testObj, jimPath))
console.assert(get(testObj, jimPath) === "Jim", "Is Equal")

console.log(get(testObj, unhappyPath))
console.assert(get(testObj, unhappyPath) === undefined, "Is Undefined")

console.log(get(testObj, unhappiestPath))
console.assert(get(testObj, unhappiestPath) === undefined, "Is Undefined")

console.log(get(undefined, unhappiestPath))
console.assert(get(undefined, unhappiestPath) === undefined, "Is Undefined")

console.log(get(null, unhappiestPath))
console.assert(get(null, unhappiestPath) === undefined, "Is Undefined")

console.log(get([], unhappiestPath))
console.assert(get([], unhappiestPath) === undefined, "Is Undefined")