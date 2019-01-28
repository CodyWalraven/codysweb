// arguments object - NO LONGER BOUND!! :)
// this keyword - NO LONGER BOUND HELL YES

// const add = (a, b) => {
//   console.log(arguments)
//   return a + b
// }
// console.log(add(55,1, 1001))

const user = {
  name: "Cody",
  cities: ["Mckinney", "Van Alstyne", "Sherman"],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in: ${city}`)
  }
}

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((val) => val * this.multiplyBy)
  }
}

console.log(user.printPlacesLived());
console.log(multiplier.multiply());