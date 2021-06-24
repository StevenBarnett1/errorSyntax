// // 1.
// function sum(array) {

//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// function handleError(error) {
//   console.log("HANDLE ERROR: ",error)
// }


// try{
//   let res = sum(null);
//   console.log(res);
// } catch (error) {
//   handleError(error)
// }


// 2.
function sayName(name) {
  // console.log("first",!name instanceof String)
  // console.log(!(name instanceof String))
  if(typeof name !== "string") throw Error("Not a string")
  console.log(name)
}

try {
  sayName([])

} catch (error) {
  console.log("Caught")
  console.log(error)
}

class ValidationError extends Error {
  constructor(){

  }
}

throw new ValidationError("This is our class")
