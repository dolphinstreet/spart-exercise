// function fizzbuzz(number) {
//   if (typeof number !== "number") {
//     console.log("Wrong input, insert a real number !")
//     return;
//   }
//   for (let i = 0; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//       console.log("FizzBuzzBazz")
//     } else if (i % 7 === 0 && i % 5 === 0) {
//       console.log("BuzzBazz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("Fizzbuzz")
//     } else if (i % 3 === 0 && i % 7 === 0) {
//       console.log("FizzBazz")
//     } else if (i % 3 === 0) {
//       console.log("Fizz")
//     } else if (i % 5 === 0) {
//       console.log("Buzz")
//     } else if (i % 7 === 0) {
//       console.log("Bazz")
//     } else {
//       console.log(i)
//     }
//   }
//   return;
// }

//refactoring

function fizzbuzz(number) {
  if (typeof number !== "number") {
    console.log("Wrong input, insert a real number !")
    return;
  }
  for (let i = 0; i <= number; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz"
    if (i % 5 === 0) result += "Buzz"
    if (i % 7 === 0) result += "Bazz"
    console.log(result || i)
  }
  return;
}
